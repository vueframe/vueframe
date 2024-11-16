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

### YouTube

#### Usage

```vue
<YouTube id="u5CguqywlBk" />
```

#### Props

| Prop       | Type          | Default     | Description                    |
|------------|---------------|-------------|--------------------------------|
| id         | String        | required    | YouTube video ID               |
| autoplay   | Boolean       | false       | Automatically start playback   |
| muted      | Boolean       | false       | Start video muted              |
| width      | String/Number | '1024px'    | Player width                   |
| height     | String/Number | '576px'     | Player height                  |

### Vimeo

#### Usage

```vue
<Vimeo id="676247342" />
```

#### Props

| Prop       | Type          | Default     | Description                    |
|------------|---------------|-------------|--------------------------------|
| id         | String        | required    | Vimeo video ID                 |
| autoplay   | Boolean       | false       | Automatically start playback   |
| muted      | Boolean       | false       | Start video muted              |
| width      | String/Number | '1024px'    | Player width                   |
| height     | String/Number | '576px'     | Player height                  |

### Dailymotion

#### Usage

```vue
<Dailymotion id="x8i1ffw"/>
```

#### Props

| Prop       | Type          | Default     | Description                    |
|------------|---------------|-------------|--------------------------------|
| id         | String        | required    | Dailymotion video ID           |
| width      | String/Number | '1024px'    | Player width                   |
| height     | String/Number | '576px'     | Player height                  |
