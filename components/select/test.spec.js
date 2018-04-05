import {
  mount,
  createLocalVue,
  checkValidMdcAdapter
} from '../unit-test'
import {
  mdcSelect,
} from './index.js'
import Spec from './test.spec.vue';

describe(__dirname, () => {
  const localVue = createLocalVue()
  describe('mdcSelect', () => {
    const spec = mount(Spec, localVue)
    test('is a Vue instance', () => {
      expect(spec.isVueInstance()).toBeTruthy()
    })
    describe('mdcSelect', () => {
      checkValidMdcAdapter(spec.find(mdcSelect).vm)
    })
  })
})
