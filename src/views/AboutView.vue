<template lang="pug">
div
  h1 自主學習促進會專案一覽：

  table.ui.celled.stackable.table
    thead
      tr
        th ID
        th 全名
        th 網站
        th 主要類別
        th 維護者
        th 電子郵件信箱
        th.description 描述
    tbody
      tr(v-for="item in data" :key="item.id")
        td {{ item.id }}
        td {{ item.full_name }}
        td
          a(:href="item.website" target="_blank") {{ item.website }}
        td {{ item.main_category }}
        td {{ item.maintainer }}
        td {{ item.maintainer_email }}
        td.description {{ item.description }}
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { database, projectsRef } from '@/firebase'
import { onValue } from 'firebase/database'

export default {
  setup() {
    const data = ref([])

    onMounted(() => {
      onValue(projectsRef, (snapshot) => {
        const projects = snapshot.val()
        data.value = Object.values(projects)
      }, (error) => {
        console.error('讀取資料時出錯', error)
      })
    })

    return {
      data
    }
  }
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
