http = require('http');
http.get('http://www.google.fr', function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log(chunk);
  });
});

request = require('request');
request('http://www.insa-lyon.fr', function(err, res) {
  console.log(res);
});
