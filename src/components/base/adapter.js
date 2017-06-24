// Model
// ref="root" on the mdc root element
// data object contains a classes & styles element

export default class VueMDCAdapter {
  constructor (vm) {
    this.vm = vm
  }

  static create (vm, options) {
    let adapter = new VueMDCAdapter(vm)
    return Object.assign({
      addClass: (className) => adapter.addClass(className),
      removeClass: (className) => adapter.removeClass(className),
      hasClass: (className) => adapter.hasClass(className),
      updateCssVariable: (varName, value) => adapter.updateCssVariable(varName, value),
      registerInteractionHandler: (evt, handler) => adapter.registerInteractionHandler(evt, handler),
      deregisterInteractionHandler: (evt, handler) => adapter.deregisterInteractionHandler(evt, handler)
    }, options)
  }

  // assumes ref="root" on the mdc root element
  get root () {
    return this.vm.$refs.root
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

  // assumes ref="root" on the mdc root element
  registerInteractionHandler (evt, handler) {
    this.root.addEventListener(evt, handler)
  }

  // assumes ref="root" on the mdc root element
  deregisterInteractionHandler (evt, handler) {
    this.root.removeEventListener(evt, handler)
  }
}
