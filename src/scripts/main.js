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


// const printTarget = document.getElementsByClassName('debug__output')[0];
//
// printTarget.innerText = `This is the Answer: ${foo}\n\n`;
var fetch = null;
var fs = null;
var lookup = null;
const url = 'http://donnees.ville.montreal.qc.ca/dataset/4604afb7-a7c4-4626-a3ca-e136158133f2/resource/e202c0f4-d65d-4d5f-893d-dc392d83298d/download/piscines.geojson'
if ((typeof process !== 'undefined') && (process.release.name === 'node')){
  fetch = require('node-fetch')
  fs = require ('fs')
  lookup = require('mime-types').lookup

  //var file = fs.readFileSync('/tmp/file.txt');
  var filename = '/home/allan/Anne/dsc_5500jpg_13526313374_o.jpg';
  fs.exists(filename,  (exists) => {
    if (exists){
      // fs.stat(filename, (err, stats) => {
      //   fs.open(filename , 'r', (error, fd) => {
      //     var  buffer = new Buffer(stats.size);
      //
      //     fs.read(fd, buffer, 0, buffer.length, null, (error3, bytesRead, buffer) => {
      //       //console.log(buffer.toString('utf8', 0, buffer.length));
      //       fetch ('http://test.toto.com', {
      //         method: 'post',
      //
      //       })
      //     })
      //   })
      // })
    var data = fs.readFileSync(filename);

    var crlf = "\r\n",
        boundaryKey = Math.random().toString(16),
        boundary = `--${boundaryKey}`,
        delimeter = `${crlf}--${boundary}`,
        headers = [
          `Content-Disposition: form-data; name="file"; filename="${filename}"${crlf}`,
          `Content-Type: ${lookup(filename)}` + crlf,
        ],
        closeDelimeter = `${delimeter}--`,
        multipartBody;


    multipartBody = Buffer.concat([
        new Buffer(delimeter + crlf + headers.join('') + crlf),
        data,
        new Buffer(closeDelimeter)]
    );

    console.log(headers)

    // let request = new Request(url , {
    //   headers: new Headers({
    //     'Content-Type': 'multipart/form-data; boundary=' + boundary,
    //     'Content-Length': multipartBody.length,
    //   })
    // })
    //
    // fetch(request, {
    //   method: 'post',
    //   body: multipartBody
    // })

    // req.setHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
    // req.setHeader('Content-Length', multipartBody.length);
    //
    // req.write(multipartBody);
    // req.end();
    }
  })
  //
  // fs.open('/tmp/file.txt', 'r', (error, fd) => {
  //   console.log(fs.fstatSync(fd))
  //   fs.close(fd);
  // })

  //console.log(file);

  // fetch('http://test.toto.com', {
  //   method: 'post',
  // })


} else {
  fetch = window.fetch;
}

// fetch(url, {
//   method: 'get'
// })
// .then((response) => {
//   if (response.ok){
//     return response.json();
//   }
//   else {
//     throw new Exception.SendSecureException(response.status, response.statusText);
//   }
// })
// .then(e => console.log(e));
