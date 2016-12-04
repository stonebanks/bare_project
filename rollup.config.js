import babel  from 'rollup-plugin-babel';
//import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

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
    //eslint(),
    babel({
      exclude: 'node_modules/**'
    }),
    replace ({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
  targets: [
    { dest: 'build/bundle.cjs.js', format: 'cjs' },
    { dest: 'build/bundle.iife.js', format: 'iife', moduleName: 'test' }
  ]
};
