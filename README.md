# vueframe

High performance, rich media embed components. For your site, built using Vue.

[![npm version](https://img.shields.io/npm/v/@vueframe/vueframe.svg)](https://www.npmjs.com/package/@vueframe/vueframe)
![License](https://img.shields.io/badge/license-MIT-red)

## Features ✨

- 🎯 Simple, zero-config setup
- 🎬 Support for YouTube, Vimeo, and Dailymotion e.t.c
- 🚀 Vue 3 compatible
- ⚡ Lightweight + Lazy loading support
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

⛔ This component currently does not support the ``autoplay`` prop

```vue
<Dailymotion id="x8i1ffw" />
```

## Props 🎛️

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | Required | Video ID from the platform |
| `autoplay` | `boolean` | `false` | Auto-start playback |
| `muted` | `boolean` | `false` | Start video muted |
| `width` | `string\|number` | `"1024px"` | Embed width |
| `height` | `string\|number` | `"576px"` | Embed height |
| `title` | `string` | `null` | Embed Title |
| `loading` | `string` | `eager` | Embed Loading strategy can be `eager` or `lazy` |

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
  loading="lazy"
/>
```

## To-Do

- [ ] Convert YouTube component over to use ``@justinribeiro/lite-youtube``
- [ ] Convert Vimeo component over to use ``lite-vimeo``
- [ ] Add ``autoplay`` support for Dailymotion
- [ ] Add support for Twitter embeds
- [ ] Add support for Bluesky embeds
- [ ] Add support for Reddit embeds

## License 📄

MIT © vueframe

---

Made with ❤️ by vueframe
