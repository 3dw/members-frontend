<template lang="pug">
main.ui.container
  h1.ui.header 年度工作報告
  .ui.segment
    iframe.report-frame(
      :src="url",
      frameborder="0"
      allowfullscreen
    )
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  props: {
    users: {
      type: Object,
      required: true,
    },
  },
  setup() {

    const url = ref('https://docs.google.com/document/d/15sUosH-_72LF2hyMab21oI0tytqPj7Ns2Yeq63-TlNs/preview');

    return {
      url
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

.report-frame {
  width: 100%;
  height: 800px;
  border: none;
}

.ui.segment {
  padding: 0;
  margin-bottom: 2em;
}
</style>
