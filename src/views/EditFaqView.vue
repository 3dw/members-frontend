<template lang="pug">
div.faq-container
  .ui.dimmer(v-if="updating")
    .ui.loader
  .ui.container
    .ui.form(v-if="uid")
      .field
        label 類別：
          | {{ faqItem.category }}
      .field
        label 問題：
        | {{ faqItem.question }}
      .field
        label 回答
        textarea(v-model="faqItem.answer" rows="20")
      button.ui.button.primary(type="button" @click="updateFaq") 儲存
      button.ui.button(@click="goBack") 返回
    button.ui.button.orange(v-else type="button" @click="toggleLogin")
      i.user.icon
      | 請先登人以編輯問答
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  name: 'EditFaqView',
  props: {
    uid: {
      type: String,
      required: true
    }
  },
  setup() {
    const route = useRoute()
    const faqItem = ref({
      id: '',
      category: '',
      question: '',
      answer: ''
    })
    const updating = ref(false)
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
      updating
    }
  },
  methods: {
    toggleLogin() {
      this.$emit('toggleLogin')
    },
    parseAnswer(answer: string) {
      console.log(answer)
      return answer.replace(/\\n/g, '\n')
    },
    async updateFaq() {
      this.updating = true
      try {
        await axios.post(
          `https://members-backend.alearn13994229.workers.dev/update/faq/${this.faqItem.id}`,
          { content: this.parseAnswer(this.faqItem.answer) }
        ).then(() => {
            alert('更新成功')
            this.goBack()
          })
          .catch((error) => {
            console.error('更新FAQ失敗:', error)
            alert('更新失敗')
          })
      } catch (error) {
        console.error('更新FAQ失敗:', error)
        alert('更新失敗')
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
  position: relative;
  min-height: 300px;
}

.ui.dimmer {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}

.answer-cell {
  white-space: pre-line;
}

@media (max-width: 768px) {
  .faq-container {
    padding: 1rem 0;
  }

  .ui.container {
    width: 100%;
  }
}
</style>
