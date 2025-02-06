import { defineComponent } from 'vue';
import { set, ref, onValue, get } from 'firebase/database'; // 從firebase/database導入onValue函式用於資料即時讀取
import { getAuth, setPersistence, browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, inMemoryPersistence } from 'firebase/auth';
import { app, usersRef, database } from './firebase'; // 導入Firebase相關配置和參考
import InApp from 'detect-inapp'; // 導入InApp以偵測瀏覽器內部環境
import Login from './components/Login.vue';
const inApp = new InApp(window.navigator.userAgent);
// 初始假設為 InApp 庫的偵測結果
const actualInApp = inApp.isInApp;
const auth = getAuth(app); // 獲取Firebase身份驗證實例
export default defineComponent({
    name: 'App',
    components: {
        Login
    },
    data() {
        const obj = {};
        const obj1 = {};
        return {
            // 使用修正後的 actualInApp
            isInApp: actualInApp, // 檢測是否在應用內部
            showLogin: false,
            sidebarVisible: false,
            uid: '',
            users: obj,
            user: obj1,
            photoURL: '',
            email: '',
            emailVerified: false,
            devMode: false,
            zoom: 13,
            center: [23.5330, 121.0654]
        };
    },
    watch: {
        // 監聽路由變化
        '$route'() {
            // 路由變化時關閉側邊欄
            this.sidebarVisible = false;
        }
    },
    mounted() {
        const vm = this;
        auth.onAuthStateChanged((user) => {
            if (user) {
                vm.uid = user.uid;
                vm.email = user.email || '';
                vm.photoURL = user.photoURL || 'https://we.alearn.org.tw/logo-new.png';
                vm.emailVerified = user.emailVerified;
                vm.updateUserData(user);
            }
            else {
                vm.uid = '';
                vm.email = '';
                vm.photoURL = '';
                vm.emailVerified = false;
            }
        });
    },
    methods: {
        toggleLogin() {
            this.showLogin = !this.showLogin;
        },
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        },
        logout() {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const vm = this; // 儲存當前Vue實例
            auth.signOut().then(function () {
                vm.user = null; // 清除用戶資料
                vm.users = {}; // 清除所有用戶資料
                vm.uid = ''; // 清除用戶ID
                vm.photoURL = ''; // 清除用戶頭像URL
                vm.$nextTick().then(() => {
                    vm.$router.push('/'); // 導航回首頁
                });
            });
        },
        async registerWithEmail(normalRegister_email, normalRegister_password, normalRegister_keeploggedin) {
            if (!normalRegister_password || typeof normalRegister_password !== 'string') {
                alert('接收的密碼無效，請確認輸入');
                return;
            }
            try {
                const auth = getAuth();
                const userCredential = await createUserWithEmailAndPassword(auth, normalRegister_email, normalRegister_password);
                const user = userCredential.user;
                if (user && user.email) {
                    this.email = user.email;
                    this.uid = user.uid;
                    this.photoURL = 'https://we.alearn.org.tw/logo-new.png';
                    const pvdata = [{
                            displayName: this.email?.split('@')[0] || 'Unknown',
                            email: this.email,
                            photoURL: this.photoURL
                        }];
                    this.user = { email: this.email, photoURL: this.photoURL, providerData: pvdata };
                    const userRef = ref(database, 'users/' + this.uid);
                    const snapshot = await get(userRef);
                    if (!snapshot.exists()) {
                        await set(userRef, {
                            email: this.email,
                            name: this.email?.split('@')[0] || 'Unknown',
                            connect_me: this.email,
                            photoURL: this.photoURL,
                            login_method: 'email'
                        });
                    }
                    await sendEmailVerification(user);
                    alert('驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。');
                    this.logout();
                }
                else {
                    console.error('User or user email is undefined after registration');
                    alert('註冊過程中發生錯誤，請稍後再試。');
                }
            }
            catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('此電子郵件已被使用，請使用其他電子郵件或嘗試登入。');
                }
                else {
                    console.error("註冊失敗：", error);
                    alert("註冊失敗：" + error.message);
                }
            }
        },
        async loginWithEmail(autoredirect, normalRegister_email, normalRegister_password, normalRegister_keeploggedin) {
            try {
                if (normalRegister_keeploggedin) {
                    await setPersistence(auth, browserLocalPersistence);
                }
                else {
                    await setPersistence(auth, inMemoryPersistence);
                }
                const userCredential = await signInWithEmailAndPassword(auth, normalRegister_email, normalRegister_password);
                const user = userCredential.user;
                if (!user.emailVerified) {
                    alert('您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。');
                    this.resendVerificationEmail();
                    this.logout();
                    return;
                }
                this.emailVerified = true;
                console.log('登入成功：', user);
                this.updateUserData(user);
                if (autoredirect && user.emailVerified) {
                    this.$nextTick().then(() => {
                        this.$router.push('/profile');
                    });
                }
            }
            catch (error) {
                console.error("登入失敗：", error);
                let errorMessage = "登入失敗：";
                if (error.message.includes('auth/wrong-password')) {
                    errorMessage = "密碼錯誤，請檢查後再試。";
                }
                else if (error.message.includes('auth/user-not-found')) {
                    errorMessage = "帳號不存在，請確認您的電子郵件地址。";
                }
                else if (error.message.includes('auth/invalid-email')) {
                    errorMessage = "無效的電子郵件地址，請重新輸入。";
                }
                else if (error.message.includes('auth/too-many-requests')) {
                    errorMessage = "嘗試次數過多，請稍後再試。";
                }
                else {
                    errorMessage += error.message;
                }
                alert(errorMessage);
            }
        },
        resendVerificationEmail() {
            const user = getAuth().currentUser;
            if (user) {
                sendEmailVerification(user).then(() => {
                    console.log('驗證郵件已重新發送。');
                }).catch((error) => {
                    console.error('重新發送驗證郵件失敗：', error);
                    // alert('重新發送驗證郵件失敗，請稍後再試。');
                });
            }
        },
        updateUserData(user) {
            if (!user) {
                console.error('User is undefined in updateUserData');
                return;
            }
            this.email = user.email || null;
            this.uid = user.uid;
            this.photoURL = user.photoURL ? decodeURI(user.photoURL) : "https://we.alearn.org.tw/logo-new.png";
            this.emailVerified = user.emailVerified;
            const pvdata = user.providerData || [{
                    displayName: this.email?.split('@')[0] || 'Unknown',
                    email: this.email,
                    photoURL: this.photoURL
                }];
            this.updateUserInfo(pvdata);
        },
        // eslint-disable-next-line
        locate: function (h, gotoMap) {
            this.zoom = 13;
            this.center = h.latlngColumn.split(',');
            console.log("Updated location:", this.center);
            // 使用 nextTick 確保子組件接收到最新的 props
            this.$nextTick(() => {
                console.log('Center updated and propagated to children');
            });
            if (gotoMap) {
                this.$router.push({ path: '/maps' });
            }
        },
        updateUserInfo(pvdata) {
            if (this.users && this.uid && this.users[this.uid]) {
                this.user = { ...this.users[this.uid], providerData: pvdata };
                if (this.user.latlngColumn) {
                    this.locate(this.user, false);
                }
            }
            else {
                this.fetchUserData(pvdata);
            }
        },
        async fetchUserData(pvdata) {
            try {
                onValue(usersRef, (snapshot) => {
                    const data = snapshot.val();
                    this.users = data;
                    if (this.uid && this.users && this.users[this.uid]) {
                        this.user = { ...this.users[this.uid], providerData: pvdata };
                        // console.log(this.user.photoURL);
                        if (this.user.photoURL && this.user.photoURL != 'undefined') {
                            this.photoURL = this.user.photoURL;
                        }
                        //
                        //            if (this.user.latlngColumn) {
                        //              this.locate(this.user, false);
                        //            }
                    }
                    else {
                        this.user = { providerData: pvdata };
                    }
                }, (error) => {
                    this.user = { providerData: pvdata };
                    console.error("Error fetching users:", error);
                });
            }
            catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Login
        },
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
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['sidebar'];
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
//# sourceMappingURL=App.vue.js.map