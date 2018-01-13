export function extractIconProp (iconProp) {
    if (typeof iconProp === 'string') {
      return {
        classes: { 'material-icons' : true},
        content: iconProp 
      }
    }
    else if (iconProp instanceof Array){
      return { 
        classes: iconProp.reduce(
          (result, value) => Object.assign(result,{[value]:true}),
          {}),
        }
    }
    else if (typeof iconProp === 'object'){
      return { 
        classes: iconProp.className.split(' ').reduce(
          (result, value) => Object.assign(result,{[value]:true}),
          {}),
        content: iconProp.textContent 
      }
    }
  }
