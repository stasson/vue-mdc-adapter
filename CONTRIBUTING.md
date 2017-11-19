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

- Adapter plugin shall be located @ `components/[feature]/` 
  where _feature_ matches the  pkg name of the component being wrapped: `@material/[feature]`

- Each feature `components/[feature]` package shall be a vue plugin and export the components as well.

- Component shall have a name property which matches the MDC component css class name, kebab case. for example: _mdc_button.vue_ adapts `<button class="mdc-button"> ... </button>`

- Adapter plugins shall register the vue components with the same element name as the component name property.

- Single File Components shall have a `<template>` and `<script>` section, with no lang specified (this is to avoid vue support issues with the complex build env.)

- styles shall not be put in the `.vue` sfc file. styles shall be kept in a separate sass file.

- vue component should have a class on the main mdc element which matches the component name (this is to allow customization).

- when adapting an mdc component do not wrap the mdc component, implement the mdc foundation.

- when importing foundation from @material/xxx, import from the foundation module instead of pullingthe full package  
  __don't__  
  ~~`import { MDCCheckboxFoundation } from '@material/checkbox'`~~    
  do  
  `import MDCCheckboxFoundation from '@material/checkbox/foundation'`  
