<template lang="pug">
.slido-container
  .ui.container
    .ui.segment
      .ui.header Slido 會議室
      .ui.description 即時互動問答區
    .slido-wrapper
      iframe.slido-frame(
        src="https://app.sli.do/event/rErEHEneNQwhGv1U1S9GmB"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowfullscreen
      )
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SlidoMeetingView',
  metaInfo: {
    title: "Slido 會議室"
  }
})
</script>

<style scoped>
.slido-container {
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
}

.slido-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 寬高比 */
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.slido-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

@media (max-width: 768px) {
  .slido-container {
    padding: 1rem;
  }

  .ui.segment {
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .ui.header {
    font-size: 1.5rem;
  }

  .slido-wrapper {
    padding-top: 75%; /* 在移動端調整為 4:3 比例 */
  }
}
</style>
