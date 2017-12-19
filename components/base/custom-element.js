export const CustomElement = {
  functional: true,
  render (createElement, context) {
    return createElement(
      context.props.is || context.props.tag || 'div', 
      context.data,
      context.children)
  }
}

export const CustomElementMixin = {
  components: {
    CustomElement
  }
}
