import './polyfills.js'
import {mount} from 'vue-test-utils'

export * from 'vue-test-utils'

export function pluginSanityCheck(name, plugin, options) {
  describe(name, () => {
    for (let property in plugin) {
      if (property.startsWith('mdc')) {

        const wrapper = mount(plugin[property],
          ((options && options[property]) || undefined) )

        describe(property, () => {

          test('is a Vue instance', () => {
            expect(wrapper.isVueInstance()).toBeTruthy()
          })

          checkValidMdcAdapter(wrapper.vm)
        })
      }
    }
  })
}

export function checkValidMdcAdapter(vm) {

  checkValidOptions(vm.$options)

  vm.ripple && checkValidFoundation(vm.ripple)

  vm.foundation && checkValidFoundation(vm.foundation)
}

export function checkValidOptions(options) {

    test('has a valid name property', () => {
      expect(options.name).toMatch(/^mdc-/);
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
