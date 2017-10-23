<h2 align="center">
vue-mdc-adapter
</h2>
<p align="center">
  <a href="https://www.npmjs.com/package/vue-mdc-adapter">
    <img src="https://img.shields.io/npm/v/vue-mdc-adapter.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/vue-mdc-adapter">
    <img src="https://img.shields.io/npm/l/vue-mdc-adapter.svg" alt="License">
  </a>
  <a href="https://travis-ci.org/stasson/vue-mdc-adapter">
    <img src="https://travis-ci.org/stasson/vue-mdc-adapter.svg?branch=master" alt="builds">
  </a>
  <a href="https://www.codacy.com/app/stasson/vue-mdc-adapter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=stasson/vue-mdc-adapter&amp;utm_campaign=Badge_Grade" alt="Codacy">
    <img src="https://api.codacy.com/project/badge/Grade/d854cc6c83ac4985bdd2d2cdb272be5d"/>
  </a>
  <a href="https://www.npmjs.com/package/vue-mdc-adapter">
    <img src="https://img.shields.io/npm/dt/vue-mdc-adapter.svg" alt="downloads">
  </a>
  <a href="https://gitter.im/vue-mdc-adapter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
    <img src="https://badges.gitter.im/vue-mdc-adapter/Lobby.svg" />
  </a>
</p>

## [Material Components](https://material.io/components/web/) for [Vue.JS](https://vuejs.org).


> __Update__:  
> new [documentation](https://stasson.github.io/vue-mdc-adapter) site preview.   
> new build env (on going work...)   
> Focus is on known issues, validation and keeping up with MDC updates.  


### Getting Started

#### CDN

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

> Quick start with vue-cli

```console
npm install -g vue-cli 
vue init stasson/vue-mdc-adapter-simple my-project
```

#### Webpack/Rollup

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


### Documentation

[preview](https://stasson.github.io/vue-mdc-adapter), 
