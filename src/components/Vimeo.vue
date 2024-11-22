<template>
  <div class="vueframe">
    <lite-vimeo
      ref="embedRef"
      :videoid="id" 
      :title="title"
      :data-title="title"
      class="vueframe__embed"
    >
    </lite-vimeo>
  </div>
</template>

<script setup>
import { computed, watch, onMounted, ref, nextTick } from 'vue'
import 'lite-vimeo-embed'

const POSTER_QUALITY_MAP = {
  max: 'thumbnail_large',
  high: 'thumbnail_medium',
  default: 'thumbnail_medium',
  low: 'thumbnail_small'
}

const props = defineProps({
  id: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    default: null 
  },
  poster: { 
    type: String, 
    default: null 
  },
  posterquality: { 
    type: String, 
    default: 'default',
  },
})

watch(() => props.posterquality, (newVal) => {
  if (!['max', 'high', 'default', 'low'].includes(newVal)) {
    console.error(
      `[Vueframe Error]: Invalid "posterquality" value: "${newVal}". ` +
      `Valid values are: "max", "high", "default", "low". Falling back to "default".`
    )
  }
})

const COMPUTED_POSTER = computed(() => {
  const quality = POSTER_QUALITY_MAP[props.posterquality] || POSTER_QUALITY_MAP['default'];
  return props.poster || `https://vumbnail.com/${props.id}_${quality}.jpg`;
})

const embedRef = ref(null)

const applyCustomPoster = () => {
  if (embedRef.value) {
    embedRef.value.style.backgroundImage = `url('${COMPUTED_POSTER.value}')`
    embedRef.value.style.backgroundSize = 'cover'
    embedRef.value.style.backgroundPosition = 'center center'
  }
}

onMounted(() => {
  nextTick(() => {
    applyCustomPoster()
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          applyCustomPoster()
        }
      })
    })
    if (embedRef.value) {
      observer.observe(embedRef.value, { attributes: true, attributeFilter: ['style'] })
    }
  })
})

defineExpose({
  Vimeo: {
    props,
  }
})
</script>

<style scoped>
.vueframe {
  position: relative;
  overflow: hidden;
  height: auto;
  width: 720px;
  background-color: #000000;
  box-sizing: border-box;
}

.vueframe__embed {
  overflow: hidden;
  height: 100% !important;
  width: 100% !important;
}

:deep(.vueframe__embed::before) {
  content: none !important;
}

:deep(.vueframe__embed > iframe) {
  height: 100% !important;
  width: 100% !important;
}
</style>