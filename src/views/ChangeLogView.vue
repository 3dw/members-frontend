<template lang="pug">
main.ui.container
  h1.ui.header 變更紀錄
  table.ui.stackable.celled.table(v-if="data.length > 0")
    thead
      tr
        th 日期
        th 更新內容
        th 更新者
    tbody
      tr(v-for="item in reversedData" :key="item.id")
        td {{ parseDate(item.date) }}
        td {{ item.text }}
        td
          img(v-if ="users && users[item.uid] && users[item.uid].photoURL",
          :src="users && users[item.uid] && users[item.uid].photoURL" style="width: 24px; height: 24px; border-radius: 50%;")
          br
          | {{ users && users[item.uid] && users[item.uid].name || '匿名' }}

  .ui.segment
    router-link.ui.basic.green.button(to="/faq")
      i.arrow.left.icon
      | 返回自學FAQ協作
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { changelogsRef } from '@/firebase'
import { onValue } from 'firebase/database'

export default {
  props: {
    users: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const data = ref([])

    onMounted(() => {
      onValue(changelogsRef, (snapshot) => {
        const rawData = snapshot.val();
        console.log(rawData);
        data.value = Object.values(rawData);
      }, (error) => {
        console.error('讀取變更紀錄資料時出錯', error);
      });

    });

    return {
      data,
    };
  },
  computed: {
    reversedData() {
      return this.data.slice().reverse();
    },
  },
  methods: {
    parseDate(date: string) {
      return new Date(date).toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });
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
