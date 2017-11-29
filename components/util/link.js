
export const CustomLink = {
  name: 'custom-link',
  props: {
    tag: { type: String, default: 'a' },
    event: { type: [String, Array], default: 'click'},
    link : Object,
  },
  render (h) {
    let element 
    let data = {
      'attrs': this.$attrs,
      'on': this.$listeners
    }
    
    if (this.$router && this.link) {
      // router-link case
      element = this.$root.$options.components['router-link'] 
      data.props = {tag: this.tag, ...this.link}
    } else {
      // element fallback
      element = this.tag 
    } 

    return h(element, data, this.$slots.default)
  }
}

export const LinkMixin = {
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