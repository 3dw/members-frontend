import mix from '../mixins/mix';
import Card from '../components/Card.vue';
import { database } from '../firebase';
import { set, get, ref, remove } from 'firebase/database';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import Pica from 'pica';
import axios from 'axios';
export default (await import('vue')).defineComponent({
    name: 'MyFlag',
    props: ['uid', 'user', 'emailVerified', 'email', 'mySearch', 'provider', 'photoURL', 'isInApp'],
    components: { Card },
    mixins: [mix],
    metaInfo: {
        title: "個人資料",
    },
    data() {
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
        };
    },
    emits: ['loginGoogle', 'locate'],
    watch: {
        uid(newU) {
            if (newU) {
                this.fetchUserData();
            }
        }
    },
    mounted() {
        if (this.uid) {
            this.fetchUserData();
        }
        else {
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
            };
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
                }
                catch (error) {
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
            if (!this.root.note || this.root.note.length < 5) {
                return false;
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
        startEdit() {
            this.editing = true;
            L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/';
            setTimeout(this.initMap, 500);
            setTimeout(this.setMapAndMarker, 1000);
            if (!this.root.email) {
                this.fetchUserData();
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
            this.marker = L.marker(this.map.getCenter(), { draggable: true }).addTo(this.map);
            this.marker.on('dragend', () => {
                const { lat, lng } = this.marker.getLatLng();
                this.map.setView({ lat, lng });
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
                }
                else {
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
        longTimeNoSee() {
            if (!this.root.lastUpdate)
                return Infinity;
            const today = new Date().getTime();
            return (today - this.root.lastUpdate) / 1000 / 3600 / 24 / 365.25;
        },
        tooDetail: function (addr) {
            if (!addr) {
                return false;
            }
            if (addr.match(/(號|樓|F|f)/)) {
                return true;
            }
            return false;
        },
        updateFlag: function () {
            this.root.email = this.email || '';
            this.root.uid = this.uid || '';
            this.root.photoURL = this.root.photoURL || this.photoURL || '';
            this.root.lastUpdate = (new Date()).getTime();
            if (!this.emailVerified && this.root.login_method === 'email') {
                alert('Email尚未驗證');
            }
            if (!this.isNew) {
                this.isNew = false;
                this.editing = false;
                set(ref(database, 'users/' + this.uid), this.root).then(alert('更新成功'));
            }
            else if (!this.agree) {
                window.alert('請先閱讀並同意隱私權政策');
                return;
            }
            else {
                console.log('new2');
                this.isNew = false;
                this.editing = false;
                set(ref(database, 'users/' + this.uid), this.root).then(alert('升旗成功'));
            }
            this.$emit('locate', this.root, false);
        },
        confirmDelete() {
            window.alert('此功能尚未開放，若要刪除旗幟，請聯繫管理員bestian@gmail.com');
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
            this.$emit('loginFB');
        },
        locate: function (h, bool) {
            this.$emit('locate', h, bool);
        },
        loginGoogle: function () {
            this.$emit('loginGoogle');
        },
        async handlePhotoUpload(event) {
            console.log('handlePhotoUpload');
            const file = event.target.files[0];
            if (!file)
                return;
            // 檢查檔案類型
            const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!validTypes.includes(file.type)) {
                alert('請上傳 JPG、PNG 或 GIF 格式的圖片');
                return;
            }
            // 檢查檔案大小 (最大 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('圖片大小不能超過 5MB');
                return;
            }
            try {
                // 建立 canvas 和臨時圖片元素
                const canvas = document.createElement('canvas');
                const img = new Image();
                // 等待圖片完全載入
                const imageLoadPromise = new Promise((resolve, reject) => {
                    img.onload = () => resolve();
                    img.onerror = () => reject(new Error('圖片載入失敗'));
                    img.src = URL.createObjectURL(file);
                });
                await imageLoadPromise;
                // 計算新尺寸，保持比例
                let width = 600;
                let height = (img.height * width) / img.width;
                // 如果高度超過 800，以高度為基準重新計算
                if (height > 800) {
                    height = 800;
                    width = (img.width * height) / img.height;
                }
                canvas.width = width;
                canvas.height = height;
                // 使用 pica 進行高品質縮放
                const pica = new Pica({
                    features: ['js', 'wasm', 'cib'],
                    idle: 2000
                });
                const resizeResult = await pica.resize(img, canvas, {
                    alpha: true,
                    unsharpAmount: 160,
                    unsharpRadius: 0.8,
                    unsharpThreshold: 1,
                    quality: 3
                });
                // 轉換為 blob
                const blob = await pica.toBlob(resizeResult, 'image/jpeg', 0.92);
                // 直接上傳 blob 到 R2
                const response = await axios.post(`https://members-backend.alearn13994229.workers.dev/putToR2/photoURLs/${this.uid}.jpg`, blob, {
                    headers: {
                        'Content-Type': 'image/jpeg'
                    }
                });
                console.log('response', response);
                // 更新大頭貼網址
                if (response.data && response.data.url) {
                    console.log('response.data.url', response.data.url);
                    this.root.photoURL = response.data.url;
                }
                else {
                    throw new Error('上傳失敗：未收到有效的 URL');
                }
                // 釋放資源
                URL.revokeObjectURL(img.src);
            }
            catch (error) {
                console.error('圖片處理或上傳失敗:', error);
                alert('圖片處理或上傳失敗，請重試');
            }
        }
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ Card },
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['fluid'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['message'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['message'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['warning'];
    __VLS_styleScopedClasses['message'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['error'];
    __VLS_styleScopedClasses['message'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['success'];
    __VLS_styleScopedClasses['message'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['hello'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['fluid'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
//# sourceMappingURL=ProfileView.vue.js.map