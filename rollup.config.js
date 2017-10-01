import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import uglify from 'rollup-plugin-uglify'
import sass from 'rollup-plugin-sass';
import filesize from 'rollup-plugin-filesize'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import csso from 'postcss-csso';
import { minify } from 'uglify-es'

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

const libPath = (isDevelopment 
      ? 'dist/vue-mdc-adapter.js' 
      : 'dist/vue-mdc-adapter.min.js')

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
    // let rollup bundle helpers once
    // see https://github.com/rollup/rollup-plugin-babel#helpers
    'external-helpers'  
  ]
}

  
const sassConfig = {
  include: [ '**/*.css', '**/*.scss' ],
  options: {includePaths: ['node_modules']},
  processor: css => postcss((isDevelopment
                      ? [autoprefixer()]
                      : [autoprefixer(), csso()]))
                    .process(css)
                    .then(result => result.css)
}

if (isProduction) {
  sassConfig.output = `dist/vue-mdc-adapter.min.css`
} else {
  sassConfig.insert = true
}

const config = {
  input: 'components/entry.js',
  output: {
    file: libPath,
    format: 'umd',
    name: 'VueMDCAdapter'
  },
  external: ['vue'],
  plugins: [
    vue ({ autoStyles: false, styleToImports: true }),
    resolve({ jsnext: true, main: true, browser: true }),
    sass(sassConfig),
    babel(babelConfig),
    commonjs (),
  ],
  sourcemap: isDevelopment ? 'inline' : true,
  onwarn
}

if (isProduction) {
  config.plugins.push(uglify({}, minify))
  config.plugins.push(filesize())
}

export default config


function onwarn (warning) {

  // skip certain warnings
  if (warning.code == 'NON_EXISTENT_EXPORT') {
    if (warning.name == 'MDCIconToggleAdapter') return;
  } 

  // console.warn everything else
  console.log(warning);
  console.warn(warning.message);
}
