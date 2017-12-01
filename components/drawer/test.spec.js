import { mount, createLocalVue, checkValidMdcAdapter } from '../unit-test'
import plugin from './index.js';
import Spec from './test.spec.vue';
import mdcDrawer from './mdc-drawer.vue'
import mdcDrawerHeader from './mdc-drawer-header.vue'
import mdcDrawerList from './mdc-drawer-list.vue'
import mdcDrawerItem from './mdc-drawer-item.vue'
import mdcPermanentDrawer from './mdc-permanent-drawer.vue'
import mdcPersistentDrawer from './mdc-persistent-drawer.vue'
import mdcTemporaryDrawer from './mdc-temporary-drawer.vue'


describe(__dirname, () => {
  const localVue = createLocalVue()
  localVue.use(plugin)
  const spec = mount(Spec, {localVue})

  describe('mdcDrawer', () => {
    const drawer = spec.find(mdcDrawer)
    checkValidMdcAdapter(drawer.vm)
  })

  describe('mdcPermanentDrawer', () => {
    const drawer = spec.find(mdcPermanentDrawer)
    checkValidMdcAdapter(drawer.vm)

    describe('mdcDrawerHeader', () => {
      const header = drawer.find(mdcDrawerHeader)
      checkValidMdcAdapter(header.vm)
    })

    describe('mdcDrawerList', () => {
      const header = drawer.find(mdcDrawerList)
      checkValidMdcAdapter(header.vm)
    })

    describe('mdcDrawerItem', () => {
      const header = drawer.find(mdcDrawerItem)
      checkValidMdcAdapter(header.vm)
    })

  })

  describe('mdcPersistentDrawer', () => {
    const drawer = spec.find(mdcPersistentDrawer)
    checkValidMdcAdapter(drawer.vm)

    describe('mdcDrawerHeader', () => {
      const header = drawer.find(mdcDrawerHeader)
      checkValidMdcAdapter(header.vm)
    })

    describe('mdcDrawerList', () => {
      const header = drawer.find(mdcDrawerList)
      checkValidMdcAdapter(header.vm)
    })

    describe('mdcDrawerItem', () => {
      const header = drawer.find(mdcDrawerItem)
      checkValidMdcAdapter(header.vm)
    })

  })

  describe('mdcTemporaryDrawer', () => {
    const drawer = spec.find(mdcTemporaryDrawer)
    checkValidMdcAdapter(drawer.vm)

    describe('mdcDrawerHeader', () => {
      const header = drawer.find(mdcDrawerHeader)
      checkValidMdcAdapter(header.vm)
    })

    describe('mdcDrawerList', () => {
      const header = drawer.find(mdcDrawerList)
      checkValidMdcAdapter(header.vm)
    })

    describe('mdcDrawerItem', () => {
      const header = drawer.find(mdcDrawerItem)
      checkValidMdcAdapter(header.vm)
    })

  })

  describe('drawer-type', () => {
    
    test('drawer-type is reactive', () => {
      const spec = mount(mdcDrawer)

      spec.setProps({drawerType: 'temporary'})
      expect(spec.vm.type).toBe('mdc-temporary-drawer')
      expect(spec.vm.isTemporary).toBeTruthy()

      spec.setProps({drawerType: 'persistent'})
      expect(spec.vm.type).toBe('mdc-persistent-drawer')
      expect(spec.vm.isPersistent).toBeTruthy()

      spec.setProps({drawerType: 'permanent'})
      expect(spec.vm.type).toBe('mdc-permanent-drawer')
      expect(spec.vm.isPermanent).toBeTruthy()

      spec.setProps({temporary: true, drawerType: 'permanent'})
      expect(spec.vm.type).toBe('mdc-temporary-drawer')
      expect(spec.vm.isTemporary).toBeTruthy()

      spec.setProps({temporary: false, persistent: true})
      expect(spec.vm.type).toBe('mdc-persistent-drawer')
      expect(spec.vm.isPersistent).toBeTruthy()

      spec.setProps({persistent: false, permanent: true, drawerType:'temporary'})
      expect(spec.vm.type).toBe('mdc-permanent-drawer')
      expect(spec.vm.isPermanent).toBeTruthy()


    })

    test('temporary', () => {
      const spec = mount(mdcDrawer, {
        propsData: { temporary:true }
      })
      expect(spec.vm.type).toBe('mdc-temporary-drawer')
      expect(spec.vm.isTemporary).toBeTruthy()
    })

  })



})
