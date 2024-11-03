<template lang="pug">
  main.ui.container
    h1.ui.header 自主學習促進會

    .ui.four.doubling.stackable.cards

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
          .description(style="max-height: 300px; overflow-y: auto;")
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
          .header 網址連結
          .description
            ul
              li
                a(href="https://www.alearn.org" target="_blank" rel="noopener noreferrer") 官方網站
              li
                a(href="https://www.facebook.com/alearnTW" target="_blank" rel="noopener noreferrer") 臉書「自主學習促進會」專頁
              li
                a(href="https://www.facebook.com/groups/homeschooltw" target="_blank" rel="noopener noreferrer") 臉書「在家自學社群」社團
            ul(v-if="projects.length")
              li(v-for="project in projects" :key="project.id")
                a(:href="project.website" target="_blank", rel="noopener noreferrer") {{ project.full_name }}
                // br
                // | {{ project.description }}
            p(v-else) 載入中...
              //- 更多網址

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

export default defineComponent({
  name: 'HomeView',
  props: {
    isLogin: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const projects = ref([]);
    const supervisors = ref([]);
    const arr: any[] = new Array();
    const visibleEmails = ref(arr);
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
      projects,
      supervisors,
      visibleEmails,
    };
  },
  methods: {
    toggleLogin() {
      this.$emit('toggleLogin');
    },
    toggleEmail(email: string) {
      this.visibleEmails.includes(email) ? this.visibleEmails.splice(this.visibleEmails.indexOf(email), 1) : this.visibleEmails.push(email);
    },
  },
});
</script>

<style scoped>
li {
  margin-bottom: 10px;
}
</style>

