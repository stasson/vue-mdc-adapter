import { mount } from 'vue-test-utils'
import VueMDCButton from './mdc-button.vue'

describe('VueMDCButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(VueMDCButton)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})