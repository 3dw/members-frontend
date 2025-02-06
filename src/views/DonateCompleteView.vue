<template>
  <div class="ui segment container">
    <div class="ui segment" v-if="status === 'success'">
      <h2 class="main-title">捐款完成，謝謝您的愛心</h2>
      <h3>請將以下資訊寄至本會行政室：
        <a href="mailto:alearn13994229@gmail.com">Email：alearn13994229@gmail.com</a>
      </h3>
      <ul>
        <li>捐款人姓名</li>
        <li>聯絡電話</li>
        <li>通訊地址</li>
        <li>捐款金額</li>
        <li>匯款帳號後五碼</li>
        <li>指定支持的專案（可略）</li>
      </ul>
      <p>本會將開立捐款收據並寄回給您，可供節稅使用。</p>
    </div>

    <div class="ui segment" v-if="status === 'failed'">
      <h2 class="main-title">捐款失敗</h2>
      <p>很抱歉，您的捐款處理失敗。請嘗試其他捐款方式或稍後再試。</p>
    </div>

    <div class="ui segment" v-if="status === 'simulated'">
      <h2 class="main-title">模擬捐款完成</h2>
      <p>這是一筆測試性質的捐款，並未實際進行交易。</p>
    </div>

    <div class="ui segment" v-if="status === 'pending'">
      <h2 class="main-title">處理中</h2>
      <p>您的捐款正在處理中，請稍候...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { getFirestore, doc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { app } from '../firebase';

export default {
  data() {
    return {
      status: 'pending',
      merchantTradeNo: '',
      unsubscribe: null as Unsubscribe | null,
    };
  },
  mounted() {
    this.merchantTradeNo = this.$route.params.merchantTradeNo as string || '';
    if (this.merchantTradeNo) {
      this.listenToOrderStatus(this.merchantTradeNo);
    }
  },
  methods: {
    listenToOrderStatus(orderId: string) {
      const db = getFirestore(app);
      const orderRef = doc(db, 'donations', orderId);

      this.unsubscribe = onSnapshot(orderRef, (doc) => {
        const data = doc.data();
        if (data) {
          this.status = data.status;
        }
      });

      // 5分鐘後停止監聽
      setTimeout(() => {
        this.unsubscribe?.();
      }, 5 * 60 * 1000);
    }
  },
  beforeUnmount() {
    this.unsubscribe?.();
  }
};
</script>

<style scoped>

li, p {
  font-size: 1.2rem;
  line-height: 1.8;
}

.main-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #4CAF50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
  text-align: center;
}

.ui.container {
  background: #f9f9f9;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.ui.container p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #333;
}

.ui.header {
  color: #388E3C;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.ui.basic.segment {
  padding: 2rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.ui.basic.segment:last-of-type {
  border-bottom: none;
}

.ui.ordered.list {
  padding-left: 2rem;
  margin: 1rem 0;
}

.ui.ordered.list .item {
  color: #555;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  position: relative;
}

.ui.ordered.list .item::before {
  content: "•";
  position: absolute;
  left: -1.5rem;
  color: #4CAF50;
  font-size: 1.2rem;
  line-height: 1;
}

.footer {
  font-size: 0.9rem;
  color: #757575;
  text-align: right;
}

.card-inputs {
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 600px;
}

.card-inputs input {
  width: 50px;
  margin-right: 5px;
  text-align: center;
}

.expiry-inputs {
  display: flex;
  align-items: center;
  gap: 5px;
}

.expiry-inputs input {
  width: 40px;
  text-align: center;
}

.expiry-inputs span {
  color: #666;
}
</style>
