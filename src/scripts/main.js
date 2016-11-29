// Add a debugger
import debug from 'debug';
import foo from './modules/foo.js';

const log = debug('app:log');

if (ENV !== 'production'){
  debug.enable('*');
  log('Hello world');
}
else {
  debug.disable();
}


const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `This is the Answer: ${foo}\n\n`;
