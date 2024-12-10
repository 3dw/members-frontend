<template lang="pug">
main.ui.container
  h1.ui.header 入會程序
  .ui.segment

    h3.ui.header 入會流程
    .ui.ordered.list
      .item 繳交「入會費1000元」加「第一年之常年會費1000元」。共2000元。
      .item 填妥入會申請書（線上版亦可）。
      .item 依本會章程，需有現有會員介紹。並經理監事會同意後，方可加入。
      .item 第一次入會者須出席本次年度會員大會，時間地點另行通知，通常辦在四月的週末（六日）

    h3.ui.header 繳款方式
    .ui.list
      .item
        i.building.icon
        .content 銀行：台北富邦 士林分行（012）
      .item
        i.credit.card.icon
        .content 帳號：30012-0000601
      .item
        i.user.icon
        .content 戶名：社團法人中華民國自主學習促進會

  .ui.segment
    h2.ui.header 入會申請表
    iframe(
      src="https://docs.google.com/forms/d/e/1FAIpQLSe0k6L3aWd5-VIL3-_MFWZ2R2oxVQaoUZONvENaxM_9XoS7Tw/viewform?embedded=true"
      width="100%"
      height="800"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    ) 載入中...
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { changelogsRef } from '@/firebase'
import { onValue } from 'firebase/database'

export default {
  props: {
    users: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const data = ref([])

    onMounted(() => {
      onValue(changelogsRef, (snapshot) => {
        const rawData = snapshot.val();
        console.log(rawData);
        data.value = Object.values(rawData);
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
