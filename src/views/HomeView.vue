<template lang="pug">
  main.ui.container
    h1.ui.header 自主學習促進會

    //- 四個重疊卡片
    .ui.four.doubling.stackable.cards
      //- 理監事名單
      .card
        .content
          .header 理監事名單
          .description
            ul
              li 理事長：朱佳仁
              li 常務理事：戎培芬
              li 常務理事：陳怡光
              li 理事：吳啟新
              li 理事：蔡伊婷
              li 理事：李文郁
              li 理事：林睿育
              li 理事：曾維瑩
              li 理事：陳音秀
              li 候補理事：林津羽
              li 常務監事：楊鴻祥
              li 監事：陳郁玲
              li 監事：謝易霖
              //- 更多理監事

      //- 本會專案一覽
      .card
        .content
          .header 本會專案一覽
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
              //- 更多網址

      //- 友站連結
      .card
        .content
          .header 友站連結
          .description
            ul
              li
                a(href="https://partner-website.com") 合作網站1
              li
                a(href="https://partner-website.com") 合作網站2
              //- 更多友站連結

      //- 會員專區
      .card
        .content
          .header 會員專區
          .description
            button.ui.button(@click="toggleLogin") 會員登入
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { database, projectsRef } from '@/firebase';
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

    onMounted(() => {
      onValue(projectsRef, (snapshot) => {
        const projectsData = snapshot.val();
        projects.value = Object.values(projectsData);
      }, (error) => {
        console.error('讀取專案資料時出錯', error);
      });
    });

    return {
      projects,
    };
  },
  methods: {
    toggleLogin() {
      this.$emit('toggleLogin');
    },
  },
});
</script>

