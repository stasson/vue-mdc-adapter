import { mount, createLocalVue, checkValidMdcAdapter } from '../test-utils'
import  plugin from './index.js';
import {
  VueMDCMenuSelect,
  VueMDCMenuOption,
  VueMDCMultiSelect,
  VueMDCMultiOption,
  VueMDCNativeSelect,
  VueMDCNativeOption,
} from './index.js';

import Spec from './test.spec.vue';



describe(__dirname, () => {

  const localVue = createLocalVue()
  localVue.use(plugin)

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