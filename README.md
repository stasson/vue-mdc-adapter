<div class="readme-header">
  <p>
    <a href="https://www.codacy.com/app/stasson/vue-mdc-adapter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=stasson/vue-mdc-adapter&amp;utm_campaign=Badge_Grade">
    <a href="https://www.npmjs.com/package/vue-mdc-adapter">
      <img src="https://badge.fury.io/js/vue-mdc-adapter.svg" alt="Version">
    </a>
    <a href="https://www.npmjs.com/package/vue">
      <img src="https://img.shields.io/badge/vue-%5E2.5.3-green.svg" alt="Vue">
    </a>
    <a href="https://www.npmjs.com/package/vue-mdc-adapter">
      <img src="https://img.shields.io/npm/l/vue-mdc-adapter.svg" alt="License">
    </a>
      <img src="https://api.codacy.com/project/badge/Grade/d854cc6c83ac4985bdd2d2cdb272be5d" alt="Codacy"/>
    </a>
    <a href="https://www.npmjs.com/package/vue-mdc-adapter">
      <img src="https://img.shields.io/npm/dt/vue-mdc-adapter.svg" alt="Downloads">
    </a>    
  </p>
  
  <p>
    <a href="https://travis-ci.org/stasson/vue-mdc-adapter">
      <img src="https://travis-ci.org/stasson/vue-mdc-adapter.svg?branch=master" alt="Build">
    </a>
    <a href="https://greenkeeper.io/" >
      <img src="https://badges.greenkeeper.io/stasson/vue-mdc-adapter.svg" alt="Dependencies"/>
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
for [Vue.js](https://vuejs.org) which follows the best practices 
recommended by Google:
[Using Foundations and Adapters](https://github.com/material-components/material-components-web/blob/master/docs/integrating-into-frameworks.md#the-advanced-approach-using-foundations-and-adapters)

This project aims to find the right balance between ease of use and
customization while sticking to the _Vue Spirit_ (approachable, versatile, and performant)

## Quick Links

- [Documentation & Demo](https://stasson.github.io/vue-mdc-adapter)
- [CodePen](https://codepen.io/collection/XBpwxq/) & [CodeSandbox](https://codesandbox.io/s/r5o35xnn3q?module=%2Fsrc%2Fcomponents%2FHello.vue)
- [Webpack Boilerplate](https://github.com/stasson/vue-mdc-adapter-template)
- [Changelog](https://github.com/stasson/vue-mdc-adapter/blob/master/CHANGELOG.md)
- [Contributing](https://github.com/stasson/vue-mdc-adapter/blob/master/CONTRIBUTING.md)

## Project Status

This project is under active development.
The focus is on known issues, validation, and keeping up with MDC updates.  
Do not hesitate to open an issue on [GitHub](https://github.com/stasson/vue-mdc-adapter/issues)
or contact us on [Gitter](https://gitter.im/vue-mdc-adapter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge).


> Each MDCWeb component is mapped to a single vue plugin 

- [x] [button](https://stasson.github.io/vue-mdc-adapter/#/component/button) 
- [x] [card](https://stasson.github.io/vue-mdc-adapter/#/component/card) 
- [x] [checkbox](https://stasson.github.io/vue-mdc-adapter/#/component/checkbox) 
- [x] [dialog](https://stasson.github.io/vue-mdc-adapter/#/component/dialog) 
- [x] [drawer](https://stasson.github.io/vue-mdc-adapter/#/component/drawer) 
- [x] [fab](https://stasson.github.io/vue-mdc-adapter/#/component/fab) 
- [x] [grid-list](https://stasson.github.io/vue-mdc-adapter/#/component/grid-list) 
- [x] [icon-toggle](https://stasson.github.io/vue-mdc-adapter/#/component/icon-toggle) 
- [x] [layout-grid](https://stasson.github.io/vue-mdc-adapter/#/component/layout-grid) 
- [x] [linear-progress](https://stasson.github.io/vue-mdc-adapter/#/component/linear-progress) 
- [x] [list](https://stasson.github.io/vue-mdc-adapter/#/component/list) 
- [x] [menu](https://stasson.github.io/vue-mdc-adapter/#/component/menu) 
- [x] [radio](https://stasson.github.io/vue-mdc-adapter/#/component/radio) 
- [x] [select](https://stasson.github.io/vue-mdc-adapter/#/component/select) 
- [x] [slider](https://stasson.github.io/vue-mdc-adapter/#/component/slider) 
- [x] [snackbar](https://stasson.github.io/vue-mdc-adapter/#/component/snackbar) 
- [x] [switch](https://stasson.github.io/vue-mdc-adapter/#/component/switch) 
- [x] [tabs](https://stasson.github.io/vue-mdc-adapter/#/component/tabs) 
- [x] [textfield](https://stasson.github.io/vue-mdc-adapter/#/component/textfield) 
- [x] [toolbar](https://stasson.github.io/vue-mdc-adapter/#/component/toolbar) 
- [x] [typography](https://stasson.github.io/vue-mdc-adapter/#/component/typography) 

> Extra plugins

- [x] [layout-app](https://stasson.github.io/vue-mdc-adapter/#/component/layout-app): provides a flexible layout to simplify toolbar vs drawer positioning
- [x] [icon](https://stasson.github.io/vue-mdc-adapter/#/component/icon): provides a material icon wrapper with support for font-awesome, svg, etc.


## Quick Start

#### Playground

Fork the [reference codepen template](https://codepen.io/stasson/pen/XzmMKp)
or one of the [vue-mdc-adapter codepen collection](https://codepen.io/collection/XBpwxq/) 
or the [CodeSandbox](https://codesandbox.io/s/r5o35xnn3q?module=%2Fsrc%2Fcomponents%2FHello.vue)

#### CDN

```html
<head>
  <!-- import reset material icons, fonts and vue-mdc-adapter stylesheets -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" type="text/css">

  <!-- import vue and then vue-mdc-adapter -->
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vue-mdc-adapter"></script>
</head>
<body>
  <!-- vue mdc markup -->
<body>
```

#### Vue CLI

##### Simple

```console
npm install -g vue-cli
vue init stasson/vue-mdc-adapter-simple my-project
```

##### Webpack

```console
npm install -g vue-cli
vue init stasson/vue-mdc-adapter-webpack my-project
cd my-project
npm install
npm run dev
```

> Check out the [Getting Started](https://stasson.github.io/vue-mdc-adapter/#/docs/getting-started) guide for more.
