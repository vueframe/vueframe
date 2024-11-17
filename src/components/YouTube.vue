<template>
  <div 
    class="vueframe--youtube" 
    :style="{ width: width, height: height }"
    ref="container"
  >
    <iframe
      v-if="isVisible"
      class="vueframe--youtube--iframe"
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
  name: 'YouTube',
  props: {
    id: { type: String, required: true },
    autoplay: { type: Boolean, default: false },
    muted: { type: Boolean, default: false },
    width: { type: String, default: '1024px' },
    height: { type: String, default: '576px' },
    title: { type: String, default: null },
    loading: { type: String, default: 'eager' },
  },
  setup(props) {
    const embedUrl = computed(() => {
      const params = new URLSearchParams({
        rel: 0,
        autoplay: props.autoplay ? 1 : 0,
        mute: props.muted ? 1 : 0,
      })
      return `https://www.youtube.com/embed/${props.id}?${params.toString()}`
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
.vueframe--youtube {
  position: relative;
  overflow: hidden;
  height: 576px;
  width: 1024px;
  border-radius: 0.5rem;
}

.vueframe--youtube .vueframe--youtube--iframe {
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  max-width: 100%;
}
</style>