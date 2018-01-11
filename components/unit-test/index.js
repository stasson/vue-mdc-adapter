import './polyfills.js'
import {mount} from '@vue/test-utils'

export * from '@vue/test-utils'

export function pluginSanityCheck(pluginName, plugin, options) {
  describe(pluginName, () => {

    let components = plugin.components 
    test('is a valid adapter plugin', () => {
      expect(plugin.install).toBeInstanceOf(Function);
      expect(components).toBeInstanceOf(Object);
    })

    for (let key in components) {

      describe(key, () => {

        let component = components[key]
        let name = component.name

        test('has a valid name', () =>{
          expect(name).not.toBe(key)
          expect(name.toLowerCase().replace(/-/g,'')).toBe(key.toLocaleLowerCase())
        })

        const wrapper = mount(component,
          ((options && options[key]) || undefined) )

        test('is a Vue instance', () => {
          expect(wrapper.isVueInstance()).toBeTruthy()
        })

        checkValidMdcAdapter(wrapper.vm)
      })
    }
  })
}

export function checkValidMdcAdapter(vm) {

  checkValidOptions(vm.$options)

  checkValidClass(vm, vm.$options.name)
  
  vm.ripple && checkValidFoundation(vm.ripple)

  vm.foundation && checkValidFoundation(vm.foundation)

  vm.formField && checkValidFoundation(vm.formField)
}

export function checkValidOptions(options) {

    test('name follows convention', () => {
      expect(options.name).toMatch(/^mdc-[a-z-]+$/);
    })

    options.data &&
    test('data is a function', () => {
      expect(options.data).toBeInstanceOf(Function)
    })

    options.provide &&
    test('provide is a function', () => {
      expect(options.provide).toBeInstanceOf(Function)
    })

}

export function checkValidClass(vm, name) {
  
  test('has a valid class', () => {

    let hasVallidClass = vm.$el.classList.contains(name) ||
      ( vm.$el.classList.contains(name + '-wrapper') && 
        ( vm.$el.querySelector('.'+ name) !== null ))

    expect(hasVallidClass).toBeTruthy()
    })
}
  

export function checkValidFoundation(foundation) {

  let adapter = foundation.adapter_
  let constructor = Object.getPrototypeOf(foundation).constructor
  let defaults = constructor.defaultAdapter


  describe(`has a valid ${constructor.name}`, () => {

    test('has a valid foundation member', () => {
      expect(adapter).toBeDefined()
      expect(defaults).toBeDefined()
    })

    for (let method in defaults) {
      let api = defaults[method]
      let instance = adapter[method]

      test(`.${method} is implemented`, () => {
        expect(instance).toBeDefined()
        expect(instance.toString()).not.toBe(api.toString())
      })

      test(`.${method} has valid arguments`, () => {
        expect(instance.arguments).toEqual(api.arguments)
      })

    }

    for (let method in adapter) {
      let api = defaults[method]

      test(`.${method} is required`, () => {
        expect(api).toBeDefined()
      })
    }

  })
}
