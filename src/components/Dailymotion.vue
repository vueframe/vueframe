<template>
  <div 
    class="vueframe--dailymotion" 
    :style="{ width: width, height: height }"
    ref="container"
  >
    <iframe
      v-if="isVisible"
      class="vueframe--dailymotion--iframe"
      :src="embedUrl"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      :title="title"
    ></iframe>
  </div>
</template>

<script>
import { computed, ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Dailymotion',
  props: {
    id: { type: String, required: true },
    muted: { type: Boolean, default: false },
    width: { type: String, default: '1024px' },
    height: { type: String, default: '576px' },
    title: { type: String, default: null },
    loading: { type: String, default: 'eager' },
  },
  setup(props) {
    const embedUrl = computed(() => {
      const params = new URLSearchParams({
        mute: props.muted ? 'true' : 'false',
      })
      return `https://geo.dailymotion.com/player.html?video=${props.id}&${params.toString()}`
    })

    const isVisible = ref(props.loading === 'eager')

    const container = ref(null)

    const initObserver = () => {
      if (props.loading !== 'lazy' || isVisible.value) return

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      })

      if (container.value) {
        observer.observe(container.value)
      }
    }

    onMounted(() => {
      if (props.loading === 'lazy') {
        initObserver()
      }
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return { embedUrl, isVisible, container }
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

.vueframe--dailymotion .vueframe--dailymotion--iframe {
  height: 100%;
  width: 100%;
  z-index: 0;
}
</style>