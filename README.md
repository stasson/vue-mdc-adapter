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
  <a href="https://www.npmjs.com/package/vue-mdc-adapter">
    <img src="https://img.shields.io/npm/dt/vue-mdc-adapter.svg" alt="downloads">
  </a>
  <a href="https://travis-ci.org/stasson/vue-mdc-adapter">
    <img src="https://travis-ci.org/stasson/vue-mdc-adapter.svg?branch=master" alt="builds">
  </a>
</p>

## A [Vue.JS](https://vuejs.org) wrapper around Google's [Material Component for the Web](https://material.io/components/web/).

> __Update__:  
> Requires vue ^2.4.2 as peer dependency.  
> Starting v0.0.35, most of the MDC component are supported.  
> Focus is now on validation and keeping up with MDC updates.  


### Getting Started

#### NPM

```console
npm install --save vue-mdc-adapter
```

#### CDN

```html
<head>
  <!-- import reset material icons, fonts and vue-mdc-adapter stylesheets -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">  
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

> requires loaders for vue sass and resolve `node_modules`  

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

Please check
the [wiki](https://github.com/stasson/vue-mdc-adapter/wiki)
and the [preview](https://stasson.github.io/vue-mdc-adapter), 
