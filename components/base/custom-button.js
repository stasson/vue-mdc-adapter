export const CustomButton = {
  name: 'custom-button',
  functional: true,
  props: {
    link : Object,
  },
  render (h, context) {
    let element 
    let data = Object.assign({}, context.data)

    if (context.props.link && context.parent.$router) {
      // router-link case
      element = context.parent.$root.$options.components['router-link'] 
      data.props = Object.assign({tag: context.props.tag}, context.props.link)
      data.attrs.role = 'button'
      if (data.on.click) {
        data.nativeOn = {click: data.on.click }
      }
    } else if (data.attrs && data.attrs.href) {
      // href case
      element = 'a' 
      data.attrs.role = 'button'
    }  else {
      // button fallback
      element = 'button'
    } 

    return h(element, data, context.children)
  }
}

export const CustomButtonMixin = {
  props: {
    href: String,
    disabled: Boolean,
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
    CustomButton 
  }
}
