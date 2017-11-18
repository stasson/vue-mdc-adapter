import { mount, createLocalVue, checkValidMdcAdapter } from '../test-utils'

import VueMDCMenuSelect from './mdc-menu-select.vue'
import VueMDCMenuOption from './mdc-menu-option.vue'
import VueMDCNativeSelect from './mdc-native-select.vue'
import VueMDCNativeOption from './mdc-native-option.vue'
import VueMDCMultiSelect from './mdc-multi-select.vue'
import VueMDCMultiOption from './mdc-multi-option.vue'

import Spec from './test.spec.vue';

describe(__dirname, () => {

  const localVue = createLocalVue()

  describe('VueMDCSelect', () => {
    const spec = mount(Spec, localVue)
    test('is a Vue instance', () => {
      expect(spec.isVueInstance()).toBeTruthy()
    })

    describe('VueMDCMenuSelect', () => {
      checkValidMdcAdapter(spec.find(VueMDCMenuSelect).vm)
    })
    describe('VueMDCMenuOption', () => {
      checkValidMdcAdapter(spec.find(VueMDCMenuOption).vm)
    })

    describe('VueMDCNativeSelect', () => {
      checkValidMdcAdapter(spec.find(VueMDCNativeSelect).vm)
    })
    describe('VueMDCNativeOption', () => {
      checkValidMdcAdapter(spec.find(VueMDCNativeOption).vm)
    })

    describe('VueMDCMultiSelect', () => {
      checkValidMdcAdapter(spec.find(VueMDCMultiSelect).vm)
    })
    describe('VueMDCMultiOption', () => {
      checkValidMdcAdapter(spec.find(VueMDCMultiOption).vm)
    })

  })

})