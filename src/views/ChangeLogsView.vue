<template lang="pug">
main.ui.container)
  h1.ui.header 變更紀錄
  .ui.stackable.cards(v-if="data.length > 0")
    .card(v-for="item in data" :key="item.id")
      .content
        .header {{ item.title }}
        .meta {{ item.date }}
        .description {{ item.description }}
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { changelogsRef } from '@/firebase'
import { onValue } from 'firebase/database'

export default {
  setup() {
    const data = ref([])

    onMounted(() => {
      onValue(changelogsRef, (snapshot) => {
        const data = snapshot.val();
        data.value = Object.values(data);
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
