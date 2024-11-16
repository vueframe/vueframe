# vueframe

### Quick Start

#### Install

```bash
# npm
npm install @vueframe/vueframe
```

#### Import

``main.ts / main.js``

```js
import { createApp } from 'vue'
import App from './App.vue'
import Vueframe from 'vueframe'

const app = createApp(App)
app.use(Vueframe)
app.mount('#app')
```

#### Usage

``App.vue``

```vue
<!-- Basic usage -->
<YouTube id="u5CguqywlBk" />
```

### Support

```vue
<YouTube id="u5CguqywlBk" />
```

```vue
<Vimeo id="676247342" />
```

```vue
<Dailymotion id="x8i1ffw"/>
```

### Props

| Prop       | Type          | Default     | Description                    |
|------------|---------------|-------------|--------------------------------|
| id         | String        | required    | Platform video ID              |
| autoplay   | Boolean       | false       | Automatically start playback   |
| muted      | Boolean       | false       | Start video muted              |
| width      | String/Number | '1024px'    | Player width                   |
| height     | String/Number | '576px'     | Player height                  |
