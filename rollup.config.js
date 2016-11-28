import babel  from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/scripts/main.js',
  sourceMap: 'inline',
  plugins: [
    resolve ({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint({

    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  targets: [
    { dest: 'build/bundle.cjs.js', format: 'cjs' },
    { dest: 'build/bundle.iife.js', format: 'iife', moduleName: 'test' }
  ]
};
