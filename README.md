# DEPRECATED

> **This project is stale. You may be interested in following alternatives:**
>
> - [Vuetify](https://vuetifyjs.com/en/)
>   The reference Material implementation for Vue, Not based on MDC-Web though
> - [material-components-vue](https://github.com/matsp/material-components-vue)
>   a very serious Vue implementation of MDC-Web
> - [pgbross/vue-material-adapter](https://github.com/pgbross/vue-material-adapter)
>   an updated version based on a fork of this project that may be of interest.

## Material Components for Vue

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


## Quick Start

#### Playground

Fork the [reference codepen template](https://codepen.io/stasson/pen/XzmMKp)
or one of the [vue-mdc-adapter codepen collection](https://codepen.io/collection/XBpwxq/)
or the [CodeSandbox](https://codesandbox.io/s/r5o35xnn3q?module=%2Fsrc%2Fcomponents%2FHello.vue)

#### CDN

```html
<head>
  <!-- import reset material icons, fonts and vue-mdc-adapter stylesheets -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
    type="text/css"
  />

  <!-- import vue and then vue-mdc-adapter -->
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vue-mdc-adapter"></script>
</head>
<body>
  <!-- vue mdc markup -->
  <body></body>
</body>
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
