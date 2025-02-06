export default (await import('vue')).defineComponent({
    data() {
        return {
            selectedAmount: '500',
            customAmount: 500,
            mode: 'donate-by-card',
            modes: ['donate-by-card', 'donate-by-qrcode', 'donate-by-bank-transfer', 'donate-by-code'],
            merchantID: '3002607',
            returnURL: 'https://members-backend.alearn13994229.workers.dev/donation_callback',
            checkMacValue: '',
            clientBackURL: window.location.origin + '/donate',
            orderResultURL: '',
        };
    },
    async mounted() {
        this.orderResultURL = window.location.origin + '/donate_complete/' + this.merchantTradeNo;
        this.checkMacValue = await this.generateCheckMacValue();
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
                return '信用卡小額捐贈';
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
                this.customAmount = 500;
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
                OrderResultURL: this.orderResultURL,
            };
            const sortedKeys = Object.keys(params).sort();
            const hashKey = 'pwFHCqoQZGmho4w6'; // 綠界金流提供的 HashKey
            const hashIV = 'EkRm7iFT261dpevs'; // 綠界金流提供的 HashIV
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
        }
    },
});
;
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
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
    if (__VLS_ctx.mode === 'donate-by-card') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ method: ("post"), action: ("https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5"), target: ("_blank"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui form") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui two stackable fields") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("compact field") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.clearCustomAmount) }, value: ((__VLS_ctx.selectedAmount)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("500"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("1000"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("2000"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("custom"), });
        if (__VLS_ctx.selectedAmount === 'custom') {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("field") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
            __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("number"), min: ("500"), placeholder: ("輸入金額"), });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("hidden"), name: ("OrderResultURL"), value: ((__VLS_ctx.orderResultURL)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("ui basic green large button") }, });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:alearn13994229@gmail.com"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['container'];
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
    __VLS_styleScopedClasses['large'];
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
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
//# sourceMappingURL=DonateView.vue.js.map