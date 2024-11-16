# VueFrame

A lightweight, modern Vue 3 component library for embedding video players from popular platforms.

[![npm version](https://img.shields.io/npm/v/@vueframe/vueframe.svg)](https://www.npmjs.com/package/@vueframe/vueframe)
[![license](https://img.shields.io/npm/l/@vueframe/vueframe.svg)](https://github.com/yourusername/vueframe/blob/main/LICENSE)

## Features ✨

- 🎯 Simple, zero-config setup
- 🎬 Support for YouTube, Vimeo, and Dailymotion e.t.c
- 🚀 Vue 3 compatible
- 📱 Responsive by default
- 🪶 Lightweight

## Installation 📦

```bash
npm install @vueframe/vueframe
```

## Setup ⚙️

```ts
// main.ts or main.js
import { createApp } from 'vue'
import App from './App.vue'
import Vueframe from '@vueframe/vueframe'

const app = createApp(App)
app.use(Vueframe)
app.mount('#app')
```

## Usage 💻

### YouTube

```vue
<template>
  <YouTube 
    id="u5CguqywlBk"
    :autoplay="false"
    width="1024px"
    height="576px"
  />
</template>
```

### Vimeo

```vue
<template>
  <Vimeo id="676247342" />
</template>
```

### Dailymotion

```vue
<template>
  <Dailymotion id="x8i1ffw" />
</template>
```

## Props 🎛️

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | Required | Video ID from the platform |
| `autoplay` | `boolean` | `false` | Auto-start playback |
| `muted` | `boolean` | `false` | Initialize video muted |
| `width` | `string\|number` | `"1024px"` | Player width |
| `height` | `string\|number` | `"576px"` | Player height |

## Examples 🎯

### Basic Usage

```vue
<template>
  <YouTube id="u5CguqywlBk" />
</template>
```

### With Props

```vue
<template>
  <YouTube id="u5CguqywlBk" autoplay="true" muted="true" width="800px" height="450px"/>
</template>
```

## License 📄

MIT © vueframe

---

Made with ❤️ by vueframe
