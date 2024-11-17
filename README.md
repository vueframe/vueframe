# vueframe

High performance, rich media embed components. For your site, built using Vue.

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
import vueframe from '@vueframe/vueframe'

createApp(App)
  .use(vueframe)
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
| `title` | `string` | `null` | Video Title |

## Examples 🎯

### With Props

```vue
<YouTube 
  id="dQw4w9WgXcQ" 
  autoplay 
  muted 
  width="800px" 
  height="450px" 
  title="Never Gonna Give You Up" 
/>
```

## License 📄

MIT © vueframe

---

Made with ❤️ by vueframe
