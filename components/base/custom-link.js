export const CustomLink = {
  name: 'custom-link',
  functional: true,
  props: {
    tag: { type: String, default: 'a' },
    link : Object,
  },
  render (h, context) {
    let element 
    let data = Object.assign({}, context.data)

    if (context.props.link && context.parent.$router) {
      // router-link case
      element = context.parent.$root.$options.components['router-link'] 
      data.props = Object.assign({tag: context.props.tag}, context.props.link)
      if (data.on.click) {
        data.nativeOn = {click: data.on.click }
      }
    } else {
      // element fallback
      element = context.props.tag 
    } 

    return h(element, data, context.children)
  }
}

export const CustomLinkMixin = {
  props: {
    to: [String, Object],
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
  },
  computed: {
    link () {
      return this.to && {
        to: this.to,
        exact: this.exact,
        append: this.append,
        replace: this.replace,
        activeClass: this.activeClass,
        exactActiveClass: this.exactActiveClass,
      }
    }
  },
  components : { 
    CustomLink 
  }
}