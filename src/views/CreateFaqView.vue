<template lang="pug">
div.faq-container
  .ui.container.relative
    .ui.active.inverted.dimmer(v-if="uploading")
      .ui.loader
    .ui.form(v-if="uid")
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
    button.ui.button.orange(v-else type="button" @click="toggleLogin")
      i.user.icon
      | 請先登人以創建問答
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

interface FaqItem {
  id: string | number
  category: string
  question: string
  answer: string
  links?: string
}

export default defineComponent({
  name: 'CreateFaqView',
  props: {
    uid: {
      type: String,
      required: true
    }
  },
  setup() {
    const route = useRoute()
    const faqItem = ref<FaqItem>({
      id: '',
      category: '',
      question: '',
      answer: ''
    })

    const uploading = ref(false);

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
      faqItem,
      uploading
    }
  },
  methods: {
    toggleLogin() {
      this.$emit('toggleLogin')
    },
    async createFaq() {
      if (this.faqItem.category === '') {
        alert('請選擇類別')
        return
      }
      if (this.faqItem.question === '') {
        alert('請輸入問題')
        return
      }
      if (this.faqItem.answer === '') {
        alert('請輸入回答')
        return
      }
      try {
        this.uploading = true
        await axios.post(
          `https://members-backend.alearn13994229.workers.dev/create/faq`,
          {
            category: this.faqItem.category,
            question: this.faqItem.question,
            answer: this.faqItem.answer,
            links: '[]'
          }
        ).then(() => {
          this.uploading = false
          alert('上傳成功')
          this.goBack()
        }).catch((error) => {
          this.uploading = false
          console.error('新增FAQ失敗:', error)
          alert('上傳失敗')
        })
      } catch (error) {
        this.uploading = false
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

.relative {
  position: relative !important;
  min-height: 100px;
}

.ui.dimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
</style>
