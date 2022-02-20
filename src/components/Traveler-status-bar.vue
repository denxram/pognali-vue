<template>
  <div class="status-bar">
    <ve-progress :progress="levelValue"
                 :size= "60"
                 color="#ff8d30"
                 emptyColor="transparent"
                 colorFill="rgba(0, 0, 0, 0.6)"
                 thickness="3"
                 line-position="in">
      <template #legend-caption>
        <p class="status-bar__text">level</p>
      </template>
    </ve-progress>
  </div>
</template>

<script>
import { VeProgress } from 'vue-ellipse-progress'
export default {
  name: 'Traveler-status-bar',
  components: {
    VeProgress
  },
  props: {
    levelValue: {
      type: Number
    }
  }
}
</script>

<style scoped>
</style>
