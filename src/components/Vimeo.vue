<template>
  <lite-vimeo
    ref="vimeo"
    :videoid="videoId"
    :data-title="title"
  ></lite-vimeo>
</template>

<script>
import 'lite-vimeo-embed'

export default {
  name: 'Vimeo',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: undefined
    },
    poster: {
      type: String,
      default: undefined
    },
    posterquality: {
      type: String,
      default: 'default',
      validator: (value) => ['max', 'high', 'default', 'low'].includes(value)
    },
  },
  computed: {
    videoId() {
        const extractId = (input) => {
        if (!input) return null
        
        const str = String(input)
        
        if (str.includes('vimeo.com/')) {
            return str.split('vimeo.com/')[1].split(/[?&]/)[0]
        }
        
        if (/^\d+$/.test(str)) {
            return str
        }
        
        return null
        }
        
        return extractId(this.id) || ''
    },
    postersrc() {
      const map = {
        max: 'thumbnail_large',
        high: 'thumbnail_medium',
        default: 'thumbnail_medium',
        low: 'thumbnail_small'
      }
      return this.poster || (this.videoId ? `https://vumbnail.com/${this.videoId}_${map[this.posterquality] || 'thumbnail_medium'}.jpg` : '')
    }
  },
  mounted() {
    this.enforcePoster()
    this.setupMutationObserver()
  },
  methods: {
    enforcePoster() {
      if (this.$refs.vimeo && this.postersrc) {
        this.$refs.vimeo.style.backgroundImage = `url('${this.postersrc}')`
      }
    },
    setupMutationObserver() {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            this.enforcePoster()
          }
        })
      })

      if (this.$refs.vimeo) {
        observer.observe(this.$refs.vimeo, {
          attributes: true,
          attributeFilter: ['style']
        })
      }
    }
  },
  watch: {
    postersrc: {
      handler() {
        this.$nextTick(this.enforcePoster)
      },
      immediate: true
    }
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}
</script>

<style>
lite-vimeo {
  aspect-ratio: 16 / 9;
  width: 720px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  overflow: hidden;
}
</style>