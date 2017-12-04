import { pluginSanityCheck, mount, checkValidFoundation } from '../unit-test'
import plugin from './index.js';
import {mdcTextField} from './index.js';

pluginSanityCheck(__dirname, plugin)

describe ('mdcTextField', () => {
    const wrapper = mount(mdcTextField, {
        propsData: {
            helptext:"helptext"
        }
    })

    describe('bottomLineFoundation', () => {
        checkValidFoundation(wrapper.vm.bottomLineFoundation)
    })

    describe('helperTextFoundation', () => {
        checkValidFoundation(wrapper.vm.helperTextFoundation)
    })
})
