import mix from '../mixins/mix';
import Card from '../components/Card.vue';
import { database } from '../firebase';
import { set, get, ref, remove } from 'firebase/database';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import Pica from 'pica';
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
        isValid() {
            if (!this.root.note || this.root.note.length < 20) {
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
            this.$emit('loginFB');
        },
        locate: function (h, bool) {
            this.$emit('locate', h, bool);
        },
        loginGoogle: function () {
            this.$emit('loginGoogle');
        },
        async handlePhotoUpload(event) {
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
                // 使用 pica 進行高品質縮放，啟用所有優化選項
                const pica = new Pica({
                    features: ['js', 'wasm', 'cib'], // 啟用所有可用功能
                    idle: 2000 // 增加空閒時間以確保處理完整
                });
                const resizeResult = await pica.resize(img, canvas, {
                    alpha: true,
                    unsharpAmount: 160, // 增加銳利度
                    unsharpRadius: 0.8,
                    unsharpThreshold: 1,
                    quality: 3 // 最高品質設定
                });
                // 使用 pica 的內建優化器進行最終處理
                const optimizedCanvas = await pica.toBlob(resizeResult, 'image/jpeg', 0.92);
                // 轉換為 base64
                const reader = new FileReader();
                reader.onloadend = () => {
                    this.root.photoURL = reader.result;
                };
                reader.readAsDataURL(optimizedCanvas);
                // 釋放資源
                URL.revokeObjectURL(img.src);
            }
            catch (error) {
                console.error('圖片處理失敗:', error);
                alert('圖片處理失敗，請重試');
            }
        }
    }
});
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['orange'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['orange'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['green'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['green'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['red'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['red'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['blue'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['green'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['green'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['red'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['red'];
    __VLS_styleScopedClasses['button'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
//# sourceMappingURL=ProfileView.vue.js.map