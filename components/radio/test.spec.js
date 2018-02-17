import { pluginSanityCheck } from '../unit-test'
import plugin from './index.js';

pluginSanityCheck(__dirname, plugin, {
  mdcRadio: {
    propsData: {
      name:'test'
    }
  }
})
