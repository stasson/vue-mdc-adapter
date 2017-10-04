export const CustomElement = {
  name: 'custom-element',
  props: {
    tag: {type:String, required:true}
  },
  render (createElement) {
    return createElement(this.tag, {
      'attrs': this.$attrs,
    },
    this.$slots.default )
  }
}

export const CustomElementMixin = {
  components: {
    'custom-element': CustomElement
  }
}
