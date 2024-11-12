<template lang="pug">
div.faq-container
  .ui.container
    table.ui.celled.table
      thead
        tr
          th 類別
          th 問題
          th 回答
          th 相關連結
          th 操作
      tbody
        tr(v-for="item in sortedFaqItems" :key="item.id")
          td {{ item.category }}
          td {{ item.question }}
          td.answer-cell {{ parseAnswer(item.answer) }}
          td.answer-cell
            .ui.bulleted.list(v-if="item.links && parseLinks(item.links).length > 0")
              .item(v-for="link in parseLinks(item.links)" :key="link.h")
                a(:href="link.h" target="_blank" rel="noopener noreferrer") {{ link.t }}
                br
                button.ui.button.mini.circular.red.icon(type="button" @click="deleteLink(item.id, link.h)")
                  i.trash.icon
                  | 刪除
          td
            button.ui.button.primary(type="button" @click="editFaq(item.id)")
              i.pencil.icon
              | 編輯
            // button.ui.button.red.disabled(type="button" @click="deleteFaq(item.id)")
            //   i.trash.icon
            //   | 刪除
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'FaqView',
  setup() {
    const faqItems = ref([])
    const categories = ref(['起步', '計畫', '支持', '資源', '其他'])

    onMounted(async () => {
      try {
        const response = await axios.get('https://members-backend.alearn13994229.workers.dev/api/Faq')
        faqItems.value = response.data
      } catch (error) {
        console.error('獲取FAQ資料失敗:', error)
      }
    })

    return {
      faqItems,
      categories
    }
  },
  computed: {
    sortedFaqItems() {
      return this.faqItems.slice().sort((a, b) => this.categories.indexOf(a.category) - this.categories.indexOf(b.category))
    }
  },
  methods: {
    fetchFaq() {
      this.faqItems = []
      axios.get('https://members-backend.alearn13994229.workers.dev/api/Faq').then((response) => {
        this.faqItems = response.data
      }).catch((error) => {
        console.error('獲取FAQ資料失敗:', error)
      })
    },
    parseLinks(links: string) {
      console.log(links)
      return JSON.parse(links)
    },
    parseAnswer(answer: string) {
      console.log(answer)
      return answer.replace(/\\n/g, '\n')
    },
    editFaq(id: string) {
      console.log(id)
      this.$router.push(`/edit_faq/${id}`)
    },
    deleteFaq(id: string) {
      console.log(id)
    },
    deleteLink(id: string, link: string) {
      console.log(id, link)
      if (confirm('確定要刪除此連結嗎？')) {
        console.log('刪除')
        axios.delete(`https://members-backend.alearn13994229.workers.dev/delete/faq/${id}/link/${link}`).then(() => {
          window.alert('刪除成功')
          console.log('刪除成功')
          this.fetchFaq()
        }).catch((error) => {
          window.alert('刪除失敗')
          console.error('刪除失敗:', error)
        })
      }
    }
  }
})
</script>

<style scoped>
.faq-container {
  padding: 2rem 0;
}

.answer-cell {
  min-width: 20rem;
  white-space: pre-line;
}

th, td {
  min-width: 9rem;
  font-size: 1.2rem;
}
</style>
