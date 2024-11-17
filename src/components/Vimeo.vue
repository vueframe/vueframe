<template>
  <div class="vueframe--vimeo" :style="{ width: width, height: height }">
    <iframe
      class="vueframe--vimeo--iframe"
      :src="embedUrl"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      title="Vimeo"
    ></iframe>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Vimeo',
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
  },
  setup(props) {
    const embedUrl = computed(() => {
      const params = new URLSearchParams({
        byline: 'false',
        portrait: 'false',
        title: 'true',
      })

      if (props.autoplay) {
        params.append('autoplay', 'true')
      }

      if (props.muted) {
        params.append('muted', 'true')
      }

      return `https://player.vimeo.com/video/${props.id}?${params.toString()}`
    })

    return {
      embedUrl,
    }
  },
}
</script>

<style scoped>
.vueframe--vimeo {
  position: relative;
  overflow: hidden;
  height: 576px;
  width: 1024px;
  border-radius: 0.5rem;
}

.vueframe--vimeo .vueframe--vimeo--iframe {
  height: 100%;
  width: 100%;
}
</style>