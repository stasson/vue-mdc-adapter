import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue2'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import filesize from 'rollup-plugin-filesize'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import csso from 'postcss-csso';

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

const config = {
  input: 'components/index.js',
  output: {
    file: (isDevelopment 
      ? 'dist/vue-mdc-adapter.js' 
      : 'dist/vue-mdc-adapter.min.js'),
    format: 'umd',
    name: 'VueMDCAdapter'
  },
  external: ['vue'],
  sourcemap: isDevelopment,
  plugins: [
    vue (),
    resolve({ jsnext: true, main: true, browser: true }),
    postcss((isProduction 
      ? {
        plugins: [autoprefixer(), csso()],
        extract: 'dist/vue-mdc-adapter.min.css',
      } 
      : {
        plugins: [autoprefixer()],
        extract: 'dist/vue-mdc-adapter.css',
      })),
    commonjs (),
    ... ( isProduction
      ? [ 
        uglify({}, minify), 
        filesize() 
      ] 
      : [] ),
    babel({
      presets: [ 
        [
          'es2015', 
          {modules: false} 
        ]
      ],
      babelrc: false,
      plugins: [
        'external-helpers'
      ]
    }),
  ],
  onwarn (warning) {
    // skip certain warnings
    if (warning.code == 'NON_EXISTENT_EXPORT' 
      && warning.name == 'MDCIconToggleAdapter') {
        return;
    } else {
      // console.warn everything else
      console.log(warning);
      console.warn(warning.message);
    }
  }
}

if (isDevelopment) {
  // config.plugins.push(livereload())
  // config.plugins.push(serve({
  //   contentBase: './public/',
  //   port: 8080,
  //   open: true
  // }))
}

export default config
