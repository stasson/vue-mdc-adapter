import { pluginSanityCheck } from '../test-utils'
import * as plugin from './index.js';

pluginSanityCheck(__dirname, plugin, {
  VueMDCDialog : {
    propsData: {
      title: 'title'
    }
  }
})
