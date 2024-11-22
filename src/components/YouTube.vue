<template>
  <div 
    class="vueframe"
  >
    <lite-youtube
      :videoid="id" 
      :videotitle="title" 
      :title="title"
      :data-title="title"
      :params="params" 
      :autoload="AUTO_LOAD"
      :nocookie="NO_COOKIE"
      class="vueframe__embed"
    >
      <img 
        v-if="COMPUTED_POSTER" 
        :src="COMPUTED_POSTER" 
        :alt="title" 
        slot="image" 
        class="vueframe__poster"
      />
    </lite-youtube>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import '@justinribeiro/lite-youtube'

const AUTO_LOAD = true
const NO_COOKIE = true

const POSTER_QUALITY_MAP = {
  max: 'maxresdefault',
  high: 'sddefault',
  default: 'hqdefault',
  low: 'default'
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
  params: { 
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

// Validate `posterquality` and log errors for invalid values
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
  return props.poster || `https://img.youtube.com/vi/${props.id}/${quality}.jpg`;
})

defineExpose({
  Youtube: {
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

.vueframe__poster {
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  overflow: hidden;
}

.vueframe__embed {
  overflow: hidden;
  height: 100% !important;
  width: 100% !important;
  --lite-youtube-frame-shadow-visible: no;
}
</style>