// Model
// ref="root" on the mdc root element
// data object contains a classes & styles element
//
// let adapter = new VueMDCAdapter(vm)
// let options = {
//   addClass: (className) => adapter.addClass(className),
//   removeClass: (className) => adapter.removeClass(className),
//   hasClass: (className) => adapter.hasClass(className),
//   updateCssVariable: (varName, value) => adapter.updateCssVariable(varName, value),
//   registerInteractionHandler: (evt, handler) => adapter.registerInteractionHandler(evt, handler),
//   deregisterInteractionHandler: (evt, handler) => adapter.deregisterInteractionHandler(evt, handler),
//   forceLayout: () => adapter.forceLayout(),
//   isAttachedToDOM: () => adapter.isAttachedToDOM()
// }

export default class VueMDCAdapter {
  constructor (vm) {
    this.vm = vm
  }

  // assumes ref="root" on the mdc root element
  get root () {
    return this.vm.$refs.root
  }

  get control () {
    return this.vm.$refs.control
  }

  // assumes a data 'classes' property on the root element
  addClass (className) {
    this.vm.$set(this.vm.classes, className, true)
  }

  // assumes a data 'classes' property on the root element
  removeClass (className) {
    this.vm.$delete(this.vm.classes, className)
  }

  // assumes ref="root" on the mdc root element
  hasClass (className) {
    return this.root.classList.contains(className)
  }

  // assumes a data 'styles' property on the root element
  updateCssVariable (varName, value) {
    this.vm.$set(this.vm.styles, varName, value)
  }

  forceLayout () {
    // TODO check wether that's really what we want to do ...
    this.vm.$forceUpdate()
    return this.root.offsetWidth
  }

  isAttachedToDOM () {
    Boolean(this.vm.$el.parentNode)
  }

  registerInteractionHandler (evt, handler) {
    this.vm.$el.addEventListener(evt, handler)
  }

  deregisterInteractionHandler (evt, handler) {
    this.vm.$el.removeEventListener(evt, handler)
  }

  registerChangeHandler (handler) {
    this.vm.$el.addEventListener('change', handler)
  }

  deregisterChangeHandler (handler) {
    this.vm.$el.removeEventListener('change', handler)
  }
}
