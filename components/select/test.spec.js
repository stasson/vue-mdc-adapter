import { mount, createLocalVue, checkValidMdcAdapter } from '../unit-test'

import mdcMenuSelect from './mdc-menu-select.vue'
import mdcMenuOption from './mdc-menu-option.vue'
import mdcNativeSelect from './mdc-native-select.vue'
import mdcNativeOption from './mdc-native-option.vue'
import mdcMultiSelect from './mdc-multi-select.vue'
import mdcMultiOption from './mdc-multi-option.vue'

import Spec from './test.spec.vue';

describe(__dirname, () => {

  const localVue = createLocalVue()

  describe('mdcSelect', () => {
    const spec = mount(Spec, localVue)
    test('is a Vue instance', () => {
      expect(spec.isVueInstance()).toBeTruthy()
    })

    describe('mdcMenuSelect', () => {
      checkValidMdcAdapter(spec.find(mdcMenuSelect).vm)
    })
    describe('mdcMenuOption', () => {
      checkValidMdcAdapter(spec.find(mdcMenuOption).vm)
    })

    describe('mdcNativeSelect', () => {
      checkValidMdcAdapter(spec.find(mdcNativeSelect).vm)
    })
    describe('mdcNativeOption', () => {
      checkValidMdcAdapter(spec.find(mdcNativeOption).vm)
    })

    describe('mdcMultiSelect', () => {
      checkValidMdcAdapter(spec.find(mdcMultiSelect).vm)
    })
    describe('mdcMultiOption', () => {
      checkValidMdcAdapter(spec.find(mdcMultiOption).vm)
    })

  })

})