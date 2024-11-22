
<h1 align="center">
  <br>
  <a href="https://github.com/vueframe/vueframe"><img src="https://raw.githubusercontent.com/vueframe/vueframe/main/icon/icon.png" alt="vueframe" width="175"></a>
  <br>
  vueframe
  <br>
</h1>

<h4 align="center">High performance, rich media embed components. For your site, built using <a href="https://vuejs.org/" target="_blank">Vue.</a></h4>

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
  <a href="#Features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#youtube">YouTube</a> •
  <a href="#vimeo">Vimeo</a> •
  <a href="#license">License</a>
</p>

<!-- ## Features

- 🎯 Simple, zero-config setup
- 🎬 Support for YouTube, Vimeo e.t.c
- 🚀 Vue 3 compatible
- ⚡ Superfast and Lightweight
- 🔄 Customizable Props-->

## Installation

```bash
npm install @vueframe/vueframe
```

``main.js``

```js
import { Youtube, Vimeo } from '@vueframe/vueframe'
```

## Youtube

### Usage

``app.vue``

```html
<YouTube id="dCxSsr5xuL8" />
```

### Optional props

``poster``

```html
<YouTube
  id="dCxSsr5xuL8"
  poster="https://raw.githubusercontent.com/vueframe/vueframe/main/banner/banner.png"
/>
```

``posterquality``

```html
<!-- Options: low, default, high, max -->
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
  title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
/>
```

## Vimeo

### Usage

``app.vue``

```html
<Vimeo id="32001208" />
```

### Optional props

``poster``

```html
<Vimeo
  id="32001208"
  poster="https://raw.githubusercontent.com/vueframe/vueframe/main/banner/banner.svg"
/>
```

``posterquality``

```html
<!-- Options: low, default, high, max -->
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

## Copyright and license

Licensed under the MIT License, Copyright © 2024-present vueframe.

See [LICENSE](https://github.com/vueframe/vueframe/blob/main/LICENSE) for more information.