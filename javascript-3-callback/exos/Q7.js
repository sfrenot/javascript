fs = require('fs');

fs.readFile('./toto.txt', 'utf8', function(err, res) { console.log(res); });
