function loadcss (filename) {
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
  document.head.appendChild(fileref)
}

function loadjs (filename) {
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
  document.head.appendChild(fileref)
}

loadcss("./dist/vue-mdc-adapter.min.css")
loadjs("./dist/vue-mdc-adapter.min.js")
