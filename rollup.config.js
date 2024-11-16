import vue from '@vitejs/plugin-vue';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';  // Import the PostCSS plugin
import typescript from 'rollup-plugin-typescript2';  // Add TypeScript plugin

export default {
  input: 'src/index.js', // Entry point of your components
  output: [
    {
      file: 'dist/vueframe.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/vueframe.esm.js',
      format: 'esm',
      exports: 'named',
    },
    {
      file: 'dist/vueframe.d.ts',  // Output for TypeScript declaration
      format: 'esm',  // It can be ESM format for .d.ts
      exports: 'named',
    },
  ],
  plugins: [
    vue(), // This processes .vue files
    postcss(), // This handles the styles in .vue files
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    terser(), // Minify the output
    typescript({
      tsconfig: './tsconfig.json',  // Reference your tsconfig.json file
      useTsconfigDeclarationDir: true,  // Makes sure the .d.ts file is placed correctly
    }),
  ],
};
