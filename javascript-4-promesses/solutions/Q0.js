fs = require('fs-extra-promise')

fs
.readFileAsync('./toto.txt', 'utf-8')
.then( (res) => { console.log(res); })

//

fs = require('fs')

fs
.readFile('./toto.txt', 'utf8', function(err, res) {
  console.log(res);
})

