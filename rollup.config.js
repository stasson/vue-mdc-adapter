import os from 'os'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import uglify from 'rollup-plugin-uglify'
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import csso from 'postcss-csso';
import { minify } from 'uglify-es'
import pkg from './package.json';
import replace from 'rollup-plugin-replace'

const PLUGINS = [
  'button',
  'card',
  'checkbox',
  'dialog',
  'drawer',
  'elevation',
  'fab',
  'grid-list',
  'icon-toggle',
  'icon',
  'layout-app',
  'layout-grid',
  'linear-progress',
  'list',
  'menu',
  'radio',
  'ripple',
  'select',
  'slider',
  'snackbar',
  'switch',
  'tabs',
  'textfield',
  'theme',
  'toolbar',
  'typography',
]

const BANNER = `/**
* @module vue-mdc-adapter{{module}} {{version}}
* @exports {{name}}
* @copyright (c) 2017-present, Sebastien Tasson
* @license https://opensource.org/licenses/MIT
* @implements {{dependencies}}
* @requires {{peerDependencies}}
* @see https://github.com/stasson/vue-mdc-adapter
*/
`
  .replace('{{version}}', pkg.version)
  .replace('{{dependencies}}', JSON.stringify(pkg.dependencies))
  .replace('{{peerDependencies}}', JSON.stringify(pkg.peerDependencies))


const babelConfig = {
  'compact': false,
  'babelrc': false,
  'presets': [ 
    [
      // env preset https://github.com/babel/babel-preset-env
      'env', 
      // let rollup take care of modules 
      { 'modules': false } 
    ]
  ],
  'plugins': [
    "transform-object-assign",
    "transform-object-rest-spread",
    // let rollup bundle helpers once
    // see https://github.com/rollup/rollup-plugin-babel#helpers
    'external-helpers'  
  ]
}

const capitalize = (str) => {
  return str
    .replace(/\b(\w)/g, function (_,x) {
          return x.toUpperCase();
    })
    .replace(/[_.-]/g,'')
}

function createUmdConfig(module, env, extract) {
  
  const isPlugin = PLUGINS.includes(module) 
  const isProduction = env === `production`
  const isDevelopment = env === `development`
  const dist = isPlugin ? `dist/${module}/${module}` : 'dist/' + module
  const name = isPlugin ? 'VueMDC' + capitalize(module)  : 'VueMDCAdapter'
  const input = 'components/' + ( isPlugin ? module + '/' : '')  + 'entry.js' 
  
  const banner = BANNER
  .replace('{{module}}', isPlugin ? module : '')
  .replace('{{name}}', name)
  
  const sassConfig = {
    include: [ '**/*.css', '**/*.scss' ],
    options: {includePaths: ['node_modules']},
    processor: css => postcss((isDevelopment
                        ? [autoprefixer()]
                        : [autoprefixer(), csso()]))
                      .process(css)
                      .then(result => result.css)
  }

  const output = {
    file: dist + (isDevelopment ? `.js` : `.min.js`),
    format: 'umd',
    sourcemap: isDevelopment ? 'inline' : true,
    name, 
    banner
  }
  

  if (extract) {
    if (isProduction) {
      sassConfig.output = dist + '.min.css'
    } else {
      sassConfig.output = dist + '.css'
    }
  } else {
    sassConfig.insert = true
  }

  const config = {
    input,
    output,
    env,
    external: ['vue'],
    plugins: [
      vue ({ autoStyles: false, styleToImports: true }),
      resolve({ jsnext: true, main: true, browser: true }),
      sass(sassConfig),
      babel(babelConfig),
      commonjs(),
      replace({
        __VERSION__: pkg.version
      }),
    ],
    onwarn
  }

  if (isProduction) {
    config.plugins.push(uglify({
      output: {
        comments: function(node, comment) {
            var text = comment.value;
            var type = comment.type;
            if (type == "comment2") {
                // multiline comment
                return /@preserve|@license|@cc_on/i.test(text);
            }
        }
      }
    }, minify))
  }
  return config
}

function createEsmConfig(module) {
  
  const isModule = PLUGINS.includes(module) 
  const dist = isModule ? `dist/${module}/index.js` : 'dist/index.js'
  const input = 'components/' + ( isModule ? module + '/' : '')  + 'index.js' 
  const banner = BANNER
  .replace('{{module}}', isModule ? module : '')
  .replace('{{name}}', 'default')

  let external = []
  let paths = {}
  let outro = ''

  if (isModule) {
    PLUGINS.forEach((folder) => {
      if (folder != module) {
        let id = path.resolve('.', 'components', folder, 'index.js') 
        external.push(id)
        paths[id] = `../${folder}`
      }
    })
  } else {
    PLUGINS.forEach((folder) => {
      if (folder != module) {
        let id = path.resolve('.', 'components', folder, 'index.js') 
        external.push(id)
        paths[id] = `./${folder}`
      }
    })

    PLUGINS.forEach((folder) => {
      let exportName = 'VueMDC' + capitalize(folder)
      outro +=`export { ${exportName} }` + os.EOL
    })

    outro += os.EOL
    PLUGINS.forEach((folder) => {
      outro +=`export * from './${folder}'` + os.EOL
    })
  }


  const output = { 
    file: dist, 
    format: 'es',
    sourcemap: true,
    banner,paths,outro,
  }

  const config = {
    input,
    output,
    external,
    plugins: [
      vue ({ autoStyles: false, styleToImports: true }),
      resolve({ jsnext: true, main: true, browser: true }),
      babel(babelConfig),
      commonjs(),
      replace({
        __VERSION__: pkg.version
      }),
    ],
    onwarn
  }
  return config
}

const configs = []

// ESM
PLUGINS.forEach((module) => {
  configs.push(createEsmConfig(module))
})
configs.push(createEsmConfig('index'))

// UMD
PLUGINS.forEach((module) => {
  configs.push(createUmdConfig(module,'development',true))
  configs.push(createUmdConfig(module,'production', true))
})

configs.push(createUmdConfig('vue-mdc-adapter','development',true),)
configs.push(createUmdConfig('vue-mdc-adapter','production',true))
configs.push(createUmdConfig('vue-mdc-adapter.umd','development',false))
configs.push(createUmdConfig('vue-mdc-adapter.umd','production',false))

function onwarn (warning) {

  // skip certain warnings
  if (warning.code == 'NON_EXISTENT_EXPORT') {
    if (warning.name == 'MDCIconToggleAdapter') return;
  } 

  // console.warn everything else
  console.log(warning);
  console.warn(warning.message);
}

export default configs