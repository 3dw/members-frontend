<template lang="pug">
  .hello
    p(v-if="isInApp") 您正在 App 內使用，故無法登入，請使用一般瀏覽器登入。

    p(v-show="isNew") 請先
      router-link(target="_blank" to="/privacy-policy") 隱私權政策
      | 請詳閱並同意
    .ui.divider(v-if="isNew")
    br(v-if="isNew")
    br(v-if="isNew")
    br(v-if="isNew")

    .ui.grid.container
      .ui.stackable.two.column.row(v-if="!editing")
        .ten.wide.column(v-show="!isNew")
          .ui.fluid.card.container(v-show="!isNew && !editing")
            card(:h="root", :full="true", @locate="locate", @loginGoogle="loginGoogle", :uid="uid")


        .filler(v-if="isNew")

        .six.wide.column
          .ui.massive.blue.button(v-show="uid && !editing" @click="startEdit")
            i.edit.icon
            | 我要
            span(v-if="isNew") 升旗
            span(v-else) 更新資料

        .filler(v-if="isNew")

    .ui.container(v-if="editing")
      .ui.warning.message(v-if="longTimeNoSee() > 0.25 && !isNew")
        .header 您的資料已經一年未更新
        span(v-if="longTimeNoSee() > 0.25") 目前已被系統隱藏，請立即更新即可恢復顯示。

      form#main-form.ui.form.error.warning.success(v-show="editing")
        h2.ui.header 填寫資料
        .sub.header
          | 請填寫以下資料
          br
          | 標示
          i.red.star
          | 為必填欄位
        h4.ui.dividing.header 基本資料
        .field
          label 大頭貼
          .ui.center.aligned.segment
            img.ui.centered.medium.round.image(
              :src="root.photoURL || 'https://we.alearn.org.tw/logo-new.png'"
              style="max-width: 200px;"
            )
            input(
              type="file"
              accept="image/*"
              ref="photoInput"
              style="display: none"
              @change="handlePhotoUpload"
            )
            .ui.basic.button(@click="$refs.photoInput.click()")
              i.upload.icon
              | 上傳新大頭貼
        .field
          label.required 稱呼
          input(type='text' v-model='root.name' placeholder="您希望別人如何稱呼您")
        .field(:class="{error: root.address && (root.latlngColumn == 'undefined,undefined' || root.latlngColumn == '36.778261,-119.4179324')}")
          label.required 概略地址
          input(v-model.trim='root.address' placeholder="請輸入地址")

          .ui.error.message(v-if="(root.address && (root.latlngColumn == 'undefined,undefined' || root.latlngColumn == '36.778261,-119.4179324'))")
            .header 地址格式錯誤
            p 請確認地址格式是否正確。

          .ui.warning.message(v-if="tooDetail(root.address)")
            .header 地址過於詳細
            p 請提供更詳細的地址。

        h4.ui.header 地圖位置
          .sub.header 請在地圖上選擇位置
        #map(style="height: 300px;")
        .ui.divider
        .field
          label 網站網址
          .two.fields
            .field
              input(v-model='root.site' placeholder="請輸入個人網站網址")
              span(v-if='root.site')
                a(:href='root.site', target='_blank')
                  img(:src="'https://www.google.com/s2/favicons?domain=' + root.site", :title="root.site", :alt="root.site")
                  | 測試連結
            .field
              input(v-model='root.site2' placeholder="請輸入社群網站網址")
              span(v-if='root.site2')
                a(:href='root.site2', target='_blank')
                  img(:src="'https://www.google.com/s2/favicons?domain=' + root.site2", :title="root.site2", :alt="root.site2")
                  | 測試連結

        .two.fields
          .field
            label.required 聯絡方式
            input(v-model='root.connect_me' placeholder="請輸入聯絡方式")
          .field
            label 空閒時間
            input(type='text' v-model='root.freetime' placeholder="請輸入空閒時間")
        h4.ui.dividing.header 角色與類型
        .field
          label 角色
          select.selectpicker(v-model='root.learner_role')
            option(value='') -- 請選擇角色 --
            option(v-for="t in ['準會員', '一般會員', '理事', '監事', '常務理事', '常務監事', '理事長', '其他']", :value='t') {{ t }}
        .field
          label 類型
          select.selectpicker(v-model='root.learner_type')
            option(value='') -- 請選擇類型 --
            option(v-for="t in ['準會員', '一般會員', '志工', '教師', '其他']", :value="t") {{ t }}
        .field(:class="{error: badAge(root.learner_birth), warning: !root.learner_birth}")
          label.required 出生年份
          input(type='text' v-model='root.learner_birth' placeholder="請輸入出生年份")
        span(v-if='root.learner_birth') 您已經 {{ toAge(root.learner_birth) }} 歲
        .ui.warning.message(v-if="!root.learner_birth")
          .header 出生年份未填寫
          p 請填寫出生年份。
        .ui.error.message(v-if="badAge(root.learner_birth)")
          .header 出生年份格式錯誤
          p 請確認出生年份格式是否正確。
        .field
          label 最大孩子出生年份
          span
            input(v-model='root.child_birth' type='text' placeholder="請輸入子女出生年份")
            br
            span(v-if='root.child_birth') 您的孩子已經 {{ toAge(root.child_birth) }} 歲
            .ui.divider
            span(style="margin-left: 15px;") 最小孩子出生年份
              br
              input(v-model='root.child_birth2' type='text' placeholder="請輸入子女出生年份")
              br
            span(v-if='root.child_birth2') 您的子女出生於 {{ toAge(root.child_birth2) }} 歲至 {{ toAge(root.child_birth) }} 歲
          .ui.divider
          .three.fields
            .field
              label.required 興趣
              input(v-model='root.learner_habit' placeholder="請輸入興趣")
            .field
              label.required 分享
              input(v-model='root.share' placeholder="請輸入分享")
            .field
              label 尋找
              input(v-model='root.ask' placeholder="請輸入詢問")
            .field
              label 可支付
              input(v-model='root.price' placeholder="請輸入可支付")
          .field
            label.required 自我介紹
            textarea#note(v-model='root.note' rows='5' cols='30' placeholder="請輸入自我介紹")
          .ui.warning.message(v-if="root.note && root.note.length < 20")
            .header 自我介紹過短
            p 請至少輸入 20 個字。
          .ui.success.message(v-if="root.note && root.note.length >= 20")
            .header 自我介紹已達標準
            p 自我介紹已達到 20 個字以上。


        .warning(v-if="!emailVerified && root.login_method === 'email'")
          | note: 您的Email尚未驗證
          button.ui.button(@click="$emit('resendVerificationEmail')") 按此重發驗證信

        .warning(v-if="!isValid(root)")
          | note: 資料不完整
          i.red.star
          | 請確認所有欄位是否填寫完整。

      p(v-if="isNew")
        input.ui.checkbox(type="checkbox", v-model="agree")
        | 我已閱讀並同意
        router-link(target="_blank" to="/privacy-policy") 隱私權政策

      .ui.vertical.buttons
        button.ui.large.primary.button(:class="{disabled: !isValid(root) || (!emailVerified && root.login_method === 'email')}", @click="updateFlag")
          span(v-if="isNew")
            i.flag.icon
            | 升旗
          span(v-else)
            i.flag.icon
            | 更新資料
        router-link.ui.large.basic.primary.button(v-if="!isNew", :to="'/flag/' + uid")
          i.user.icon
          | 檢查旗幟
          i.chevron.right.icon
        .ui.large.red.button(v-if="!isNew", @click="confirmDelete")
          i.delete.icon
          | 刪除旗幟
      br
      br
      br
      br
  </template>

<script>

// import Loader from './Loader'
import mix from '../mixins/mix'
import Card from '../components/Card.vue'
import { database } from '../firebase'
import { set, get, ref, remove } from 'firebase/database'
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import Pica from 'pica'

export default {
  name: 'MyFlag',
  props: ['uid', 'user', 'emailVerified', 'email', 'mySearch', 'provider', 'photoURL', 'isInApp'],
  components: { Card },
  mixins: [mix],
  metaInfo: {
    title: "個人資料",
  },
  data () {
    return {
      agree: false,
      root: {
        latlngColumn: '23.5330,121.0654' // Default to Center of Taiwan
      },
      local: {},
      map: null,
      marker: null,
      isNew: true,
      editing: false
    }
  },
  emits: ['loginGoogle', 'locate'],
  watch: {
    uid (newU) {
      if (newU) {
        this.fetchUserData();
      }
    }
  },
  mounted() {
    if (this.uid) {
      this.fetchUserData();
    } else {
      console.log('請先登入');
      //  window.alert('請先登入'); // 假設使用了某種消息提示組件
      //  this.$router.push('/'); // 如果 uid 不存在，可以考慮重定向到登入頁面或顯示一個提示
    }
  },
  methods: {

    isValid() {
      if (!this.root.note || this.root.note.length < 20) {
        return false
      }
      const requiredFields = [
        this.root.name,
        this.root.address,
        this.root.connect_me,
        this.root.learner_birth,
        this.root.learner_habit,
        this.root.share,
        this.root.note
      ];
      return requiredFields.every(field => field && field.trim() !== '');
    },
    startEdit () {
      this.editing = true;
      L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';
      setTimeout(this.initMap, 500);
      setTimeout(this.setMapAndMarker, 1000);
      if (!this.root.email) {
        this.fetchUserData()
      }
    },
    initMap() {
      // 设置默认坐标为台湾中心点
      const defaultCoords = [23.5330, 121.0654];
      let coords = defaultCoords;

      if (typeof this.root.latlngColumn === 'string') {
        const splitCoords = this.root.latlngColumn.split(',');
        if (splitCoords.length === 2) {
          const lat = parseFloat(splitCoords[0]);
          const lng = parseFloat(splitCoords[1]);
          if (!isNaN(lat) && !isNaN(lng)) {
            coords = [lat, lng];
          }
        }
      }

      this.map = L.map('map').setView(coords, 7);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';

      this.marker = L.marker(this.map.getCenter(), {draggable: true}).addTo(this.map);

      this.marker.on('dragend', () => {
        const {lat, lng} = this.marker.getLatLng();
        this.map.setView({lat, lng});
        this.root.latlngColumn = `${lat.toFixed(5)},${lng.toFixed(5)}`;
        this.$forceUpdate();
      });
    },
    fetchUserData() {
      const userRef = ref(database, 'users/' + this.uid);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          this.isNew = false;
          this.root = snapshot.val();

          let pvdata = [...((this.user && this.user.providerData) || [])];

          if (pvdata.length === 0) {
            pvdata = [{
              displayName: (this.root.email || '').split('@')[0] || 'Unknown',
              email: this.root.email,
              photoURL: this.root.photoURL || "https://we.alearn.org.tw/logo-new.png"
            }];
          }

          this.root.email = this.root.email || this.email;
          this.root.connect_me = this.root.connect_me || this.email;
          this.root.name = this.root.name || this.user.name || pvdata[0].displayName || '新朋友';
          this.root.photoURL = this.root.photoURL || decodeURI(this.user.photoURL) || "https://we.alearn.org.tw/logo-new.png";
          this.root.login_method = this.root.login_method || 'google';
        } else {
          console.log("No data available for user: " + this.uid);

          let pvdata = [...(this.user && this.user.providerData || [])];
          if (pvdata.length === 0) {
            pvdata = [{
              displayName: (this.root.email || '').split('@')[0] || '新朋友',
              email: this.root.email || '',
              photoURL: this.root.photoURL || "https://we.alearn.org.tw/logo-new.png",
              login_method: 'email'
            }];
          }

          this.root = {
            name: pvdata[0].displayName,
            uid: this.uid,
            email: this.email,
            connect_me: this.email,
            photoURL: this.root.photoURL,
            latlngColumn: '23.5330,121.0654',
            note: '',
            login_method: this.root.login_method || 'google'
          };
          this.isNew = true;
        }
      }).catch((error) => {
        console.error(error);
        console.log("No data available for user: " + this.uid);
        console.log(this.user);

        let pvdata = [...((this.user && this.user.providerData) || [])];
        if (pvdata.length === 0) {
          pvdata = [{
            displayName: (this.root.email || '').split('@')[0] || '新朋友',
            email: this.root.email || '',
            photoURL: this.root.photoURL || "https://we.alearn.org.tw/logo-new.png",
          }];
        }

        this.root = {
          name: pvdata[0].displayName,
          uid: this.uid,
          email: this.email,
          connect_me: this.email,
          photoURL: this.root.photoURL,
          latlngColumn: '23.5330,121.0654',
          note: '',
          login_method: this.root.login_method || 'google'
        };
        this.isNew = true;
      });
    },
    setMapAndMarker() {
      if (this.map && this.marker) {
        // 设置默认坐标为台湾中心点
        const defaultCoords = [23.5330, 121.0654];
        let coords = defaultCoords;

        if (this.root && typeof this.root.latlngColumn === 'string') {
          const splitCoords = this.root.latlngColumn.split(',');
          if (splitCoords.length === 2) {
            const lat = parseFloat(splitCoords[0]);
            const lng = parseFloat(splitCoords[1]);
            if (!isNaN(lat) && !isNaN(lng)) {
              coords = [lat, lng];
            }
          }
        }

        const latLng = L.latLng(coords[0], coords[1]);
        this.map.setView(latLng, 7);
        this.marker.setLatLng(latLng);
      }
    },
    longTimeNoSee () {
      if (!this.root.lastUpdate) return Infinity;
      const today = new Date().getTime();
      return (today - this.root.lastUpdate) / 1000 / 3600 / 24 / 365.25;
    },
    tooDetail: function (addr) {
      if (!addr) {
        return false
      }
      if (addr.match(/(號|樓|F|f)/)) {
        return true
      }
      return false
    },
    updateFlag: function () {
      this.root.email = this.email || ''
      this.root.uid = this.uid || ''
      this.root.photoURL = this.root.photoURL || this.photoURL || ''
      this.root.lastUpdate = (new Date()).getTime()

      if (!this.emailVerified && this.root.login_method === 'email') {
        alert('Email尚未驗證');
      }

      if (!this.isNew) {
        this.isNew = false
        this.editing = false
        set(ref(database, 'users/' + this.uid), this.root).then(
          alert('更新成功')
        )
      } else if (!this.agree) {
        window.alert('請先閱讀並同意隱私權政策')
        return
      } else {
        console.log('new2')
        this.isNew = false
        this.editing = false
        set(ref(database, 'users/' + this.uid), this.root).then(
          alert('升旗成功')
        )
      }
      this.$emit('locate', this.root, false)
    },
    confirmDelete() {
      if (window.confirm('確認要刪除旗幟嗎？此動作無法復原。')) {
        this.deleteFlag();
      }
    },
    deleteFlag() {
      const uid = this.uid;
      // 刪除使用者數據
      remove(ref(database, 'users/' + uid))
        .then(() => {
          // 成功更新後顯示提示訊息
          alert('刪除成功');
          this.root = {}; // 清空 root 資料
          this.$emit('logout'); // 觸發登出事件
        })
        .catch((error) => {
          // 錯誤處理
          alert('刪除失敗：' + error.message);
        });
    },
    loginFB: function () {
      this.$emit('loginFB')
    },
    locate: function (h, bool) {
      this.$emit('locate', h, bool)
    },
    loginGoogle: function () {
      this.$emit('loginGoogle')
    },
    async handlePhotoUpload(event) {
      const file = event.target.files[0]
      if (!file) return

      // 建立 canvas 來調整圖片大小
      const canvas = document.createElement('canvas')
      // const ctx = canvas.getContext('2d')

      // 讀取圖片
      const img = new Image()
      img.src = URL.createObjectURL(file)

      await new Promise(resolve => {
        img.onload = () => {
          // 計算新的尺寸,保持比例
          const width = 600
          const height = (img.height * width) / img.width

          canvas.width = width
          canvas.height = height

          // 使用 pica 調整大小
          const pica = new Pica()
          pica.resize(img, canvas).then(result => {
            // 轉換為 base64
            this.root.photoURL = result.toDataURL('image/jpeg')
            resolve()
          })
        }
      })
    }
  }
}
</script>


  <style scoped>
  .hello {
    font-family: Arial, sans-serif;
    color: #333;
  }

  .ui.header {
    color: #0056b3; /* 主色調 */
  }

  p {
    font-size: 16px;
    color: #333;
    line-height: 1.6;
  }

  .ui.divider {
    margin: 1em 0;
  }

  .ui.grid.container {
    margin-top: 30px;
  }

  button.ui.orange.button, button.ui.green.button, button.ui.red.button {
    font-size: 16px;
    padding: 12px 16px;
    margin: 10px 0;
  }

  button.ui.orange.button {
    background-color: #f39c12;
    color: #fff;
  }

  button.ui.orange.button:hover {
    background-color: #e67e22;
  }

  button.ui.green.button {
    background-color: #28a745;
    color: #fff;
  }

  button.ui.green.button:hover {
    background-color: #218838;
  }

  button.ui.red.button {
    background-color: #dc3545;
    color: #fff;
  }

  button.ui.red.button:hover {
    background-color: #c82333;
  }

  .form .field {
    margin-bottom: 20px;
  }

  .form input, .form textarea, .form select {
    border: 1px solid #ced4da;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
  }

  .form label.required::before {
    content: "*";
    color: red;
  }

  #map {
    height: 300px;
    margin-bottom: 20px;
  }

  .warning, .error, .success {
    margin-bottom: 20px;
  }

  .ui.vertical.buttons .button {
    width: 100%;
    margin-bottom: 10px;
  }

  button.ui.blue.button {
    background-color: #007bff;
    color: #fff;
  }

  button.ui.blue.button:hover {
    background-color: #0056b3;
  }

  button.ui.green.button {
    background-color: #28a745;
    color: #fff;
  }

  button.ui.green.button:hover {
    background-color: #218838;
  }

  button.ui.red.button {
    background-color: #dc3545;
    color: #fff;
  }

  button.ui.red.button:hover {
    background-color: #c82333;
  }
  </style>
