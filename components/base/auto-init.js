export function autoInit (plugin) {
  // Auto-install
  let _Vue = null
  if (typeof window !== 'undefined') {
    _Vue = window.Vue
  } else if (typeof global !== 'undefined') {
    /*global global*/
    _Vue = global.Vue
  }
  if (_Vue) {
    _Vue.use(plugin)
  }
}
  