export default (await import('vue')).defineComponent({
    props: {
        devMode: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {
            selectedAmount: '150',
            customAmount: 150,
            mode: 'donate-by-card',
            modes: ['donate-by-card', 'donate-by-qrcode', 'donate-by-bank-transfer', 'donate-by-code'],
            merchantID: '3214475', // 正式金流
            returnURL: 'https://members-backend.alearn13994229.workers.dev/donation_callback',
            checkMacValue: '',
            clientBackURL: window.location.origin + '/donate',
            // orderResultURL: '',
            status: '',
            showDonationStatus: false,
            pollingInterval: null,
        };
    },
    async mounted() {
        //    this.orderResultURL = window.location.origin + '/donate_complete/' + this.merchantTradeNo;
        this.checkMacValue = await this.generateCheckMacValue();
        // 檢查 URL 是否包含訂單編號
        const urlParams = new URLSearchParams(window.location.search);
        const merchantTradeNo = urlParams.get('merchantTradeNo');
        if (merchantTradeNo) {
            this.showDonationStatus = true;
            this.startPolling(merchantTradeNo);
        }
    },
    computed: {
        donationAmount() {
            return this.selectedAmount === 'custom' ? this.customAmount : parseInt(this.selectedAmount);
        },
        merchantTradeNo() {
            // 產生唯一訂單編號,可以用時間戳記+隨機數
            return `DON${Date.now()}${Math.floor(Math.random() * 1000)}`;
        },
        merchantTradeDate() {
            // 產生當前時間,格式: yyyy/MM/dd HH:mm:ss
            const now = new Date();
            return now.toLocaleString('zh-TW', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/$3');
        },
    },
    watch: {
        async donationAmount() {
            this.checkMacValue = await this.generateCheckMacValue();
        }
    },
    methods: {
        parse(mode) {
            if (mode === 'donate-by-card') {
                return '信用卡捐贈';
            }
            else if (mode === 'donate-by-bank-transfer') {
                return '銀行匯款捐贈';
            }
            else if (mode === 'donate-by-qrcode') {
                return 'QR Code掃碼捐贈';
            }
            else if (mode === 'donate-by-code') {
                return '愛心碼捐贈';
            }
        },
        clearCustomAmount() {
            if (this.selectedAmount !== 'custom') {
                this.customAmount = 150;
            }
        },
        async generateCheckMacValue() {
            const params = {
                MerchantID: this.merchantID,
                MerchantTradeNo: this.merchantTradeNo,
                MerchantTradeDate: this.merchantTradeDate,
                PaymentType: 'aio',
                TotalAmount: this.donationAmount,
                TradeDesc: '自主學習促進會捐款',
                ItemName: '捐款',
                ReturnURL: this.returnURL,
                ChoosePayment: 'Credit',
                EncryptType: '1',
                ClientBackURL: this.clientBackURL,
                // OrderResultURL: this.orderResultURL,
            };
            const sortedKeys = Object.keys(params).sort();
            const hashKey = 'uwd8iyVvedwkGKY7'; // 正式的金流 HashKey
            const hashIV = 'IsVGPnoyr1xzvExa'; // 正式的金流 HashIV
            let checkString = 'HashKey=' + hashKey;
            sortedKeys.forEach(key => {
                checkString += '&' + key + '=' + params[key];
            });
            checkString += '&HashIV=' + hashIV;
            // 使用 encodeURIComponent 進行 URL 編碼
            let encodedString = encodeURIComponent(checkString).toLowerCase();
            // 修正特殊字元的處理
            encodedString = encodedString
                .replace(/%20/g, '+')
                .replace(/%2d/g, '-')
                .replace(/%5f/g, '_')
                .replace(/%2e/g, '.')
                .replace(/%21/g, '!')
                .replace(/%2a/g, '*')
                .replace(/%28/g, '(')
                .replace(/%29/g, ')');
            const sha256Hash = await this.sha256(encodedString);
            return sha256Hash.toUpperCase();
        },
        sha256(str) {
            const buffer = new TextEncoder().encode(str);
            return crypto.subtle.digest('SHA-256', buffer).then(hash => {
                return Array.from(new Uint8Array(hash))
                    .map(b => b.toString(16).padStart(2, '0'))
                    .join('');
            });
        },
        async checkDonationStatus(orderId) {
            try {
                const response = await fetch(`https://members-backend.alearn13994229.workers.dev/check_donation_status/${orderId}`);
                const data = await response.json();
                // console.log(data);
                if (data && data.status) {
                    this.status = data.status;
                }
                else {
                    this.status = 'pending';
                }
            }
            catch (error) {
                console.error('檢查捐款狀態時發生錯誤:', error);
            }
        },
        handleSubmit() {
            // 當表單提交時開始輪詢
            this.showDonationStatus = true;
            this.startPolling(this.merchantTradeNo);
        },
        startPolling(orderId) {
            // 設定初始狀態為處理中
            this.status = 'pending';
            // 立即檢查一次
            this.checkDonationStatus(orderId);
            // 每10秒檢查一次
            this.pollingInterval = setInterval(() => {
                this.checkDonationStatus(orderId);
                if (this.status === 'success' || this.status === 'failed' || this.status === 'simulated') {
                    if (this.pollingInterval) {
                        clearInterval(this.pollingInterval);
                    }
                }
            }, 10000);
            // 5分鐘後停止輪詢
            setTimeout(() => {
                if (this.pollingInterval) {
                    clearInterval(this.pollingInterval);
                }
            }, 5 * 60 * 1000);
        }
    },
    beforeUnmount() {
        if (this.pollingInterval) {
            clearInterval(this.pollingInterval);
        }
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_styleScopedClasses['donate-heart'];
    __VLS_styleScopedClasses['donate-heart'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ordered'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ordered'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['card-inputs'];
    __VLS_styleScopedClasses['expiry-inputs'];
    __VLS_styleScopedClasses['expiry-inputs'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment container") }, });
    if (__VLS_ctx.showDonationStatus) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
        if (__VLS_ctx.status === 'success') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("main-title") }, });
        }
        if (__VLS_ctx.status === 'failed') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("main-title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        }
        if (__VLS_ctx.status === 'simulated') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("main-title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        }
        if (__VLS_ctx.status === 'pending') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("main-title") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ellipsis") }, });
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (!__VLS_ctx.showDonationStatus) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("ui header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("dollar icon") }, });
    if (__VLS_ctx.mode === 'donate-by-card') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else if (__VLS_ctx.mode === 'donate-by-qrcode') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else if (__VLS_ctx.mode === 'donate-by-bank-transfer') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else if (__VLS_ctx.mode === 'donate-by-code') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui vertical buttons") }, });
    for (const [m] of __VLS_getVForSourceType((__VLS_ctx.modes))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.mode = m;
                } }, ...{ class: ("ui basic green large button") }, ...{ class: (({ 'active': __VLS_ctx.mode === m })) }, key: ((m)), });
        (__VLS_ctx.parse(m));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({ src: ("../assets/donate_heart.webp"), alt: ("捐贈愛心"), ...{ class: ("donate-heart") }, });
    if (__VLS_ctx.mode === 'donate-by-card') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleSubmit) }, method: ("post"), action: ("https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5"), target: ("_blank"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui form") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui two stackable fields") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("compact field") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.clearCustomAmount) }, value: ((__VLS_ctx.selectedAmount)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("150"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("500"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("1000"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("2000"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("custom"), });
        if (__VLS_ctx.selectedAmount === 'custom') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), min: ("150"), placeholder: ("輸入金額"), });
            (__VLS_ctx.customAmount);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("MerchantID"), value: ((__VLS_ctx.merchantID)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("MerchantTradeNo"), value: ((__VLS_ctx.merchantTradeNo)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("MerchantTradeDate"), value: ((__VLS_ctx.merchantTradeDate)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("PaymentType"), value: ("aio"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("TotalAmount"), value: ((__VLS_ctx.donationAmount)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("TradeDesc"), value: ("自主學習促進會捐款"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("ItemName"), value: ("捐款"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("ReturnURL"), value: ((__VLS_ctx.returnURL)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("ChoosePayment"), value: ("Credit"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("EncryptType"), value: ("1"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("CheckMacValue"), value: ((__VLS_ctx.checkMacValue)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("ClientBackURL"), value: ((__VLS_ctx.clientBackURL)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("ui basic green huge active button") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("dollar icon") }, });
    }
    if (__VLS_ctx.mode === 'donate-by-bank-transfer') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui divider") }, });
    }
    if (__VLS_ctx.mode === 'donate-by-bank-transfer') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
    }
    if (__VLS_ctx.mode === 'donate-by-qrcode') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ id: ("#donate-qrcode"), src: ("../assets/autolearn_donate_QRCode.png"), alt: ("線上捐款"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    if (__VLS_ctx.mode === 'donate-by-code') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ id: ("donate"), src: ("../assets/9806.png"), alt: ("愛心碼"), });
    }
    if (__VLS_ctx.mode !== 'donate-by-code') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui divider") }, });
    }
    if (__VLS_ctx.mode !== 'donate-by-code') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fluid segment") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/donate_records"), }));
        const __VLS_2 = __VLS_1({ to: ("/donate_records"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
        __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ src: ("https://docs.google.com/forms/d/e/1FAIpQLSeUlMQeS4ztSkZ48GhytbQapT7TG-iBNB31YTWHVVT6XceGhQ/viewform?embedded=true"), width: ("100%"), height: ("4300"), frameborder: ("0"), marginheight: ("0"), marginwidth: ("0"), });
    }
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['main-title'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['main-title'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['main-title'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['main-title'];
    __VLS_styleScopedClasses['ellipsis'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['dollar'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['vertical'];
    __VLS_styleScopedClasses['buttons'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['green'];
    __VLS_styleScopedClasses['large'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['donate-heart'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['two'];
    __VLS_styleScopedClasses['stackable'];
    __VLS_styleScopedClasses['fields'];
    __VLS_styleScopedClasses['compact'];
    __VLS_styleScopedClasses['field'];
    __VLS_styleScopedClasses['field'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['green'];
    __VLS_styleScopedClasses['huge'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['dollar'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['fluid'];
    __VLS_styleScopedClasses['segment'];
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
//# sourceMappingURL=DonateView.vue.js.map