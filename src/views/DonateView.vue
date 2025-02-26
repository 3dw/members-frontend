<template>
  <div class="ui segment container">
    <div v-if="showDonationStatus" class="ui segment">
      <div class="ui segment" v-if="status === 'success'">
        <h2 class="main-title">捐款完成，謝謝您的愛心❤️</h2>
      </div>

      <div class="ui segment" v-if="status === 'failed'">
        <h2 class="main-title">捐款失敗❤️</h2>
        <p>很抱歉，您的捐款處理失敗。請嘗試其他捐款方式或稍後再試。</p>
      </div>

      <div class="ui segment" v-if="status === 'simulated'">
        <h2 class="main-title">模擬捐款完成❤️</h2>
        <p>這是一筆測試性質的捐款，並未實際進行交易。</p>
      </div>

      <div class="ui segment" v-if="status === 'pending'">
        <h2 class="main-title">處理中❤️</h2>
        <p>您的捐款正在處理中，請稍候<span class="ellipsis">...</span></p>
      </div>
    </div>

    <div v-show="!showDonationStatus">
      <h2 class="ui header">
        <span><i class="dollar icon"></i></span>
        <span v-if="mode === 'donate-by-card'">信用卡捐贈</span>
        <span v-else-if="mode === 'donate-by-qrcode'">QR Code掃碼捐贈</span>
        <span v-else-if="mode === 'donate-by-bank-transfer'">銀行匯款捐贈</span>
        <span v-else-if="mode === 'donate-by-code'">愛心碼捐贈</span>

        <span>&nbsp;&nbsp;&nbsp;</span>
        <div class="ui vertical buttons">
          <button class="ui basic green large button" :class="{ 'active': mode === m }" v-for="m in modes" :key="m" @click="mode = m">{{ parse(m) }}</button>
        </div>
        <img src="../assets/donate_heart.webp" alt="捐贈愛心" class="donate-heart">
      </h2>

      <form v-if="mode === 'donate-by-card'" method="post" @submit="handleSubmit" action="https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5" target="_blank">
        <div class="ui form">
          <div class="ui two stackable fields">
            <div class="compact field">
              <label>選擇捐贈金額</label>
              <select v-model="selectedAmount" @change="clearCustomAmount">
                <option value="150">新台幣150元</option>
                <option value="500">新台幣500元</option>
                <option value="1000">新台幣1000元</option>
                <option value="2000">新台幣2000元</option>
                <option value="custom">自訂金額</option>
              </select>
            </div>
            <div class="field" v-if="selectedAmount === 'custom'">
              <label>自訂金額：新台幣</label>
              <input type="number" v-model.number="customAmount" min="150" placeholder="輸入金額" />
            </div>
          </div>

          <!-- 綠界金流必要欄位 -->
          <input type="hidden" name="MerchantID" :value="merchantID">
          <input type="hidden" name="MerchantTradeNo" :value="merchantTradeNo">
          <input type="hidden" name="MerchantTradeDate" :value="merchantTradeDate">
          <input type="hidden" name="PaymentType" value="aio">
          <input type="hidden" name="TotalAmount" :value="donationAmount">
          <input type="hidden" name="TradeDesc" value="自主學習促進會捐款">
          <input type="hidden" name="ItemName" value="捐款">
          <input type="hidden" name="ReturnURL" :value="returnURL">
          <input type="hidden" name="ChoosePayment" value="Credit">
          <input type="hidden" name="EncryptType" value="1">
          <input type="hidden" name="CheckMacValue" :value="checkMacValue">
          <input type="hidden" name="ClientBackURL" :value="clientBackURL">
  <!--    <input type="hidden" name="OrderResultURL" :value="orderResultURL"> -->

          <button type="submit" class="ui basic green huge active button">
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
    </div>

    <div class="ui divider" v-if="mode !== 'donate-by-code'"></div>
    <div class="fluid segment" v-if="mode !== 'donate-by-code'">
      <h3>完成捐款後，請填寫下表，讓本會知道您的捐款資訊，並開立捐款收據給您，可供節稅：</h3>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeUlMQeS4ztSkZ48GhytbQapT7TG-iBNB31YTWHVVT6XceGhQ/viewform?embedded=true"
        width="100%" height="4300" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
    </div>
      <!-- <h3>完成捐款後，請將以下資訊寄至本會行政室：
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
    </div>-->
  </div>
</template>

<script lang="ts">

export default {
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
      pollingInterval: null as ReturnType<typeof setInterval> | null,
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
    parse(mode: string) {
      if (mode === 'donate-by-card') {
        return '信用卡捐贈'
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
        checkString += '&' + key + '=' + params[key as keyof typeof params];
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
    sha256(str: string) {
      const buffer = new TextEncoder().encode(str);
      return crypto.subtle.digest('SHA-256', buffer).then(hash => {
        return Array.from(new Uint8Array(hash))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
      });
    },
    async checkDonationStatus(orderId: string) {
      try {
        const response = await fetch(
          `https://members-backend.alearn13994229.workers.dev/check_donation_status/${orderId}`
        );
        const data = await response.json();
        // console.log(data);
        if (data && data.status) {
          this.status = data.status;
        } else {
          this.status = 'pending';
        }
      } catch (error) {
        console.error('檢查捐款狀態時發生錯誤:', error);
      }
    },

    handleSubmit() {
      // 當表單提交時開始輪詢
      this.showDonationStatus = true;
      this.startPolling(this.merchantTradeNo);
    },

    startPolling(orderId: string) {
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
};
</script>

<style scoped>

img.donate-heart {
  width: 200px;
  height: 200px;
  margin: .2em;
  float: right;
  border-radius: 50%;
}

.ui.container {
  background: #fff3e6 !important; /* 淺橙色 */
}

@media (min-width: 992px) {
  img.donate-heart {
    margin-right: 4em;
  }
}

@media (max-width: 768px) {
  img.donate-heart {
    width: 100px;
    height: 100px;
  }
}

.ui.basic.green.active.button {
  background-color: #4CAF50 !important;
  color: white !important;
}

li, p {
  font-size: 1.2rem;
  line-height: 1.8;
}

.main-title {
  font-size: 1.5rem;
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

.ellipsis::after {
  content: '';
  display: inline-block;
  width: 1em;
  text-align: left;
  animation: ellipsis 1.5s infinite;
}

@keyframes ellipsis {
  0% {
    content: '.';
  }
  33% {
    content: '..';
  }
  66% {
    content: '...';
  }
  100% {
    content: '';
  }
}
</style>
