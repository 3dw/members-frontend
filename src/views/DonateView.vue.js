import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import { app } from '../firebase';
import axios from 'axios';
export default (await import('vue')).defineComponent({
    data() {
        return {
            selectedAmount: '500',
            customAmount: 500,
            mode: 'donate-by-card',
            modes: ['donate-by-card', 'donate-by-qrcode', 'donate-by-bank-transfer', 'donate-by-code'],
            unsubscribe: (() => { }),
        };
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
        submitDonation() {
            const amount = this.selectedAmount === 'custom' ? this.customAmount : parseInt(this.selectedAmount);
            // 驗證金額
            if (isNaN(amount) || amount < 500) {
                alert('請輸入有效的捐贈金額（最少500元）');
                return;
            }
            const donationData = {
                amount: amount
            };
            console.log('準備送出捐款請求：', donationData); // 加入除錯用訊息
            axios.post('https://members-backend.alearn13994229.workers.dev/donate', donationData)
                .then(response => {
                if (response.status !== 200) {
                    throw new Error('伺服器回應異常');
                }
                return response.data;
            })
                .then(data => {
                // 在新視窗中開啟付款頁面
                window.open(data, '_blank');
            })
                .catch((error) => {
                console.error('捐款處理錯誤:', error);
                alert('捐贈失敗，請改為其他方式捐贈');
            });
        },
        listenToOrderStatus(orderId) {
            const db = getFirestore(app);
            const orderRef = doc(db, 'donations', orderId);
            this.unsubscribe = onSnapshot(orderRef, (doc) => {
                const data = doc.data();
                if (data) {
                    switch (data.status) {
                        case 'completed':
                            alert('捐贈成功，謝謝您的捐贈');
                            this.unsubscribe?.();
                            break;
                        case 'simulated':
                            alert('此為模擬捐贈，並未實際捐贈');
                            this.unsubscribe?.();
                            break;
                        case 'pending':
                            console.log('捐贈處理中，請稍後再查詢');
                            this.unsubscribe?.();
                            break;
                        case 'failed':
                            alert('捐贈失敗，請改為其他方式捐贈');
                            this.unsubscribe?.();
                            break;
                    }
                }
            });
            setTimeout(() => {
                this.unsubscribe?.();
            }, 5 * 60 * 1000);
        },
    },
    beforeUnmount() {
        this.unsubscribe?.();
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitDonation) }, });
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