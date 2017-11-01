import { mount, createLocalVue, checkValidMdcAdapter } from '../test-utils'
import plugin from './index.js';
import Spec from './test.spec.vue';
import VueMDCDrawer from './mdc-drawer.vue'
import VueMDCDrawerHeader from './mdc-drawer-header.vue'
import VueMDCDrawerList from './mdc-drawer-list.vue'
import VueMDCDrawerItem from './mdc-drawer-item.vue'
import VueMDCPermanentDrawer from './mdc-permanent-drawer.vue'
import VueMDCPersistentDrawer from './mdc-persistent-drawer.vue'
import VueMDCTemporaryDrawer from './mdc-temporary-drawer.vue'


describe(__dirname, () => {
  const localVue = createLocalVue()
  localVue.use(plugin)
  const spec = mount(Spec, localVue)

  describe('VueMDCDrawer', () => {
    const drawer = spec.find(VueMDCDrawer)
    checkValidMdcAdapter(drawer.vm)
  })

  describe('VueMDCPermanentDrawer', () => {
    const drawer = spec.find(VueMDCPermanentDrawer)
    checkValidMdcAdapter(drawer.vm)

    describe('VueMDCDrawerHeader', () => {
      const header = drawer.find(VueMDCDrawerHeader)
      checkValidMdcAdapter(header.vm)
    })

    describe('VueMDCDrawerList', () => {
      const header = drawer.find(VueMDCDrawerList)
      checkValidMdcAdapter(header.vm)
    })

    describe('VueMDCDrawerItem', () => {
      const header = drawer.find(VueMDCDrawerItem)
      checkValidMdcAdapter(header.vm)
    })

  })

  describe('VueMDCPersistentDrawer', () => {
    const drawer = spec.find(VueMDCPersistentDrawer)
    checkValidMdcAdapter(drawer.vm)

    describe('VueMDCDrawerHeader', () => {
      const header = drawer.find(VueMDCDrawerHeader)
      checkValidMdcAdapter(header.vm)
    })

    describe('VueMDCDrawerList', () => {
      const header = drawer.find(VueMDCDrawerList)
      checkValidMdcAdapter(header.vm)
    })

    describe('VueMDCDrawerItem', () => {
      const header = drawer.find(VueMDCDrawerItem)
      checkValidMdcAdapter(header.vm)
    })

  })

  describe('VueMDCTemporaryDrawer', () => {
    const drawer = spec.find(VueMDCTemporaryDrawer)
    checkValidMdcAdapter(drawer.vm)

    describe('VueMDCDrawerHeader', () => {
      const header = drawer.find(VueMDCDrawerHeader)
      checkValidMdcAdapter(header.vm)
    })

    describe('VueMDCDrawerList', () => {
      const header = drawer.find(VueMDCDrawerList)
      checkValidMdcAdapter(header.vm)
    })

    describe('VueMDCDrawerItem', () => {
      const header = drawer.find(VueMDCDrawerItem)
      checkValidMdcAdapter(header.vm)
    })

  })

})
