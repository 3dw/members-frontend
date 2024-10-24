<template lang="pug">
  main.ui.container
    h1.ui.header 自主學習促進會

    //- 四個重疊卡片
    .ui.four.doubling.cards
      //- 理監事名單
      .card
        .content
          .header 理監事名單
          .description
            ul
              li 理事長：朱佳仁
              li 常務理事：某某某
              li 常務理事：某某某
              li 監事：某某某
              //- 更多理監事

      //- 本會專案一覽
      .card
        .content
          .header 本會專案一覽
          .description
            ul(v-if="projects.length")
              li(v-for="project in projects" :key="project.id")
                a(:href="project.website" target="_blank", rel="noopener noreferrer") {{ project.full_name }}:
                br
                | {{ project.description }}
            p(v-else) 載入中...

      //- 公開行事曆
      .card
        .content
          .header 公開行事曆
          .description
            p 可以嵌入 Google 日曆或者提供活動日期。

      //- 本會歷史
      .card
        .content
          .header 本會歷史
          .description
            p 描述本會成立的背景與發展歷程。

      //- 網址連結
      .card
        .content
          .header 網址連結
          .description
            ul
              li
                a(href="https://www.alearn.org" target="_blank" rel="noopener noreferrer") 官方網站
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
