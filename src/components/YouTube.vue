<template>
  <lite-youtube
    ref="youtube"
    :videoid="videoId"
    :title="title"
    :params="params"
  ></lite-youtube>
</template>

<script>
import 'lite-youtube-embed'
import '../../node_modules/lite-youtube-embed/src/lite-yt-embed.css';

export default {
  name: 'YouTube',
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
    params: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    videoId() {
        const extractId = (input) => {
        if (!input) return null
        
        const str = String(input)
        
        if (str.includes('youtu.be/')) {
            return str.split('youtu.be/')[1].split(/[?&]/)[0]
        }

        if (str.includes('youtube.com/')) {
            const match = str.match(/[?&]v=([^?&]+)/)
            return match ? match[1] : null
        }
        
        if (/^[A-Za-z0-9_-]{11}$/.test(str)) {
            return str
        }
        
        return null
        }
        
        return extractId(this.id) || ''
    },
    postersrc() {
      const map = {
        max: 'maxresdefault',
        high: 'hqdefault',
        default: 'sddefault',
        low: 'default'
      }
      return this.poster || (this.videoId ? `https://img.youtube.com/vi/${this.videoId}/${map[this.posterquality] || 'sddefault'}.jpg` : '')
    }
  },
  mounted() {
    this.enforcePoster()
    this.setupMutationObserver()
  },
  methods: {
    enforcePoster() {
      if (this.$refs.youtube && this.postersrc) {
        this.$refs.youtube.style.backgroundImage = `url('${this.postersrc}')`
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

      if (this.$refs.youtube) {
        observer.observe(this.$refs.youtube, {
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
lite-youtube {
  aspect-ratio: 16 / 9;
  width: 720px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  overflow: hidden;
}

lite-youtube::before {
  background-image: none;
}
</style>