<template>
  <div>
    <h1>資料：</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.full_name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    // 在組件掛載時發送請求
    axios.get('https://members-backend.alearn13994229.workers.dev/api/projects')
      .then(response => {
        this.data = response.data
      })
      .catch(error => {
        console.error('出錯了', error)
      })
  },
}
</script>
