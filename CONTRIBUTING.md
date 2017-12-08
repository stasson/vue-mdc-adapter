# Contributing

To contribute, follow github [fork & pull request](https://guides.github.com/activities/forking/) workflow.

Before engaging to much work, make sure someone is not already working on the same issue on the [Projects pages](https://github.com/stasson/vue-mdc-adapter/projects)  

Do not hesitate to contact us on [Gitter](https://gitter.im/vue-mdc-adapter/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) for any question.

## Development Setup

- Porbably best to align on Latest Node LTS

```bash
nvm install 8.9.1
nvm alias default 8.9.1
```

- If you are on Windows, unit tests require specific [node-canvas](https://github.com/Automattic/node-canvas/wiki/Installation---Windows) pre-requisites install

- Repo is setup to follow conventional git commit with comitizen:

```bash
npm install -g commitizen
```

- get the repo and start the development server

```bash
git clone https://github.com/stasson/vue-mdc-adapter.git
cd vue-mdc-adapter
npm install
npm run dev
```

## Build Env

### Distribution

```bash
npm run build:dist
```

MDC components are organized in features located in a `components\<feature>\` folder.

Each feature is distributed as an umd Vue.js plugin, with a `components` array member for convenience. The main distribution is a Plugin including the full set of features

> distributions are built for each package with rollup:  
> `development` distribution includes source-map, stylesheets are injected  
> `production` distribution is optimaized with split stylesheets  

### Demo and Documentation

```bash
npm run build:demo
```

Each `components\<feature>\` folder has a `Readme.md` and a `demo.vue` which are integrated in the demo site (`demo\` folder).

> demo site is built with webpack, using vue-loader, markdown-it sass-loader and is setup for dynamic imports. 

### Tests

```bash
npm run test
```

> Unit tests are run with jest setup for jsdom and vue-test-utils

Distribution is built is built using rollup. 

## Development Guidelines

## Commits

before submitting for review:

- create/update the associated README.md and demo.vue

- run sanity checks

```bash
npm run test
npm run build
npm run lint
```

> linters are setup to follow `recommended` options

- then commit with commitizen

```bash
# commit with
git cz
```

### Coding Rules

> Rules below apply to adapter component source code. For demo site code, follow  [vuejs-component-style-guide](https://pablohpsilva.github.io/vuejs-component-style-guide/#/).

The style guide is organized into two types of rules: enforced and recommended.

Enforced rules are designed to reduce bugs and must be followed. Code that does not conform to enforced rules may be rejected.

Recommended rules should be followed to maintain a consistent and readable codebase but failure to do so is not grounds for rejection of a pull request.

## Enforced Rules

All of Vue's official style guide [prority A rules](https://vuejs.org/v2/style-guide/#Priority-A-Rules-Essential-Error-Prevention) are enforced with the exception of [scoped styles](https://vuejs.org/v2/style-guide/#Component-style-scoping-essential). Due to the way that MDC works, some global styles are required.

### Single-File Components

  - SFC sections should be only `<template>` and `<script>` with no attributes
  - SFC should not have a `<style>` section. (build env requirement to avoid issues with sass: stylesheet goes to style.scss)
  - SFC template section has no attributes (=> html).
  - SFC script section has no attributes (=> es6)

### Distributed Plugins

  - A distributed package's default export should be a valid Vue plugin (expose an [install function](https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin)) *OR* a Vue mixin
  - The source code for plugins should be located in `components/[plugin]/*`
  - Adapter plugins shall register the vue components with the same element name as the component name property.

### Distributed Components

  - Component source code should be located in `components/[plugin]/mdc-xxx-yyy.(vue|js)`
  - The name of the component should be prefixed with `mdc-`
  - Has a static class which exactly matches the component name
  - `data` must be a function
  - `provide` must be a function
  - MDC adapters must **exactly** match the MDC API
  - When adapting an MDC component do not wrap the MDC component, implement the MDC foundation.

### Miscellaneous

  - When importing foundation from @material/xxx, import from the foundation module instead of pulling the entire package  
    __don't__  
    ~~`import { MDCCheckboxFoundation } from '@material/checkbox'`~~    
    do  
    `import MDCCheckboxFoundation from '@material/checkbox/foundation'`
