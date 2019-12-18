fs = require('fs');
request = require('request');

fs.readFile('./web.txt', 'utf8', function(err, res) {
  if (err) {
    console.trace()
    console.log(err.stack);
    return
  }
  request.get(res, function(err, res) {
    pages = res.body.match(/https{0,1}:\/\/([^'"]*)/g);
    pages.forEach(function (elem) {
      // console.log('->', elem.substring(0,elem.length-1));
      request.get(elem.substring(0,elem.length-1), function(err, res) {
        // console.log('-->', res.body);
        if (res) {
          pages = res.body.match(/https{0,1}:\/\/([^'"]*)["']/g);
          if (pages) {
            pages.forEach(function(elem) {
              // console.log('->', elem)
            })
          }
        }
      })
    })
  })
})
