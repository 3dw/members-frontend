<template lang="pug">
.ui.container.center.aligned
  .ui.segment.padded
    i.huge.exclamation.triangle.black.icon
    h1.ui.header 404 - 找不到頁面
    p 抱歉，您要找的頁面不存在。
    router-link.ui.basic.huge.primary.button(to="/")
      i.home.icon
      | 回到首頁
</template>

<script lang="ts">
export default {
  name: '404ErrorView'
}
</script>

<style scoped>
.ui.container {
  margin-top: 5rem;
}

.ui.segment {
  padding: 3rem;
}

.exclamation.triangle.icon {
  color: #db2828;
  margin-bottom: 1rem;
}

.ui.header {
  margin-top: 0;
}

p {
  font-size: 1.2rem;
  margin: 1rem 0 2rem;
}
</style>
