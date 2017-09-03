<p align="center">
  <a href="https://www.npmjs.com/package/vue-mdc-adapter">
    <img src="https://img.shields.io/npm/v/vue-mdc-adapter.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/vue-mdc-adapter">
    <img src="https://img.shields.io/npm/l/vue-mdc-adapter.svg" alt="License">
  </a>
</p>



# vue-mdc-adapter

> [VueJS](https://vuejs.org) wrapper arround 
Google's [Material Components for the Web](https://material.io/components/web/)

## NPM Install
```
npm install --save vue
npm install --save vue-mdc-adapter
```


## Quick Start

### Build with webpack:

- ES6 Imports 
```javascript
import Vue from 'vue'
import VueMdcAdapter from 'vue-mdc-adapter'
Vue.use(VueMdcAdapter)
```

- SCSS
```scss
$mdc-theme-primary: #212121;
$mdc-theme-accent: #41B883;
$mdc-theme-background: #fff;

@import "vue-mdc-adapter/components/styles";
```

### or cherry pick a component:

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

## CDN

```html
<head>
  <!-- import reset material icons, fonts and vue-mdc-adapter stylesheets -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">  
  <link rel="stylesheet" href="https://unpkg.com/vue-mdc-adapter/dist/vue-mdc-adapter.min.css">  
  
  <!-- import vue and then vue-mdc-adapter -->
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vue-mdc-adapter/dist/vue-mdc-adapter.min.js"></script>
</head>
<body>
  <!-- vue mdc markup -->
<body>
```

## Documentation

Please check
the [wiki](https://github.com/stasson/vue-mdc-adapter/wiki)
and the [preview](https://stasson.github.io/vue-mdc-adapter), 
