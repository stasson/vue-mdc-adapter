import VueMDCLayoutApp from './mdc-layout-app.vue'

export {VueMDCLayoutApp}

export default {
  install (vm) {
    vm.component('mdc-layout-app', VueMDCLayoutApp)
  }
}
