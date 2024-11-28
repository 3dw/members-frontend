<template lang="pug">
main.ui.container
  h1.ui.header 變更紀錄
  table.ui.stackable.table(v-if="data.length > 0")
    thead
      tr
        th 日期
        th 更新內容
        th 更新者
    tbody
      tr(v-for="item in data" :key="item.id")
        td {{ item.date }}
        td {{ item.text }}
        td {{ users && users[item.uid] && users[item.uid].name || item.uid }}
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
  methods: {
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
