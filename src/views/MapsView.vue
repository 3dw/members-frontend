<template lang="pug">
.hello
  .ui.row(v-if="!uid && (!users || toList(users).length == 0)")
        .sixteen.wide.column
          .ui.huge.buttons
            button.ui.orange.button(@click="toggleLogin")
              i.lock.icon
              | 登入以查看資料
  loader(v-else-if="!users || toList(users).length == 0")
  .ui.container#map(style="width: 100%; height: 600px;")
</template>

<script>
import { defineComponent, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import Loader from '../components/Loader.vue';
import mix from '../mixins/mix.ts';

export default defineComponent({
  name: 'MapsView',
  props: ['mySearch', 'zoom', 'center', 'cities', 'users', 'places', 'uid'],
  components: { Loader },
  mixins: [mix],
  setup(props, { emit }) {
    const map = ref(null);
    const markerClusterGroup = ref(null);
    const router = useRouter();

    // Added loginGoogle method
    function loginGoogle(autoredirect, keeploggedin) {
      emit('loginGoogle', autoredirect, keeploggedin);
    }

    function toggleLogin () {
      emit('toggleLogin');
    }

    function noHTML (s) {
      return (s || '').replace(/</g, '&gt;').replace(/>/g, '%lt;')
    }

    function toPopUp (h) {
      var p = ''
      if (!h.child_birth) {
        p = `<div class="marker-popup"><b>${noHTML(h.name)}<b>(${toAge(h.learner_birth)}歲)<br>分享：${h.share}<br>尋找：${h.ask || '無'}<div class="ui divider"></div>${(noHTML(h.note) || '').slice(0,100)}...</div>`
      } else if (h.child_birth && ! h.child_birth2) {
        p = `<div class="marker-popup"><b>${noHTML(h.name)}<b>(${toAge(h.learner_birth)}歲，孩子約${toAge(h.child_birth)}歲)<br>分享：${noHTML(h.share)}<br>尋找：${noHTML(h.ask) || '無'}<div class="ui divider"></div>${(noHTML(h.note) || '').slice(0,100)}...</div>`
      } else {
        p = `<div class="marker-popup"><b>${noHTML(h.name)}<b>(${toAge(h.learner_birth)}歲，孩子約${toAge(h.child_birth2)} ~ ${toAge(h.child_birth)}歲)<br>分享：${noHTML(h.share)}<br>尋找：${noHTML(h.ask) || '無'}<div class="ui divider"></div>${(noHTML(h.note) || '').slice(0,100)}...</div>`
      }
      return p
    }

    function toAge(y) {
      const currentYear = (new Date()).getFullYear();
      return currentYear - parseInt(y);
    }

    function toList(obj) {
      if (!obj || typeof(obj) !== 'object') {
        return [];
      } else {
        return Object.values(obj);
      }
    }

    function countLatLng(h) {
      if (!h.latlngColumn) { return { lat: 0, lng: 0 }; }
      const [lat, lng] = h.latlngColumn.split(',').map(Number);
      return { lat, lng };
    }

    function getIcon(h) {
      if (h && h.photoURL) {
        return h.photoURL;
      } else {
        return 'https://www.moedict.tw/' + (h.name || '').substr(0,1) + '.png';
      }
    }

    function getAnIcon(h) {
      return L.divIcon({
        html: `<div><img src="${getIcon(h)}" style="width: 50px; height: 50px; border-radius: 50%;"><br><span class="marker-label">${h.name}</span></div>`,
        iconSize: [50, 50],
        className: 'custom-icon'
      });
    }

    function filteredUsers(users, search) {
      if (!search) return users;
      const searchLower = search.toLowerCase();
      return users.filter(h =>
        [h.name, h.learner_habit, h.share, h.ask, h.note].some(field =>
          field && field.toLowerCase().includes(searchLower)
        )
      );
    }

    onMounted(() => {
      console.log('onMounted');
      console.log('props.zoom:', props.zoom);
      console.log('props.center:', props.center);
      const initialZoom = props.zoom || 7;
      const initialCenter = props.center || [22.613220, 121.219482];

      map.value = L.map('map').setView(initialCenter, initialZoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map.value);

      markerClusterGroup.value = L.markerClusterGroup();

      if (map.value && markerClusterGroup.value) {
        map.value.addLayer(markerClusterGroup.value);

        if (props.users && toList(props.users).length > 0) {
          filteredUsers(toList(props.users), props.mySearch).forEach((h) => {
            const marker = L.marker(countLatLng(h), { icon: getAnIcon(h) })
              .bindPopup(toPopUp(h));

            marker.on('dblclick', () => {
              router.push('/flag/' + h.uid);
            });

            marker.on('popupopen', () => {
              const popup = marker.getPopup();
              popup.getElement().addEventListener('click', () => {
                router.push('/flag/' + h.uid);
              });
            });

            markerClusterGroup.value.addLayer(marker);
          });
        }
      }
    });

    // 添加對 center 和 zoom 屬性變化的監聽
    watch([() => props.center, () => props.zoom], ([newCenter, newZoom]) => {
      // 先等一下，確保 map.value 已經初始化，用setTimeout
      console.log('newCenter:', newCenter);
      console.log('newZoom:', newZoom);
      setTimeout(() => {
        if (map.value && newCenter && newCenter.length === 2) {
          // 確保座標有效
          if (!isNaN(newCenter[0]) && !isNaN(newCenter[1])) {
            console.log('更新地圖視圖到:', newCenter, '縮放級別:', newZoom);
            map.value.setView(newCenter, newZoom || map.value.getZoom());
          }
        } else {
          console.error('無效的座標:', newCenter);
        }
      }, 500);
    });

    // 也監聽 users 和 mySearch 的變化
    watch([() => props.users, () => props.mySearch], ([newUsers, newSearch]) => {
      if (markerClusterGroup.value) {
        markerClusterGroup.value.clearLayers();
        if (newUsers && toList(newUsers).length > 0) {
          filteredUsers(toList(newUsers), newSearch).forEach((h) => {
            const marker = L.marker(countLatLng(h), { icon: getAnIcon(h) })
              .bindPopup(toPopUp(h));

            marker.on('dblclick', () => {
              router.push('/flag/' + h.uid);
            });

            marker.on('popupopen', () => {
              const popup = marker.getPopup();
              popup.getElement().addEventListener('click', () => {
                router.push('/flag/' + h.uid);
              });
            });

            markerClusterGroup.value.addLayer(marker);
          });
        }
      }
    });

    return { map, toList, countLatLng, getIcon, getAnIcon,
      loginGoogle,
      toggleLogin // Make sure to return this method to make it available in the template

    };
  }
});
</script>

<style>



.ui.button.orange {
  background-color: #f39c12; /* 橙色背景 */
  color: #fff; /* 白色文字 */
}

.ui.button.orange:hover {
  background-color: #e67e22; /* 懸停時更深的橙色 */
}

.leaflet-marker-icon {
  border-radius: 50%;

}

.custom-icon span {
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 12px;
}

.marker-label {
  font-weight: bold;
  font-size: 14px !important;
}

.marker-popup {
  width: 95%;
  min-width: 300px;
  cursor: pointer;
  white-space: pre-line;
}

.marker-popup b {
  color: blue;
  font-size: 14px;
}

.leaflet-container a.leaflet-popup-close-button {
  display: none;
}

/* Add this new CSS rule */
.ui.container#map {
  z-index: 1;
  position: relative; /* Ensure it has a position context */
}

.ui.lock.icon {
  margin-right: 8px;
}


</style>
