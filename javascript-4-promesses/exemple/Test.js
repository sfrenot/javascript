//Promise = require('bluebird');
var rp = require('request-promise');

rp('http://www.insa-lyon.fr')
.then(function (htmlString) {
  res = htmlString.match(/https{0,1}:\/\/([^'"]*)["']/g);
  res.forEach( function(elem) {
    console.log("->", elem);
  })

  /*
  //console.log("===>", res);
  Promise.map(res, function(elem) {
    console.log("-->", elem.substring(0, elem.length-1));
    rp(elem.substring(0, elem.length-1))
    .then(function(resHtml) {
      console.log("==>", resHtml.match(/https{0,1}:\/\/([^'"]*)["']/g));
    })
    .catch(function(err) {})  
  })
   */
})
