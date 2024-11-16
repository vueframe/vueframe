import vue from '@vitejs/plugin-vue';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js', // Entry point of your components
  output: [
    {
      file: 'dist/vueframe.cjs.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'dist/vueframe.esm.js',
      format: 'esm',
      exports: 'named'
    }
  ],
  plugins: [
    vue(), // This processes .vue files
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    terser() // Minify the output
  ]
};
