<template>
  <div 
    class="vueframe--youtube" 
    :style="{ width: width, height: height }"
  >
    <iframe
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
import { computed } from 'vue'

export default {
  name: 'YouTube',
  props: {
    id: {
      type: String,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    muted: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '1024px',
    },
    height: {
      type: String,
      default: '576px',
    },
    title: {
      type: String,
      default: 'YouTube',
    },
  },
  setup(props) {
    const embedUrl = computed(() => {
      const params = new URLSearchParams({
        rel: '0',
      })

      if (props.autoplay) {
        params.append('autoplay', '1')
      }

      if (props.muted) {
        params.append('mute', '1')
      }

      return `https://www.youtube.com/embed/${props.id}?${params.toString()}`
    })

    return {
      embedUrl,
    }
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
  height: 100%;
  width: 100%;
}
</style>