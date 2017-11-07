import {capitalize} from './utils'

function link(id, name, title) {
  name = name || capitalize(id)
  title = title || name
  return {
    id, title, name,
    to: { name: 'component', params: {id} },
  }
}

export default [
  link('button'),
  link('card'),
  link('checkbox'),
  link('dialog'),
  link('drawer'),
  link('fab', 'FAB', 'Floating Action Button'),
  link('grid-list'),
  link('icon'),
  link('icon-toggle'),
  link('layout-app', 'App Layout'),
  link('layout-grid', 'Grid Layout'),
  link('linear-progress'),
  link('list'),
  link('menu'),
  link('radio'),
  link('select'),
  link('slider'),
  link('snackbar'),
  link('switch'),
  link('tabs'),
  link('textfield'),
  link('toolbar'),
  link('typography'),
]
