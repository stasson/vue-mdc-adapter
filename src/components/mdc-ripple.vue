<script>
import {MDCRipple} from '@material/ripple'

var directive = {
  bind (el, context) {
    if (!context.modifiers.custom) {
      el.classList.add('mdc-ripple-surface')
    }
    el.mdc_ripple_ = MDCRipple.attachTo(el, { isUnbounded: context.modifiers.unbounded })
  },
  unbind (el, context) {
    if (!el.mdc_ripple_) {
      return
    }
    el.mdc_ripple_.destroy()
    delete el.mdc_ripple_
  }
}

export function install (vm) {
  vm.directive('mdc-ripple', directive)
}

export default directive
</script>
    
