import { mount, createLocalVue, checkValidMdcAdapter } from '../unit-test'
import plugin from './index.js';
import Spec from './test.spec.vue'
import {
  mdcList,
  mdcListItem,
  mdcListDivider,
  mdcListGroup,
  mdcListGroupHeader,
  mdcListGroupDivider
} from './index.js';

describe(__dirname, () => {
  const localVue = createLocalVue()
  localVue.use(plugin)
  const spec = mount(Spec, {localVue})

  describe('mdcList', () => {
    const wrapper = spec.find(mdcList)
    checkValidMdcAdapter(wrapper.vm)
  })

  describe('mdcListIem', () => {
    const wrapper = spec.find(mdcList)
    checkValidMdcAdapter(wrapper.vm)
  })

  describe('mdcListDivider', () => {
    const wrapper = spec.find(mdcList)
    checkValidMdcAdapter(wrapper.vm)
  })

  describe('mdcListGroup', () => {
    const wrapper = spec.find(mdcList)
    checkValidMdcAdapter(wrapper.vm)
  })

  describe('mdcListGroupDivider', () => {
    const wrapper = spec.find(mdcList)
    checkValidMdcAdapter(wrapper.vm)
  })

  describe('mdcListGroupHeader', () => {
    const wrapper = spec.find(mdcList)
    checkValidMdcAdapter(wrapper.vm)
  })

  describe('mdcListDivider', () => {
    const wrapper = spec.find(mdcList)
    checkValidMdcAdapter(wrapper.vm)
  })

})