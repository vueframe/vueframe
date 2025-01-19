<h1 align="center">
  <br>
  <a href="https://github.com/vueframe/vueframe"><img src="https://raw.githubusercontent.com/vueframe/vueframe/refs/heads/main/icon/dino.png" alt="vueframe" width="175"></a>
  <br>
  vueframe
  <br>
</h1>

<h4 align="center">High performance, rich media embed components. For your site, built using <a href="https://vuejs.org/" target="_blank">Vue.</a></h4>

<p align="center">🚧 A Svelte Version is in the works</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@vueframe/vueframe">
        <img src="https://img.shields.io/npm/v/@vueframe/vueframe.svg?color=6a7e4c&style=flat" alt="npm version">
    </a>
    <a href="https://github.com/vueframe/vueframe/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-6a7e4c?style=flat" alt="License">
    </a>
    <a href="https://ko-fi.com/brick_wall">
        <img src="https://img.shields.io/badge/$-donate-6a7e4c.svg?style=flat" alt="Donate">
    </a>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#youtube">YouTube</a> •
  <a href="#vimeo">Vimeo</a> •
  <a href="#copyright--license">Copyright & license</a>
</p>

## Installation

```bash
npm install @vueframe/vueframe@3
```

``App.vue``

```html
<script setup>
  import { YouTube, Vimeo } from '@vueframe/vueframe'
</script>
```

## Youtube

### Usage

``App.vue``

```html
<YouTube id="dCxSsr5xuL8" />
```

You can also pass in the full URL for the video

```html
<YouTube id="https://youtu.be/dCxSsr5xuL8" />
```

### Optional props

``poster``

```html
<YouTube
  id="dCxSsr5xuL8"
  poster="//picsum.photos/1280/720"
/>
```

``posterquality``

Options: low, default, high, max

```html
<YouTube
  id="dCxSsr5xuL8"
  posterquality="low"
/>
```

``params``

```html
<YouTube
  id="dCxSsr5xuL8"
  params="controls=0&mute=1"
/>
```

``title``

```html
<YouTube
  id="dCxSsr5xuL8"
  title="Nuxt in 100 Seconds"
/>
```

## Vimeo

### Usage

``App.vue``

```html
<Vimeo id="32001208" />
```

You can also pass in the full URL for the video

```html
<Vimeo id="https://vimeo.com/32001208" />
```

### Optional props

``poster``

```html
<Vimeo
  id="32001208"
  poster="//picsum.photos/1280/720"
/>
```

``posterquality``

Options: low, default, high, max

```html
<Vimeo
  id="32001208"
  posterquality="low"
/>
```

``params``

This component does not currently support params

``title``

```html
<Vimeo
  id="32001208"
  title="Earth"
/>
```

## Copyright & license

Licensed under the MIT License, Copyright © 2024-present vueframe.

See [LICENSE](https://github.com/vueframe/vueframe/blob/main/LICENSE) for more information.
