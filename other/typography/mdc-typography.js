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

export const mdcTypoMixin = (name) => {
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

export function mdcTypoPropMixin(defaultTag, defaultTypo, validTypos) {
  return  {
    props: {
      'tag': { 
        type: String, 
        default: defaultTag 
      },
      'typo': {
        type: String,
        default: defaultTypo,
        validator:  (value) => validTypos.indexOf(value) !== -1
      },
      'adjust-margin': { 
        type: Boolean,
        default: false
      }
    }
  }
}

export const mdcTextSection = {
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

export const mdcText = {
  name: 'mdc-text',
  mixins: [
    mdcTypoMixin('mdc-text'), 
    mdcTypoPropMixin('p', 'body1', typos)
  ],
}

export const mdcDisplay = {
  name: 'mdc-display',
  mixins: [ 
    mdcTypoMixin('mdc-display'), 
    mdcTypoPropMixin('h1', 'display1', ['display4', 'display3', 'display2', 'display1'])],
}

export const mdcHeadline = {
  name: 'mdc-headline',
  mixins: [ 
    mdcTypoMixin('mdc-headline'), 
    mdcTypoPropMixin('h2', 'headline', ['headline'])],
}

export const mdcTitle = {
  name: 'mdc-title',
  mixins: [ 
    mdcTypoMixin('mdc-title'), 
    mdcTypoPropMixin('h3', 'title', ['title'])],
}

export const mdcSubHeading = {
  name: 'mdc-subheading',
  mixins: [ 
    mdcTypoMixin('mdc-subheading'), 
    mdcTypoPropMixin('h4', 'subheading2', ['subheading1', 'subheading2'])],
}

export const  mdcBody = {
  name: 'mdc-body',
  mixins: [
    mdcTypoMixin('mdc-body'), 
    mdcTypoPropMixin('p', 'body1', ['body1', 'body2'])],
}

export const mdcCaption = {
  name: 'mdc-caption',
  mixins: [
    mdcTypoMixin('mdc-caption'), 
    mdcTypoPropMixin('span', 'caption', ['caption'])],
}
