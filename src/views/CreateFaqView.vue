<template lang="pug">
div.faq-container
  .ui.container
    .ui.form
      .field
        label 類別：
        select(v-model="faqItem.category")
          option(value="") 請選擇類別
          option(value="起步") 起步 
          option(value="計畫") 計畫
          option(value="支持") 支持
          option(value="資源") 資源
          option(value="其他") 其他
      .field
        label 問題：
        textarea(v-model="faqItem.question" rows="3")
      .field
        label 回答
        textarea(v-model="faqItem.answer" rows="20")
      button.ui.button.primary(type="button" @click="createFaq") 上傳
      button.ui.button(@click="goBack") 返回
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  name: 'EditFaqView',
  setup() {
    const route = useRoute()
    const faqItem = ref({
      id: '',
      category: '',
      question: '',
      answer: ''
    })

    onMounted(async () => {
      try {
        const id = route.params.id
        const response = await axios.get(`https://members-backend.alearn13994229.workers.dev/api/Faq`)
        const items = response.data
        console.log(id)
        console.log(items)
        const item = items.find((item: any) => item.id === parseInt(id as string))
        if (item) {
          faqItem.value = item
        }
      } catch (error) {
        console.error('獲取FAQ資料失敗:', error)
      }
    })

    return {
      faqItem
    }
  },
  methods: {
    parseAnswer(answer: string) {
      console.log(answer)
      return answer.replace(/\\n/g, '\n')
    },
    async Faq() {
      if (this.faqItem.category === '') {
        alert('請選擇類別')
        return
      }
      try {
        await axios.post(
          `https://members-backend.alearn13994229.workers.dev/create/faq`,
          {
            category: this.faqItem.category,
            question: this.faqItem.question,
            answer: this.faqItem.answer,
            links: []
          }
        )
        alert('上傳成功')
        this.goBack()
      } catch (error) {
        console.error('新增FAQ失敗:', error)
        alert('上傳失敗')
      }
    },
    goBack() {
      this.$router.push('/faq')
    }
  }
})
</script>

<style scoped>
textarea {
  min-height: 200px;
}

.faq-container {
  padding: 2rem 0;
}

.answer-cell {
  white-space: pre-line;
}
</style>
