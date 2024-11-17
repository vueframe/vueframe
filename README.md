# VueFrame

A modern, lightweight Vue 3 component library for embedding video players from popular platforms.

[![npm version](https://img.shields.io/npm/v/@vueframe/vueframe.svg)](https://www.npmjs.com/package/@vueframe/vueframe)
![License](https://img.shields.io/badge/license-MIT-red)

## Features ✨

- 🎯 Simple, zero-config setup
- 🎬 Support for YouTube, Vimeo, and Dailymotion e.t.c
- 🚀 Vue 3 compatible
- ⚡ Lightweight
- 🎛️ Universal prop API
<!-- - 📱 Responsive by default -->

## Installation 📦

```bash
# npm
npm install @vueframe/vueframe
```

## Setup ⚙️

```ts
// main.ts / main.js
import { createApp } from 'vue'
import App from './App.vue'
import VueFrame from '@vueframe/vueframe'

createApp(App)
  .use(VueFrame)
  .mount('#app')
```

## Usage 💻

``App.vue``

### YouTube

```vue
<YouTube id="dQw4w9WgXcQ" />
```

### Vimeo

```vue
<Vimeo id="676247342" />
```

### Dailymotion

This component currently does not support ``autoplay`` or ``muted``

```vue
<Dailymotion id="x8i1ffw" />
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

### With Props

```vue
<YouTube id="dQw4w9WgXcQ" autoplay muted width="800px" height="450px" />
```

## License 📄

MIT © vueframe

---

Made with ❤️ by vueframe
