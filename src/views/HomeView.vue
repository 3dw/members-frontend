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
        .ui.input
          input(
            type="text"
            placeholder="問AI關於自學的任何問題..."
            v-model="message"
            @keyup.enter="sendMessage"
        )
        button.ui.primary.button(@click="sendMessage") 送出
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
            p 請掃描
            img#donate-qrcode(src="../assets/autolearn_donate_QRCode.png", alt="線上捐款")
            p 或使用以下捐款帳戶：
            br
            | 台北富邦 士林分行（012）
            br
            | 帳號：30012-0000601
            br
            | 戶名：社團法人中華民國自主學習促進會

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
  background-color: #f0f0f0;
  background-image: url('../assets/group.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

@media (max-width: 768px) {
  #main-column {
    min-height: 200px;
  }
}

#main-title {
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  #main-title {
    font-size: 2rem;
  }
}

li {
  margin-bottom: 10px;
}

.result {
  margin-top: 10px;
  white-space: pre-wrap;
}

.ui.input {
  margin-bottom: 10px;
  min-width: 300px;
}

img#main {
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 10px auto;
  border-radius: 10px;
}

img#donate {
  display: block;
  margin: 10px auto;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
}

img#donate-qrcode {
  display: block;
  margin: 10px auto;
  width: 100%;
  max-width: 170px !important;
  border-radius: 10px;
}

</style>

