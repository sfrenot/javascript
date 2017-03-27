fs = require('fs');

fs.readFile('/tmp/toto.txt', 'utf8', function(err, data) { console.log("->", data)})
