import '@material/slider/dist/mdc.slider.css'

import VueMDCSlider from './mdc-slider.vue'

export {VueMDCSlider}

export default {
  install (vm) {
    vm.component('mdc-slider', VueMDCSlider)
  }
}
