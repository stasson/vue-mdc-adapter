const typos = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'headline5',
  'headline6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'button',
  'overline'
]

export const mdcTypoMixin = name => {
  return {
    render(createElement) {
      return createElement(
        this.tag,
        {
          class: {
            'mdc-typo': true,
            [name]: true,
            [`mdc-typography--${this.typo}`]: true
          },
          attrs: this.$attrs,
          on: this.$listeners
        },
        this.$slots.default
      )
    }
  }
}

export function mdcTypoPropMixin(defaultTag, defaultTypo, validTypos) {
  return {
    props: {
      tag: {
        type: String,
        default: defaultTag
      },
      typo: {
        type: String,
        default: defaultTypo,
        validator: value => validTypos.indexOf(value) !== -1
      }
    }
  }
}

export const mdcTextSection = {
  name: 'mdc-text-section',
  props: {
    tag: {
      type: String,
      default: 'section'
    }
  },
  render(createElement) {
    return createElement(
      this.tag,
      {
        class: {
          'mdc-typography': true,
          'mdc-text-section': true
        },
        attrs: this.$attrs,
        on: this.$listeners
      },
      this.$slots.default
    )
  }
}

export const mdcText = {
  name: 'mdc-text',
  mixins: [mdcTypoMixin('mdc-text'), mdcTypoPropMixin('p', 'body1', typos)]
}

export const mdcDisplay = {
  name: 'mdc-display',
  mixins: [
    mdcTypoMixin('mdc-headline'),
    mdcTypoPropMixin('h1', 'headline4', [
      'headline4',
      'headline3',
      'headline2',
      'headline1'
    ])
  ]
}

export const mdcHeadline = {
  name: 'mdc-headline',
  mixins: [
    mdcTypoMixin('mdc-headline'),
    mdcTypoPropMixin('h2', 'headline5', ['headline5'])
  ]
}

export const mdcTitle = {
  name: 'mdc-title',
  mixins: [
    mdcTypoMixin('mdc-title'),
    mdcTypoPropMixin('h3', 'headline6', ['headline6'])
  ]
}

export const mdcSubHeading = {
  name: 'mdc-subheading',
  mixins: [
    mdcTypoMixin('mdc-subheading'),
    mdcTypoPropMixin('h4', 'subtitle2', ['subtitle1', 'subtitle2'])
  ]
}

export const mdcBody = {
  name: 'mdc-body',
  mixins: [
    mdcTypoMixin('mdc-body'),
    mdcTypoPropMixin('p', 'body1', ['body1', 'body2'])
  ]
}

export const mdcCaption = {
  name: 'mdc-caption',
  mixins: [
    mdcTypoMixin('mdc-caption'),
    mdcTypoPropMixin('span', 'caption', ['caption'])
  ]
}
