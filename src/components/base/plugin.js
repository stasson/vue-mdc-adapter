import Vue from 'vue'
import responsive from './responsive'

const mdc = new Vue({
  data: {
    layout: new Layout()
  }
})

function Layout () {
  return {
    desktop: responsive.isDesktop,
    tablet: responsive.isTablet,
    phone: responsive.isPhone,
    mode: responsive.mode,
    landscape: responsive.isLandscape,
    portrait: responsive.isPortrait,
    orientation: responsive.orientation
  }
}

function refreshLayout (e) {
  let layout = new Layout()
  Object.assign(mdc.layout, layout)
  mdc.$emit('layout', layout)
}

responsive.desktopQuery.addListener(refreshLayout)
responsive.phoneQuery.addListener(refreshLayout)
responsive.landscapeQuery.addListener(refreshLayout)

export default {
  install (vm) {
    vm.prototype.$mdc = mdc
  }
}
