<template lang="pug">
main.ui.container
  h1.ui.header 自學修法及本會歷史
  .history-content
    p 自學法治化的歷史發展過程中，從最初各縣市自行訂定辦法，到現在成為具有完整法律保障的教育選擇，經歷了多次重要的修法歷程。本會與各個團體合作，透過不同的立法策略，包括「全面照顧」、「以小博大」、「南北合作」、「先嚴後鬆」、「先有後修」、「個案突顯」等方式，逐步爭取自學生的權益。
  Timeline(:value="data", align="alternate" v-if="data.length > 0")
    template(#opposite="slotProps")
      small.text-gray-500 {{ slotProps.item.date }}
    template(#content="slotProps")
      .timeline-content
        .update-text {{ slotProps.item.text }}
        a.ui.button(v-if="slotProps.item.href" :href="slotProps.item.href" target="_blank", rel="noopener noreferrer") 相關連結
          | &nbsp;
          i.external.icon
</template>

<script lang="ts">
import { ref } from 'vue'
import Timeline from 'primevue/timeline'
import { historyData } from '../data/history'
export default {
  components: {
    Timeline
  },
  props: {
  },
  setup() {
    const data = ref(historyData)

    return {
      data,
    };
  },
  methods: {
  },
}
</script>

<style scoped>
.timeline-content {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
}

.update-text {
  margin-bottom: 0.5rem;
  white-space: pre-wrap;
}

.updater {
  font-size: 0.9rem;
  color: #666;
}

.history-content {
  margin-bottom: 2rem;
}

:deep(.p-timeline-event-opposite) {
  text-align: left;
}

:deep(.p-timeline-event-content) {
  text-align: left !important;
}

@media screen and (max-width: 768px) {

  :deep(.timeline-content) {
    padding: 0.38rem;
    margin: 0 !important;
  }

  .timeline-content .ui.button {
    padding: 0.5rem !important;
  }
}
</style>
