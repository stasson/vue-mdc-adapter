export default function (components) { 

  let map = Object.values(components).reduce( (result, component) => {
    return Object.assign(result, { [component.name]: component })
  }, {})

  return {
    install: (vm) => {
      for (let key in map) {
        vm.component(key, map[key])
      }
    },
    components: map
  } 
}
