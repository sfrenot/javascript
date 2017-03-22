var rp = require('request-promise');

rp('http://www.insa-lyon.fr')
  .then(function (htmlString) {
  	console.log('-->', htmlString);
    res = htmlString.match(/https{0,1}:\/\/([^'"]*)["']/g);
    console.log("===>", res);
  })
