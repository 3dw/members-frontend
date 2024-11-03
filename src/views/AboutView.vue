<template lang="pug">
main.ui.container
  h1.ui.header 理監事名單
  .ui.four.doubling.stackable.cards(v-if="supervisors.length")
    .card(v-for="supervisor in supervisors" :key="supervisor.email")
      .content.flex.flex-column
        .flex.flex-row.flex-align-center
          .flex-center {{ supervisor.role }}：{{ supervisor.fullname }}
          .filler
          button.ui.small.basic.blue.button(@click="toggleEmail(supervisor.email)")
            span(v-if="!visibleEmails.includes(supervisor.email)") 顯示
            span(v-else) 隱藏
            | Email
        .filler
        div
          span(v-if="visibleEmails.includes(supervisor.email)") {{ supervisor.email }}
          span(v-else) &nbsp;
  p(v-else) 載入中...

  h1.ui.header 自主學習促進會專案一覽：

  table.ui.celled.stackable.table
    thead
      tr
        th 全名
        th 主要類別
        th 維護者
        th 電子郵件信箱
        th.description 描述
    tbody
      tr(v-for="item in projects" :key="item.id")
        td
          a(:href="item.website" target="_blank" rel="noopener noreferrer") {{ item.full_name }}
        td {{ item.main_category }}
        td {{ item.maintainer }}
        td {{ item.maintainer_email }}
        td.description {{ item.description }}
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { database, projectsRef, supervisorsRef } from '@/firebase'
import { onValue } from 'firebase/database'

export default {
  setup() {
    const data = ref([])

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
      data,
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
}
</script>

<style scoped>
table {
  width: 100%;
}

th, td {
  padding: 0.5rem;
  text-align: left;
  min-width: 120px;
}

.description {
  white-space: pre-wrap;
  min-width: 200px;
}
</style>
