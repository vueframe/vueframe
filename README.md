# vueframe

### Install

```bash
# npm
npm install @vueframe/vueframe

# yarn
yarn add @vueframe/vueframe

# pnpm
pnpm add @vueframe/vueframe
```

### Import

``main.js``

```js
import { createApp } from 'vue'
import App from './App.vue'
import Vueframe from 'vueframe'

const app = createApp(App)

app.use(Vueframe)

app.mount('#app')
```

### Usage

``App.vue``

```vue
<YouTube autoplay muted id="dQw4w9WgXcQ" />
```
