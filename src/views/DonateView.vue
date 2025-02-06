<template>
  <div class="ui segment container">
    <h2 class="ui header">
      <span><i class="dollar icon"></i></span>
      <span v-if="mode === 'donate-by-card'">信用卡小額捐贈</span>
      <span v-else-if="mode === 'donate-by-qrcode'">QR Code掃碼捐贈</span>
      <span v-else-if="mode === 'donate-by-bank-transfer'">銀行匯款捐贈</span>
      <span v-else-if="mode === 'donate-by-code'">愛心碼捐贈</span>

      <span>&nbsp;&nbsp;&nbsp;</span>
      <div class="ui vertical buttons">
        <button class="ui basic green large button" :class="{ 'active': mode === m }" v-for="m in modes" :key="m" @click="mode = m">{{ parse(m) }}</button>
      </div>
    </h2>

    <form @submit.prevent="submitDonation" v-if="mode === 'donate-by-card'">
      <div class="ui form">
        <div class="ui two stackable fields">
          <div class="compact field">
            <label>選擇捐贈金額</label>
            <select v-model="selectedAmount" @change="clearCustomAmount">
              <option value="500">新台幣500元</option>
              <option value="1000">新台幣1000元</option>
              <option value="2000">新台幣2000元</option>
              <option value="custom">自訂金額</option>
            </select>
          </div>
          <div class="field" v-if="selectedAmount === 'custom'">
            <label>自訂金額：新台幣</label>
            <input type="number" v-model.number="customAmount" min="500" placeholder="輸入金額" />
          </div>
        </div>

        <button type="submit" class="ui basic green large button">
          <i class="dollar icon"></i>
          捐贈
        </button>
      </div>
    </form>

    <div class="ui divider" v-if="mode === 'donate-by-bank-transfer'"></div>
    <div class="ui segment" v-if="mode === 'donate-by-bank-transfer'">
      <h3>本會銀行帳戶：
        <br>
        台北富邦 士林分行（012）
        <br>
        帳號：30012-0000601
        <br>
        戶名：社團法人中華民國自主學習促進會
      </h3>
    </div>

    <div class="ui segment" v-if="mode === 'donate-by-qrcode'">
      <img id ="#donate-qrcode" src="../assets/autolearn_donate_QRCode.png" alt="線上捐款"/>
      <p>請掃描上方 QR Code</p>
    </div>

    <div class="ui segment" v-if="mode === 'donate-by-code'">
      <h3>以愛心碼「9806」捐助本會</h3>
      <p>本會是一個非營利組織，需要您的支持。</p>
      <p>愛心碼取為「9806」，是因為最初成立的契機，在於1998~2006年的「台北市自主學習（中學六年一貫）實驗計畫」，本會第一代會員多是計畫中的親師生及關注計畫的學者賢達，別具意義。</p>
      <p>邀請並歡迎大家未來在開立電子發票的商家購物時，可主動向店員要求使用愛心碼，說出捐贈碼9806，或出示條碼即可。發票若中獎，將會自動捐入本會！</p>
      <img id="donate" src="../assets/9806.png" alt="愛心碼"/>
    </div>

    <div class="ui divider" v-if="mode !== 'donate-by-code'"></div>
    <div class="ui segment" v-if="mode !== 'donate-by-code'">
      <h3>完成捐款後，請將以下資訊寄至本會行政室：
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
  </div>
</template>

<script lang="ts">
import { getFirestore, doc, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { app } from '../firebase';
import axios from 'axios';

export default {
  data() {
    return {
      selectedAmount: '500',
      customAmount: 500,
      mode: 'donate-by-card',
      modes: ['donate-by-card', 'donate-by-qrcode', 'donate-by-bank-transfer', 'donate-by-code'],
      unsubscribe: (() => {}) as Unsubscribe | null,
    };
  },
  methods: {
    parse(mode: string) {
      if (mode === 'donate-by-card') {
        return '信用卡小額捐贈'
      } else if (mode === 'donate-by-bank-transfer') {
        return '銀行匯款捐贈'
      } else if (mode === 'donate-by-qrcode') {
        return 'QR Code掃碼捐贈'
      } else if (mode === 'donate-by-code') {
        return '愛心碼捐贈'
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
    listenToOrderStatus(orderId: string) {
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
