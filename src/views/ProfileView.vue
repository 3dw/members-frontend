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
      .ui.row.thin-only
        .ui.column
          .ui.vertical.buttons
            .ui.huge.blue.button(v-show="uid && !editing" @click="startEdit")
              i.edit.icon
              | 我要
              span(v-if="isNew") 升旗
              span(v-else) 更新資料
            .ui.huge.purple.basic.button(v-show="uid && !editing" @click="exportData")
              i.download.icon
              | 匯出自學2.0格式資料
      .ui.stackable.two.column.row(v-if="!editing")
        .ten.wide.column(v-show="!isNew")
          .ui.fluid.card.container(v-show="!isNew && !editing")
            card(:h="root", :full="true", @locate="locate", @loginGoogle="loginGoogle", :uid="uid")


        .filler(v-if="isNew")

        .six.wide.column.fat-only
          .ui.vertical.buttons
            .ui.massive.blue.button(v-show="uid && !editing" @click="startEdit")
              i.edit.icon
              | 我要
              span(v-if="isNew") 升旗
              span(v-else) 更新資料
            .ui.massive.purple.basic.button(v-show="uid && !editing" @click="exportData")
              i.download.icon
              | 匯出自學2.0格式資料

        .filler(v-if="isNew")

    .ui.container(v-if="editing")
      .ui.warning.message(v-if="longTimeNoSee() > 0.25 && !isNew")
        .header 您的資料已經一年未更新
        span(v-if="longTimeNoSee() > 0.25") 目前已被系統隱藏，請立即更新即可恢復顯示。

      form#main-form.ui.form.error.warning.success(v-show="editing")
        h2.ui.header 填寫資料
        button.ui.basic.purple.button(@click.prevent="$refs.fileInput.click()", v-show="!fileUploaded")
          i.upload.icon
          | 匯入自學2.0格式資料
        input(type="file" ref="fileInput" @change="handleFileChange", style="display: none")
        button.ui.purple.button(v-show="fileUploaded" @click.prevent="importData()", :class="{disabled: !fileUploaded}")
          i.upload.icon
          | 確認匯入
        .ui.divider
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
            img.ui.centered.small.round.image(
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
          label.required 出生年份(西元)
          input(type='text' v-model='root.learner_birth' placeholder="請輸入出生年份")
        span(v-if='root.learner_birth') 您大約 {{ toAge(root.learner_birth) }} 歲
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
            span(v-if='root.child_birth') 您的孩子大約 {{ toAge(root.child_birth) }} 歲
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
              label.required 可分享的領域或專長
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
import axios from 'axios'

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
      fileInput: null,
      fileUploaded: false,
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
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileInput = file;
        this.fileUploaded = true;
      }
    },
    exportData() {
      console.log('匯出資料');
      const data = {
        name: this.root.name,
        email: this.root.email,
        address: this.root.address,
        connect_me: this.root.connect_me,
        site: this.root.site,
        site2: this.root.site2,
        learner_birth: this.root.learner_birth,
        learner_habit: this.root.learner_habit,
        latlngColumn: this.root.latlngColumn,
        child_birth: this.root.child_birth || '',
        child_birth2: this.root.child_birth2 || '',
        share: this.root.share,
        ask: this.root.ask,
        price: this.root.price,
        note: this.root.note,
      }
      console.log(data);
      const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.json';
      a.click();
      URL.revokeObjectURL(url);
    },

    importData() {
      if (!this.fileInput) {
        alert('請先選擇檔案');
        return;
      }

      console.log('開始匯入資料');
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);

          // 驗證必要欄位
          const requiredFields = ['name', 'email', 'address', 'connect_me', 'learner_birth', 'learner_habit', 'share', 'note'];
          const missingFields = requiredFields.filter(field => !data[field]);

          if (missingFields.length > 0) {
            alert(`匯入的資料缺少必要欄位：${missingFields.join(', ')}`);
            return;
          }

          // 更新資料
          this.root = {
            ...this.root,
            name: data.name,
            email: data.email,
            address: data.address,
            connect_me: data.connect_me,
            site: data.site || '',
            site2: data.site2 || '',
            learner_birth: data.learner_birth,
            learner_habit: data.learner_habit,
            child_birth: data.child_birth || '',
            child_birth2: data.child_birth2 || '',
            latlngColumn: data.latlngColumn || '23.5330,121.0654',
            share: data.share,
            ask: data.ask || '',
            price: data.price || '',
            note: data.note
          };

          // 如果地址有更新，需要重新初始化地圖
          if (this.map && data.latlngColumn) {
            this.setMapAndMarker();
          }

          this.$forceUpdate();
          alert('資料匯入成功');

          // 重置檔案輸入狀態
          this.fileInput = null;
          this.fileUploaded = false;
          this.$refs.fileInput.value = ''; // 清空檔案輸入框
        } catch (error) {
          console.error('JSON 解析錯誤:', error);
          alert('匯入的檔案格式不正確，請確認是否為有效的 JSON 檔案');
        }
      };

      reader.onerror = () => {
        console.error('檔案讀取失敗');
        alert('檔案讀取失敗，請重試');
      };

      reader.readAsText(this.fileInput);
    },

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
      window.alert('此功能尚未開放，若要刪除旗幟，請聯繫管理員bestian@gmail.com')
  //      if (window.confirm('確認要刪除旗幟嗎？此動作無法復原。')) {
  //      this.deleteFlag();
  //    }
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

      console.log('handlePhotoUpload')
      const file = event.target.files[0]
      if (!file) return

      // 檢查檔案類型
      const validTypes = ['image/jpeg', 'image/png', 'image/gif']
      if (!validTypes.includes(file.type)) {
        alert('請上傳 JPG、PNG 或 GIF 格式的圖片')
        return
      }

      // 檢查檔案大小 (最大 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('圖片大小不能超過 5MB')
        return
      }

      try {
        // 建立 canvas 和臨時圖片元素
        const canvas = document.createElement('canvas')
        const img = new Image()

        // 等待圖片完全載入
        const imageLoadPromise = new Promise((resolve, reject) => {
          img.onload = () => resolve()
          img.onerror = () => reject(new Error('圖片載入失敗'))
          img.src = URL.createObjectURL(file)
        })

        await imageLoadPromise

        // 計算新尺寸，保持比例
        let width = 600
        let height = (img.height * width) / img.width

        // 如果高度超過 800，以高度為基準重新計算
        if (height > 800) {
          height = 800
          width = (img.width * height) / img.height
        }

        canvas.width = width
        canvas.height = height

        // 使用 pica 進行高品質縮放
        const pica = new Pica({
          features: ['js', 'wasm', 'cib'],
          idle: 2000
        })

        const resizeResult = await pica.resize(img, canvas, {
          alpha: true,
          unsharpAmount: 160,
          unsharpRadius: 0.8,
          unsharpThreshold: 1,
          quality: 3
        })

        // 轉換為 blob
        const blob = await pica.toBlob(resizeResult, 'image/jpeg', 0.92)

        // 直接上傳 blob 到 R2
        const response = await axios.post(
          `https://members-backend.alearn13994229.workers.dev/putToR2/photoURLs/${this.uid}.jpg`,
          blob,
          {
            headers: {
              'Content-Type': 'image/jpeg'
            }
          }
        )
        console.log('response', response)

        // 更新大頭貼網址
        if (response.data && response.data.url) {
          console.log('response.data.url', response.data.url)
          this.root.photoURL = response.data.url
        } else {
          throw new Error('上傳失敗：未收到有效的 URL')
        }

        // 釋放資源
        URL.revokeObjectURL(img.src)
      } catch (error) {
        console.error('圖片處理或上傳失敗:', error)
        alert('圖片處理或上傳失敗，請重試')
      }
    }
  }
}
</script>


  <style scoped>
  .hello {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1A1A1A;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .ui.header {
    color: #0066FF;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .ui.header .sub.header {
    color: #666;
    font-weight: normal;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
  }

  .ui.divider {
    margin: 2rem 0;
    border-top: 1px solid #e0e0e0;
  }

  .ui.grid.container {
    margin-top: 2rem;
  }

  .ui.fluid.card.container {
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
  }

  .ui.fluid.card.container:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .ui.form .field {
    margin-bottom: 1.5rem;
  }

  .ui.form input,
  .ui.form textarea,
  .ui.form select {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    width: 100%;
    transition: all 0.2s ease;
  }

  .ui.form input:focus,
  .ui.form textarea:focus,
  .ui.form select:focus {
    border-color: #0066FF;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.1);
  }

  .ui.form label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }

  .ui.form label.required::after {
    content: "*";
    color: #FF3B30;
    margin-left: 0.25rem;
  }

  i.red.star::before {
    content: "*";
    color: #FF3B30;
  }

  .ui.warning.message,
  .ui.error.message,
  .ui.success.message {
    border-radius: 8px;
    padding: 1rem 1.5rem;
    margin-bottom: 1.5rem;
    border: none;
  }

  .ui.warning.message {
    background-color: #FFF9E6;
    color: #946C00;
  }

  .ui.error.message {
    background-color: #FFF2F2;
    color: #CC0000;
  }

  .ui.success.message {
    background-color: #F0FFF4;
    color: #00802B;
  }

  #map {
    border-radius: 12px;
    overflow: hidden;
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .ui.center.aligned.segment {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 2rem;
    margin: 1rem 0;
  }

  .ui.centered.medium.round.image {
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .hello {
      padding: 1rem;
    }

    .ui.fluid.card.container {
      padding: 1rem;
    }

    .ui.form.reply {
      padding: 1rem;
    }

    .ui.grid.container {
      margin-top: 1rem;
    }

    .ui.button {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
  </style>
