<template lang="pug">
div.faq-container
  form.ui.form#faq-form
    h2.ui.header 常見問題
      span(v-if="uid", style="font-weight:700;") 協作
      .filler
      .ui.buttons(v-if="uid")
        router-link.ui.button.basic.orange(to="/create_faq")
          i.plus.icon
          | 新增問答
        router-link.ui.button.basic.teal(to="/changelog")
          i.history.icon
          | 變更紀錄
    .two.stackable.fields
      .field(style="max-width:150px;")
        label 類別篩選
      select.ui.dropdown(v-model="selectedCategory")
        option(v-for="category in categories" :value="category") {{ category }}
    .field
      label 關鍵字篩選
      .ui.icon.input
        input(
          type="text"
          v-model="searchKeyword"
          placeholder="搜尋常見問題..."
        )
        i.search.icon
  table.ui.celled.table
    thead.fat-only
      tr
        th.collapsing 類別
        th 問題
        th 回答
        th 相關連結
        th 操作
    tbody
      tr(v-for="item in filteredAndSortedFaqItems" :key="item.id")
        td.collapsing.clickable(v-html="highlightText(item.category)" @click="showCategory(item.category)")
        td
          span.thin-only Q:
          span(v-html="highlightText(item.question)")
        td.answer-cell
          span.thin-only A:
          span(v-html="highlightText(parseAnswer(item.answer))")
        td.answer-cell
          .ui.bulleted.divided.list(v-if="item.links && parseLinks(item.links).length > 0")
            .item(v-for="link in parseLinks(item.links)" :key="link.h")
              a(:href="link.h" target="_blank" rel="noopener noreferrer") {{ link.t }}
              br
              .ui.buttons(style="margin: 0.8rem 0;")
                a.ui.basic.teal.button(v-if="link.h" :href="link.h" target="_blank" rel="noopener noreferrer")
                  i.external.link.icon
                  span(v-if="uid") 測試連結
                  span(v-else) 前往網站
                button.ui.button.mini.basic.red.icon(v-if="uid" type="button" @click="deleteLink(item.id, link.h)")
                  i.trash.icon
                  | 刪除
          .item.ui.divider
          .item
            button.ui.button.mini.circular.orange.icon(v-if="uid && showAddLinkId !== item.id" type="button" @click="showAddLinkId = item.id")
              i.plus.icon
              | 新增連結
          .item(v-if="showAddLinkId === item.id")
            .ui.form
              input(type="text" v-model="newLinkText" placeholder="連結名稱")
              input(type="text" v-model="newLinkHref" placeholder="連結網址")
              br
              .ui.buttons
                a.ui.basic.primary.button(v-if="newLinkHref" :href="newLinkHref" target="_blank" rel="noopener noreferrer")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + newLinkHref" alt="測試連結")
                  | 測試連結
                button.ui.button.primary(type="button" @click.prevent="addLink(item.id)")
                  i.plus.icon
                  | 新增連結
        td
          .ui.vertical.buttons
            // button.ui.button.orange(v-if="!uid" type="button" @click="toggleLogin")
            //   i.user.icon
            //   | 登入/註冊
            button.ui.button.primary(v-if="uid" type="button" @click="editFaq(item.id)")
              i.pencil.icon
              | 編輯
            a.ui.basic.button.secondary(:href="`https://map.alearn.org.tw/ans/${item.id}`")
              | 前往
              i.chevron.right.icon
          // button.ui.button.red.disabled(type="button" @click="deleteFaq(item.id)")
          //   i.trash.icon
          //   | 刪除


</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

// 添加介面定義
interface FaqItem {
  id: string
  category: string
  question: string
  answer: string
  links?: string
}

export default defineComponent({
  name: 'FaqView',
  props: {
    uid: {
      type: String,
      required: true
    }
  },
  setup() {
    // 修改 ref 的型別定義
    const faqItems = ref<FaqItem[]>([])
    const categories = ref(['全部', '起步', '計畫', '支持', '資源', '其他'])
    const searchKeyword = ref('')
    const selectedCategory = ref('全部')
    const newLinkText = ref('')
    const newLinkHref = ref('')
    const showAddLinkId = ref('')
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
      categories,
      searchKeyword,
      selectedCategory,
      newLinkText,
      newLinkHref,
      showAddLinkId
    }
  },
  computed: {
    sortedFaqItems(): FaqItem[] {
      return this.faqItems.slice().sort((a, b) =>
        this.categories.indexOf(a.category) - this.categories.indexOf(b.category)
      )
    },
    filteredAndSortedFaqItems(): FaqItem[] {
      const keyword = this.searchKeyword.toLowerCase().trim()
      let filtered = this.faqItems

      // 先依類別過濾
      if (this.selectedCategory !== '全部') {
        filtered = filtered.filter(item => item.category === this.selectedCategory)
      }

      // 再依關鍵字過濾
      if (keyword) {
        filtered = filtered.filter(item =>
          item.category.toLowerCase().includes(keyword) ||
          item.question.toLowerCase().includes(keyword) ||
          item.answer.toLowerCase().includes(keyword)
        )
      }

      // 最後依類別排序
      return filtered.sort((a, b) =>
        this.categories.indexOf(a.category) - this.categories.indexOf(b.category)
      )
    }
  },
  methods: {
    toggleLogin() {
      this.$emit('toggleLogin')
    },
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
      return JSON.parse(links).filter(link =>  link != null && link.t !== '')
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
    },
    addLink(id: string) {
      console.log(id)
      const newLink = {
        t: this.newLinkText,
        h: this.newLinkHref
      }
      console.log(newLink)
      axios.post(`https://members-backend.alearn13994229.workers.dev/insert/faq/${id}/link`, newLink).then(() => {
        window.alert('新增成功')
        this.newLinkText = ''
        this.newLinkHref = ''
        this.showAddLinkId = ''
        console.log('新增成功')
        this.fetchFaq()
      }).catch((error) => {
        window.alert('新增失敗')
        console.error('新增失敗:', error)
      })
    },
    escapeHtml(text: string): string {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    },
    highlightText(text: string): string {
      if (!this.searchKeyword.trim()) return this.escapeHtml(text)

      const escapedText = this.escapeHtml(text)
      const keyword = this.escapeHtml(this.searchKeyword.toLowerCase().trim())
      const regex = new RegExp(`(${keyword})`, 'gi')

      return escapedText.replace(regex, '<span class="highlight">$1</span>')
    },
    showCategory(category: string) {
      console.log(category)
      this.selectedCategory = category
      this.$nextTick(() => {
        this.searchKeyword = ''
      })
    }
  }
})
</script>

<style scoped>
.faq-container {
  padding: 2rem 0;
}

.answer-cell {
  min-width: 16rem;
  white-space: pre-line;
}

th, td {
  min-width: 9rem;
  font-size: 1.2rem;
}

.collapsing {
  min-width: 0;
}

.clickable {
  transition: background-color 0.3s ease;
}

.clickable:hover {
  background-color: #f0f0f0;
}

#faq-form {
  padding: 0 1rem;
}


</style>
