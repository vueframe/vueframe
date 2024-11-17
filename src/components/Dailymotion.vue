<template>
  <div 
    class="vueframe--dailymotion" 
    :style="{ width: width, height: height }"
    aria-label="Dailymotion"
  >
    <iframe
      class="vueframe--dailymotion-iframe"
      :src="embedUrl"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      title="Dailymotion"
    ></iframe>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Dailymotion',
  props: {
    id: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '1024px',
    },
    height: {
      type: String,
      default: '576px',
    },
  },
  setup(props) {
    const embedUrl = computed(() => {
      return `https://geo.dailymotion.com/player.html?video=${props.id}`
    })
    return {
      embedUrl,
    }
  },
}
</script>

<style scoped>
.vueframe--dailymotion {
  position: relative;
  overflow: hidden;
  height: 576px;
  width: 1024px;
  border-radius: 0.5rem;
}

.vueframe--dailymotion .vueframe--dailymotion-iframe {
  height: 100%;
  width: 100%;
}
</style>