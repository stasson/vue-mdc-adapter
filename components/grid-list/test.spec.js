import { mount, createLocalVue, checkValidMdcAdapter } from '../unit-test'
import plugin from './index.js';
import Spec from './test.spec.vue'
import {
  mdcGridList,
  mdcGridTile
} from './index.js';

describe(__dirname, () => {
  const localVue = createLocalVue()
  localVue.use(plugin)
  const spec = mount(Spec, {localVue})

  describe('mdcGridList', () => {
    const wrapper = spec.find(mdcGridList)
    checkValidMdcAdapter(wrapper.vm)
  })

  describe('mdcGridTile', () => {
    const wrapper = spec.find(mdcGridTile)
    checkValidMdcAdapter(wrapper.vm)
  })
})