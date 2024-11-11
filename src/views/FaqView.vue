<template lang="pug">
div.faq-container
  .ui.container
    table.ui.celled.table
      thead
        tr
          th 類別
          th 問題
          th 回答
      tbody
        tr(v-for="item in faqItems" :key="item.id")
          td {{ item.category }}
          td {{ item.question }}
          td.answer-cell {{ parseAnswer(item.answer) }}
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'FaqView',
  setup() {
    const faqItems = ref([])

    onMounted(async () => {
      try {
        const response = await axios.get('https://members-backend.alearn13994229.workers.dev/api/Faq')
        faqItems.value = response.data
      } catch (error) {
        console.error('獲取FAQ資料失敗:', error)
      }
    })

    return {
      faqItems
    }
  },
  methods: {
    parseAnswer(answer: string) {
      console.log(answer)
      return answer.replace(/\\n/g, '\n')
    }
  }
})
</script>

<style scoped>
.faq-container {
  padding: 2rem 0;
}

.answer-cell {
  white-space: pre-line;
}
</style>
