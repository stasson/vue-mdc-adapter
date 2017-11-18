export default function (components) { 
  return {
    install: (vm) => {
      for (let key in components) {
        let component  = components[key]
        let name = component.name
        vm.component(name, component)
      }
    },
    components 
  } 
}
