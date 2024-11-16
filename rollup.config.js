import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/vueframe.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/vueframe.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    vue(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    terser()
  ],
  external: ['vue']
}