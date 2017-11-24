const typos = [
  'display4', 
  'display3', 
  'display2', 
  'display1', 
  'headline',
  'title',
  'subheading1',
  'subheading2',
  'body1',
  'body2',
  'caption',
  'button'
]

export const VueMDCTypoMixin = (name) => {
  return {
    render (createElement) {
      return createElement(this.tag, {
        'class': {
          'mdc-typo': true,
          [name]: true,
          [`mdc-typography--${this.typo}`]: true,
          'mdc-typography--adjust-margin': this.adjustMargin
        },
        'attrs': this.$attrs,
        'on': this.$listeners
      },
      this.$slots.default )
    }
  }
}

export function VueMDCTypoPropMixin(defaultTag, defaultTypo, validTypos) {
  return  {
    props: {
      'tag': { 
        type: String, 
        default: defaultTag 
      },
      'typo': {
        type: String,
        default: defaultTypo,
        validator:  (value) => validTypos.includes(value)
      },
      'adjust-margin': { 
        type: Boolean,
        default: false
      }
    }
  }
}

export const VueMDCTextSection = {
  name: 'mdc-text-section',
  props: {
    'tag': {
      type: String, 
      default: 'section' 
    },
  },
  render (createElement) {
    return createElement(this.tag, {
      'class': {
        'mdc-typography': true,
        'mdc-text-section': true,
      },
      'attrs': this.$attrs,
      'on': this.$listeners
    }, this.$slots.default )
  }
}

export const VueMDCText = {
  name: 'mdc-text',
  mixins: [
    VueMDCTypoMixin('mdc-text'), 
    VueMDCTypoPropMixin('p', 'body1', typos)
  ],
}

export const VueMDCDisplay = {
  name: 'mdc-display',
  mixins: [ 
    VueMDCTypoMixin('mdc-display'), 
    VueMDCTypoPropMixin('h1', 'display1', ['display4', 'display3', 'display2', 'display1'])],
}

export const VueMDCHeadline = {
  name: 'mdc-headline',
  mixins: [ 
    VueMDCTypoMixin('mdc-headline'), 
    VueMDCTypoPropMixin('h2', 'headline', ['headline'])],
}

export const VueMDCTitle = {
  name: 'mdc-title',
  mixins: [ 
    VueMDCTypoMixin('mdc-title'), 
    VueMDCTypoPropMixin('h3', 'title', ['title'])],
}

export const VueMDCSubeading = {
  name: 'mdc-subheading',
  mixins: [ 
    VueMDCTypoMixin('mdc-subheading'), 
    VueMDCTypoPropMixin('h4', 'subheading2', ['subheading1', 'subheading2'])],
}

export const  VueMDCBody = {
  name: 'mdc-body',
  mixins: [
    VueMDCTypoMixin('mdc-body'), 
    VueMDCTypoPropMixin('p', 'body1', ['body1', 'body2'])],
}

export const VueMDCCaption = {
  name: 'mdc-caption',
  mixins: [
    VueMDCTypoMixin('mdc-caption'), 
    VueMDCTypoPropMixin('span', 'caption', ['caption'])],
}
