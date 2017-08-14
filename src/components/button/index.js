import '@material/button/dist/mdc.button.css'
import VueMDCButton from './mdc-button'

export {VueMDCButton}

export default {
  install (vm) {
    vm.component('mdc-button', VueMDCButton)
  }
}
