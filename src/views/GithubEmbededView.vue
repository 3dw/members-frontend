<template lang="pug">
.github-container
  .ui.container
    .ui.segment
      .ui.header
        i.github.icon
        | 自主學習促進會 GitHub 開源組織
      .ui.description
        p 我們是一個致力於推廣自主學習的開源社群，歡迎加入我們的開源項目開發！
        p
          | 組織網址：
          a(href="https://github.com/3dw" target="_blank") https://github.com/3dw

    .ui.two.column.stackable.grid
      .column
        .ui.segment
          h3.ui.header
            i.star.icon
            | 精選專案
          .ui.items
            .item(v-for="repo in pinnedRepos" :key="repo.name")
              .content
                a.header(:href="repo.url" target="_blank") {{ repo.name }}
                .meta
                  span
                    i.star.icon
                    | {{ repo.stars }}
                  span.date
                    i.code.branch.icon
                    | {{ repo.forks }}
                .description {{ repo.description }}
                .extra
                  .ui.label(v-if="repo.language")
                    i.code.icon
                    | {{ repo.language }}

      .column
        .ui.segment
          h3.ui.header
            i.users.icon
            | 如何加入
          .ui.ordered.list
            .item
              | 請先註冊
              a(href="https://github.com" target="_blank") GitHub 帳號
            .item 發送 Email 到
              a(href="mailto:bestian@gmail.com") bestian@gmail.com
              |  申請加入，請附上：
              ul
                li GitHub 帳號名稱
                li 簡短的自我介紹
                li 想參與的專案或領域
            .item 等待管理員確認並發送邀請
            .item 接受邀請後即可開始參與專案

        .ui.segment
          h3.ui.header
            i.book.icon
            | 相關資源
          .ui.list
            a.item(href="https://github.com/3dw/github-tutorial" target="_blank")
              i.file.alternate.icon
              | GitHub 協作平台使用教學
            a.item(href="https://www.alearn.org.tw" target="_blank")
              i.globe.icon
              | 自主學習促進會官網
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'GithubEmbededView',
  setup() {
    const pinnedRepos = ref([
      {
        name: 'freemath',
        description: '適合自學親子使用的自由數學教材教法，以全中文編輯',
        url: 'https://github.com/3dw/freemath',
        stars: 0,
        forks: 0,
        language: 'Rich Text Format'
      },
      {
        name: 'zh-en',
        description: '中英對照學習資源',
        url: 'https://github.com/3dw/zh-en',
        stars: 0,
        forks: 0,
        language: 'Vue'
      },
      {
        name: 'auto20-next',
        description: '自學2.0是一個公益尋友平台，旨在透過地理位置、個人興趣及專長來協助用戶尋找朋友。平台的核心功能「互助旗」提供公開的自我介紹，讓人們在見面前能初步了解和認識對方。',
        url: 'https://github.com/3dw/auto20-next',
        stars: 0,
        forks: 0,
        language: 'Vue'
      },
      {
        name: 'start-learn',
        description: '新版自學入口頁(編輯中)',
        url: 'https://github.com/3dw/start-learn',
        stars: 0,
        forks: 0,
        language: 'Vue'
      },
      {
        name: 'diverse',
        description: '多樣性學習平台',
        url: 'https://github.com/3dw/diverse',
        stars: 0,
        forks: 0,
        language: 'Vue'
      }
    ])

    const fetchRepoData = async () => {
      try {
        for (const repo of pinnedRepos.value) {
          const response = await axios.get(`https://api.github.com/repos/3dw/${repo.name}`)
          console.log('已獲取', repo.name, '的資料')
          repo.stars = response.data.stargazers_count
          repo.forks = response.data.forks_count
          repo.language = response.data.language || repo.language
        }
      } catch (error) {
        console.error('獲取 GitHub 資料時出錯:', error)
      }
    }

    onMounted(() => {
      fetchRepoData()
    })

    return {
      pinnedRepos
    }
  },
  metaInfo: {
    title: "GitHub 開源組織"
  }
})
</script>

<style scoped>
.github-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.ui.header {
  color: #0066FF;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.ui.description {
  color: #666;
  font-size: 1rem;
  margin-bottom: 2rem;
}

.ui.segment {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.ui.segment:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.ui.items .item {
  padding: 1rem;
  border-bottom: 1px solid #f0f0f0;
}

.ui.items .item:last-child {
  border-bottom: none;
}

.ui.items .item .header {
  color: #0066FF;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-decoration: none;
}

.ui.items .item .header:hover {
  color: #0052cc;
}

.ui.items .item .meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.ui.items .item .meta span {
  margin-right: 1rem;
}

.ui.items .item .description {
  color: #333;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.ui.label {
  background: #f8f9fa;
  color: #666;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.ui.ordered.list .item {
  padding: 0.5rem 0;
  line-height: 1.6;
}

.ui.list .item {
  padding: 0.5rem 0;
}

a {
  color: #0066FF;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: #0052cc;
}

@media (max-width: 768px) {
  .github-container {
    padding: 1rem;
  }

  .ui.segment {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .ui.header {
    font-size: 1.5rem;
  }

  .ui.items .item .header {
    font-size: 1.1rem;
  }
}
</style>
