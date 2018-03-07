fs = require('fs');

http = require('http');
fs.readFile('/tmp/toto.txt', 'utf8',
  function(err, data) {
     http.get(data, function(res) {
       res.setEncoding('utf8');
       res.on('data', function(chunk) {
         console.log(chunk);
       });
     });
  }
);

//
// request = require('request');
// fs.readFile('/tmp/toto.txt', 'utf8',
//   function(err, data) {
//      request(data, function(err, res) {
//        console.log(res);
//      });
//   }
// );
