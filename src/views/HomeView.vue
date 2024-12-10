<template lang="pug">
  main.ui.container
    //- h1.ui.header 自主學習促進會

    .ui.two.column.stackable.segment.padded.grid
      .sixteen.wide.center.aligned.column#main-column
        h1.ui.header#main-title 自主學習促進會
      .column.right-bordered
        h2.ui.header 本會網站改版中，
          | 請點擊
          br.thin-only
          a.text-underline(href="https://sites.google.com/view/autoalearn/%E9%A6%96%E9%A0%81") 這裡前往舊版官方網站
        img#donate(src="../assets/9806.png", alt="愛心碼")

        p 自主學習，就是學習自主。

        p 與他律到自主的過程，一般會經過解放散漫、自我中心、眼高手低和自主成熟這四個階段。

        p 在解放散漫期需要安全感和健康的生活節奏、自我中心期需要明確界限、眼高手低期需要踏實的累積與創作。

        p 這些需要成人有意識的提點和支持。

        p 因此，本會致力於促進自主學習與教育的土壤。

      .column
        img#main(src="../assets/main.png", alt="logo")
        h2.left.aligned.ui.header 自學AI
          .left.aligned.ui.sub.header 以自學問答集為基礎，提供更即時的回答
        .ui.fluid.input
          input#input-message(
            type="text"
            placeholder="問AI關於自學的任何問題..."
            v-model="message"
            @keyup.enter="sendMessage"
        )
          button.ui.primary.button#send-button(@click="sendMessage") 送出
        .result
          p(v-if="result === '' && message !== '' && isLoading") 載入中，請稍候...
          p(v-else-if="result !== ''") {{ parseResult(result) }}
            br
            br
            | 您覺得這個回答怎麼樣呢？
            button.ui.basic.green.button(@click="sendFeedback('good')")
              i.thumbs.up.icon
              | 很棒
            button.ui.basic.red.button(@click="sendFeedback('bad')")
              i.thumbs.down.icon
              | 不佳

    .ui.divider

    .ui.two.stackable.cards

      //- 本會專案一覽
      // .card
      //  .content
      //    .header 本會專案一覽
          .description(style="max-height: 300px; overflow-y: auto;")
            ul(v-if="projects.length")
              li(v-for="project in projects" :key="project.id")
                a(:href="project.website" target="_blank", rel="noopener noreferrer") {{ project.full_name }}:
                br
                | {{ project.description }}
            p(v-else) 載入中...

      //- 公開行事曆
      // .card
      //   .content
      //     .header 公開行事曆
      //     .description
      //       p 可以嵌入 Google 日曆或者提供活動日期。

      //- 本會歷史
      .card
        .content
          .header 本會歷史
          .description
            p 自主學習促進會的歷史可追溯至1994年種籽親子實驗小學的創立，這是台灣民主學校的先驅。
            p 1998年，台北市自主學習實驗計畫開始，為期六年，證明了自主學習理念在中學階段的可行性。
            p 2000年，面臨停辦危機時，學生發起了台灣首次中學生自發的學運，成功爭取續辦至第三屆學生畢業。
            p 2001年3月，為延續自主學習的經驗與知識，本會正式成立。
            p 2006-2008年間，本會通過"自學中心"提供課程和營隊，幫助體制內學生體驗自主學習。
            p 2008-2010年，"自主培力學園"為拒學、懼學和想自學的青少年提供全日制團體學習。
            p 2009年起，獨立教育工作者社群成立，致力於開設學習團體、培訓教師、支持家長，並開發自學資源。
            p 本會持續致力於推動自主學習理念，為台灣教育改革提供新方向和活力。

      //- 網址連結
      .card
        .content
          .header 本會專案一覽
          .description
            ul
              li
                a(href="https://sites.google.com/view/autoalearn/%E9%A6%96%E9%A0%81" target="_blank" rel="noopener noreferrer") 舊版官方網站
              li
                a(href="https://www.facebook.com/alearnTW" target="_blank" rel="noopener noreferrer") 臉書「自主學習促進會」專頁
              li
                a(href="https://www.facebook.com/groups/homeschooltw" target="_blank" rel="noopener noreferrer") 臉書「在家自學社群」社團
              li
                a(href="https://lin.ee/CashU46" target="_blank" rel="noopener noreferrer") 自學AI聊天機器人@Line
            ul(v-if="projects.length")
              li(v-for="project in projects" :key="project.id")
                a(:href="project.website" target="_blank", rel="noopener noreferrer") {{ project.full_name }}
                // br
                // | {{ project.description }}
            p(v-else) 載入中...
              //- 更多網址
      .card
        .content
          .header 以愛心碼捐助本會
          .description
            p 本會是一個非營利組織，需要您的支持。
            p 愛心碼取為「9806」，是因為最初成立的契機，在於1998~2006年的「台北市自主學習（中學六年一貫）實驗計畫」，本會第一代會員多是計畫中的親師生及關注計畫的學者賢達，別具意義。
            p 邀請並歡迎大家未來在開立電子發票的商家購物時，可主動向店員要求使用愛心碼，說出捐贈碼9806，或出示條碼即可。發票若中獎，將會自動捐入本會！
            img#donate(src="../assets/9806.png", alt="愛心碼")
      .card
        .content
          .header 線上捐款
          .description
            img#donate-qrcode(src="../assets/autolearn_donate_QRCode.png", alt="線上捐款")

            p 捐款流程：
            ol
              li 請掃描上方 QR Code 或使用以下帳戶進行捐款：
                br
                | 台北富邦 士林分行（012）
                br
                | 帳號：30012-0000601
                br
                | 戶名：社團法人中華民國自主學習促進會
              li 完成捐款後，請將以下資訊寄至本會行政室：
                br
                a(href="mailto:alearn13994229@gmail.com") Email：alearn13994229@gmail.com
                ul
                  li 捐款人姓名
                  li 聯絡電話
                  li 通訊地址
                  li 捐款金額
                  li 匯款帳號後五碼
              li 本會將開立捐款收據並寄回給您，可供節稅使用。

      //- 友站連結
      // .card
      //   .content
      //     .header 友站連結
          .description
            ul
              li
                a(href="https://partner-website.com") 合作網站1
              li
                a(href="https://partner-website.com") 合作網站2
              //- 更多友站連結

      //- 會員專區
      // .card
      //   .content
      //     .header 會員專區
      //     .description
      //       button.ui.button(@click="toggleLogin") 會員登入
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { database, projectsRef, supervisorsRef } from '@/firebase';
import { onValue } from 'firebase/database';
import axios from 'axios';

export default defineComponent({
  name: 'HomeView',
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isLoading = ref(false);
    const projects = ref([]);
    const supervisors = ref([]);
    const arr: any[] = new Array();
    const visibleEmails = ref(arr);
    const message = ref('');
    const result = ref('');
    onMounted(() => {
      onValue(projectsRef, (snapshot) => {
        const projectsData = snapshot.val();
        projects.value = Object.values(projectsData);
      }, (error) => {
        console.error('讀取專案資料時出錯', error);
      });

      onValue(supervisorsRef, (snapshot) => {
        const supervisorsData = snapshot.val();
        supervisors.value = Object.values(supervisorsData);
      }, (error) => {
        console.error('讀取理監事資料時出錯', error);
      });
    });

    return {
      isLoading,
      projects,
      supervisors,
      visibleEmails,
      message,
      result,
    };
  },
  methods: {
    toggleLogin() {
      this.$emit('toggleLogin');
    },
    toggleEmail(email: string) {
      this.visibleEmails.includes(email) ? this.visibleEmails.splice(this.visibleEmails.indexOf(email), 1) : this.visibleEmails.push(email);
    },
    sendMessage() {
      this.isLoading = true;
      console.log(this.message);
      if (!this.message.endsWith('？')) {
        this.message += '？';
      }
      axios.get('https://members-backend.alearn13994229.workers.dev/ai/' + this.message, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        console.log(response);
        this.result = response.data;
        this.isLoading = false;
      });
    },
    parseResult(result: string) {
      if (result === '。') {
        return '請說得詳細一點';
      }
      return result;
    },
    sendFeedback(feedback: string) {
      console.log(feedback);
      if (feedback === 'good') {
        console.log('good');
        window.alert('感謝您的回饋！');
      } else if (feedback === 'bad') {
        console.log('bad');
        if (window.confirm('請告訴我們哪裡做得不好，我們會努力改進！')) {
          this.$router.push('/feedback');
        } else {
          window.alert('感謝您的回饋！');
        }
      }
    }
  },
});
</script>

<style scoped>
#main-column {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
  background-image: url('../assets/group.jpg');

  border-radius: 15px;
  color: #fff;
  text-align: center;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  #main-column {
    min-height: 200px;
    padding: 10px;
  }
}

#main-title {
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  animation: fadeInDown 1.2s ease-out;
}

img#main {
  max-width: 320px;
  display: block;
  margin: 0 auto;
}

@media (max-width: 768px) {
  #main-title {
    font-size: 2.2rem;
  }
}

.column.right-bordered {
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 20px;
}

a.text-underline {
  color: #66BB6A;
  font-weight: 600;
  text-decoration: underline;
  transition: all 0.3s ease;
}

a.text-underline:hover {
  color: #388E3C;
  text-decoration: none;
}

.ui.input {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .ui.input {
    flex-direction: column;
  }
}

.ui.input input#input-message {
  width: calc(100% - 40px) !important;
  border: 1px solid #4CAF50;
  border-radius: 10px 0 0 10px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 1rem;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .ui.input input#input-message {
    width: 100% !important;
    border-radius: 10px 10px 0 0;
  }
}

.ui.input input#input-message:focus {
  border-color: #81C784;
  outline: none;
  box-shadow: 0 0 8px rgba(129, 199, 132, 0.5);
}

button.ui.primary.button#send-button {
  background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 0 10px 10px 0;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  button.ui.primary.button#send-button {
    border-radius: 0 0 10px 10px;
    width: 100%;
  }
}

button.ui.primary.button#send-button:hover {
  background: linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%);
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.card {
  background: #fff;
  border-radius: 15px !important;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card .header {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #66BB6A;
  color: white;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  font-size: 1.25rem;
  border-radius: 15px 15px 0 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.card .description {
  padding: 15px;
  padding-top: 40px;
  color: #333;
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.result {
  margin-top: 20px;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
}

.ui.divider {
  margin: 30px 0;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>

