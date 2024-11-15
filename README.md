# vueframe

### Install

```bash
npm i @vueframe/vueframe
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
