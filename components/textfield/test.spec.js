import { pluginSanityCheck, mount, checkValidFoundation } from '../unit-test'
import plugin from './index.js'
import { mdcTextField } from './index.js'

pluginSanityCheck(__dirname, plugin)

describe('mdcTextField', () => {
  const wrapper = mount(mdcTextField, {
    propsData: {
      label: 'label',
      helptext: 'helptext'
    }
  })

  describe('labelFoundation', () => {
    checkValidFoundation(wrapper.vm.labelFoundation)
  })

  describe('lineRippleFoundation', () => {
    checkValidFoundation(wrapper.vm.lineRippleFoundation)
  })

  describe('helperTextFoundation', () => {
    checkValidFoundation(wrapper.vm.helperTextFoundation)
  })
})

describe('mdcTextField', () => {
  const wrapper = mount(mdcTextField, {
    propsData: {
      outline: true
    }
  })

  describe('outlineFoundation', () => {
    checkValidFoundation(wrapper.vm.outlineFoundation)
  })
})

describe('mdcTextField', () => {
  const wrapper = mount(mdcTextField, {
    propsData: {
      trailingIcon: 'event'
    }
  })

  describe('iconFoundation', () => {
    checkValidFoundation(wrapper.vm.iconFoundation)
  })
})
