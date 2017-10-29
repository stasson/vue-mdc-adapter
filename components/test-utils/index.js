import {mount} from 'vue-test-utils'

export * from 'vue-test-utils'

export function pluginSanityCheck(name, plugin, options) {
  describe(name, () => {
    for (let property in plugin) {
      if (property.startsWith('VueMDC')) {
        const componentOptions = (options && options[property]) || undefined
        const component = mount(plugin[property], componentOptions)
        describe(property, () => {
          isValidVueComponent(component)
          isValidMdcAdapter(component)
        })
      }
    }
  })
}

export function isValidVueComponent(wrapper) {
  describe('is a valid Vue Component', () => {

    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })

    test('has a vald name property', () => {
      expect(wrapper.vm.$options).toHaveProperty('name')
      // expect(wrapper.vm.$options.name).toMatch(/^mdc-/);
    })

    let options = wrapper.vm.$options

    options.data && test('data is a function', () => {
      expect(options.data).toBeInstanceOf(Function)
    })

    options.provide && test('provide is a function', () => {
      expect(options.provide).toBeInstanceOf(Function)
    })

  })
}

export function isValidMdcAdapter(wrapper) {
  if (wrapper.vm.ripple) {
    checkFoundationIsValid(wrapper.vm.ripple)
  }
  if (wrapper.vm.foundation) {
    checkFoundationIsValid(wrapper.vm.foundation)
  }
}

export function checkFoundationIsValid(foundation) {

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
