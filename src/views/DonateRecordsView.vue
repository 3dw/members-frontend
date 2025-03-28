<template lang="pug">
main.ui.segment
  h1.ui.header 捐款芳名錄

  <img src="../assets/donate_heart.webp" alt="捐贈愛心" class="donate-heart"/>

  p 感謝諸位大德支持。芳名錄如有疏漏，煩請與本會連絡
    |
    a(href="mailto:alearn13994229@gmail.com") alearn13994229@gmail.com
    | ，我們會盡速補上，謝謝！

  .ui.form
    .field
      label 關鍵字搜尋
      input(type="text" v-model="searchQuery" placeholder="請輸入姓名、專案或日期關鍵字")

  p(v-if="filteredRecords.length === 0") 沒有符合搜尋條件的結果
  p(v-else-if="searchQuery") 找到 {{ filteredRecords.length }} 筆符合的捐款記錄

  table.ui.celled.striped.compact.table
    thead
      tr
        th 日期
        th 芳名
        th 金額
        th 支持專案
    tbody
      tr(v-for="(record, idx) in filteredRecords" :key="idx")
        td {{ record.datetime }}
        td {{ record.name }}
        td {{ record.amount }}
        td {{ record.project }}
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import { donate_records } from '../data/donate_records'

interface Record {
  datetime: string;
  name: string;
  amount: number;
  project: string;
}

export default {
  setup() {
    const records = ref<Record[]>(donate_records)

    const searchQuery = ref('');

    const filteredRecords = computed(() => {
      const parseDateTime = (datetime: string) => {
        const [year, month] = datetime.split('年').map(Number);
        return new Date(year, month - 1, 1);
      }

      if (!searchQuery.value) {
        return records.value.slice().sort((a, b) =>
          new Date(parseDateTime(b.datetime)).getTime() - new Date(parseDateTime(a.datetime)).getTime()
        );
      }

      const query = searchQuery.value;
      console.log(query);
      return records.value.filter(record =>
        record.name.includes(query) ||
        record.project.includes(query) ||
        record.datetime.includes(query)
      ).slice().sort((a, b) =>
        new Date(parseDateTime(b.datetime)).getTime() - new Date(parseDateTime(a.datetime)).getTime()
      );
    });

    return {
      records,
      searchQuery,
      filteredRecords
    }
  }
}
</script>

<style scoped>


img.donate-heart {
  width: 200px;
  height: 200px;
  margin: .2em;
  float: right;
  border-radius: 50%;
}

.ui.cards {
  margin-top: 2em;
}
.ui.cards > .card {
  margin-bottom: 1em;
}
h4.ui.header, p {
  font-size: 16px;
}

.label {
  font-size: 18px !important;
}

.ui.button {
  margin: 0.5em;
}

.ui.buttons .ui.button {
  margin-left: 0;
  margin-right: 0;
}

.ui.line.button {
  background-color: #00b900;
  color: white !important;
}

#line, #line-icon {
  color: white !important;
}

.ui.feed {
  margin: 2em 0;
}

#action-record {
  max-height: 600px;
  overflow-y: auto;
}

.ui.progress {
  margin: 0;
  border-radius: 0.28571429rem 0.28571429rem 0 0;
}

.ui.card .ui.progress:first-child {
  margin: 0;
}

.ui.tiny.statistics {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 1em 0;
}

.ui.tiny.statistics .statistic {
  margin: 0.5em !important;
}

.ui.form textarea {
  font-size: 16px;
  line-height: 1.5;
}

.ui.success.message {
  margin-top: 1em;
}

.red.star {
  display: inline-block;
  position: relative;
  top: 1em;
  left: -.5em;
  color: red;
}

.red.star::after {
  content: ' *';
}
</style>
