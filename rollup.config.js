import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import terser from '@rollup/plugin-terser'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/vueframe.min.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/vueframe.min.cjs'
      }
    ],
    plugins: [
      vue({
        preprocessStyles: true,
        template: {
          isProduction: true
        }
      }),
      postcss(),
      peerDepsExternal(),
      terser()
    ]
  }
]