<template lang="pug">
main.ui.container#friend-sites-container
  h2.ui.center.aligned.header 友站連結

  .ui.segments
    //- 使用 v-for 遍歷區塊
    .ui.segment(v-for="section in sections" :key="section.title")
      h3.ui.header
        i(:class="section.icon")
        .content {{ section.title }}
      .ui.relaxed.divided.list
        .item(v-for="site in section.sites" :key="site.url")
          i.linkify.icon
          .content
            a(:href="site.url" target="_blank", rel="noopener noreferrer") {{ site.name }}

</template>

<script lang="ts">
export default {
  name: 'FriendSitesView',
  data() {
    return {
      sections: [
        {
          title: '實驗教育',
          icon: 'graduation cap icon',
          sites: [
            { name: '保障教育選擇權聯盟', url: 'https://homeschool.tw/' },
            { name: '星河計畫-自學生經驗匯流', url: 'https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef' },
            { name: '島島阿學', url: 'https://www.daoedu.tw/' },
            { name: '零時小學校', url: 'https://sch001.g0v.tw/' }
          ]
        },
        {
          title: '公益學習平台',
          icon: 'book icon',
          sites: [
            { name: '自由數學', url: 'https://math.alearn.org.tw/' },
            { name: '可汗學院 Khan Academy', url: 'https://www.khanacademy.org/' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
#friend-sites-container {
  padding: 2rem 1rem;
}

.ui.header {
  margin-bottom: 1.5rem;
}

.ui.list .item {
  padding: 0.8rem 0;
}

/* 手機版樣式 */
@media screen and (max-width: 768px) {
  #friend-sites-container {
    padding: 1rem;
  }

  .ui.segments {
    margin: 0;
    box-shadow: none;
  }

  .ui.segment {
    padding: 1rem;
  }
}
</style>
