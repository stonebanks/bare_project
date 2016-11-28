// Add a debugger
import debug from 'debug';
import foo from './modules/foo.js';

const log = debug('app:log');

debug.enable('*');

export default () => log(foo);
