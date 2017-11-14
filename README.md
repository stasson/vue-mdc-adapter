<div class="readme-header">
  <p>
    <a href="https://www.npmjs.com/package/vue-mdc-adapter">
      <img src="https://badge.fury.io/js/vue-mdc-adapter.svg" alt="Version">
    </a>
    <a href="https://www.npmjs.com/package/vue">
      <img src="https://img.shields.io/badge/vue-%5E2.5.3-green.svg" alt="Vue">
    </a>
    <a href="https://www.npmjs.com/package/vue-mdc-adapter">
      <img src="https://img.shields.io/npm/l/vue-mdc-adapter.svg" alt="License">
    </a>
    <a href="https://www.npmjs.com/package/vue-mdc-adapter">
      <img src="https://img.shields.io/npm/dt/vue-mdc-adapter.svg" alt="Downloads">
    </a>
  </p>
  
  <p>
    <a href="https://travis-ci.org/stasson/vue-mdc-adapter">
      <img src="https://travis-ci.org/stasson/vue-mdc-adapter.svg?branch=master" alt="Build">
    </a>
    <a href="https://www.codacy.com/app/stasson/vue-mdc-adapter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=stasson/vue-mdc-adapter&amp;utm_campaign=Badge_Grade">
      <img src="https://api.codacy.com/project/badge/Grade/d854cc6c83ac4985bdd2d2cdb272be5d" alt="Codacy"/>
    </a>
    <a href="https://david-dm.org/stasson/vue-mdc-adapter" >
      <img src="https://img.shields.io/david/stasson/vue-mdc-adapter.svg" alt="Dependencies"/>
    </a>
    <a href="https://gitter.im/vue-mdc-adapter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
      <img src="https://badges.gitter.im/vue-mdc-adapter/Lobby.svg" alt="Chat"/>
    </a>
  </p>

</div>

# Material Components for Vue

`vue-mdc-adapter` is an integration of
[Material Components](https://material.io/components/web/)
for [Vue.js](https://vuejs.org) which follows best practices 
recommended by Google:
[Using Foundation and adapters](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-advanced-approach-using-foundations-and-adapters)

The project aims at trying to find the right balance between ease of use vs
customization, while sticking to the _Vue Spirit_ (approachable, versatile, performant,)

## Quick Links

- [Documentation & Demo](https://stasson.github.io/vue-mdc-adapter)
- [Playground](https://codepen.io/stasson/pen/oojWjV)
- [Changelog](https://github.com/stasson/vue-mdc-adapter/blob/master/CHANGELOG.md)
- [Contributing](https://github.com/stasson/vue-mdc-adapter/blob/master/CONTRIBUTING.md)

## Project Status

The project is under active development.  
Focus is on known issues, validation and keeping up with MDC updates. 

## Component Status

- [x] button 
- [x] card 
- [x] checkbox 
- [x] dialog 
- [x] drawer 
- [x] fab 
- [x] grid-list 
- [x] icon 
- [x] icon-toggle 
- [x] layout-app 
- [x] layout-grid 
- [x] linear-progress 
- [x] list 
- [x] menu 
- [x] radio 
- [x] select 
- [x] slider 
- [x] snackbar 
- [x] switch 
- [x] tabs 
- [x] textfield 
- [x] toolbar 
- [x] typography 


## Getting Started

### quick start

- vue-cli 
```console
npm install -g vue-cli
vue init stasson/vue-mdc-adapter-simple my-project
```


### npm install

```console
npm install --save vue-mdc-adapter
```

> vue-mdc-adapter and material components uses es6 for code and sass for styles
> make sure your webpack/rollup config resolves node_modules for transpiling
> and sass imports

- ES6 Imports

```javascript
import Vue from 'vue'
import VueMdcAdapter from 'vue-mdc-adapter'
Vue.use(VueMdcAdapter)
```

- SCSS Theming

```scss
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41B883;
$mdc-theme-background: #fff;

@import "vue-mdc-adapter/components/styles";
```

__or cherry pick components__:

- ES6 Imports
```javascript
import Vue from 'vue'
import VueMdcButton from 'vue-mdc-adapter/components/button'
Vue.use(VueMdcButton)
```

- SCSS
```scss
@import "vue-mdc-adapter/components/button/mdc-button";
```


### CDN install

```html
<head>
  <!-- import reset material icons, fonts and vue-mdc-adapter stylesheets -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" type="text/css">
  <link rel="stylesheet" href="https://unpkg.com/vue-mdc-adapter/dist/vue-mdc-adapter.min.css">

  <!-- import vue and then vue-mdc-adapter -->
  <script src="https://unpkg.com/vue/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-mdc-adapter/dist/vue-mdc-adapter.min.js"></script>
</head>
<body>
  <!-- vue mdc markup -->
<body>
```
