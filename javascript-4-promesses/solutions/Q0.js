require('fs-extra-promise');
.readFileAsync('./toto.txt', 'utf-8')
.then( (res) => { console.log(res); })

//

require('fs');
.readFile('./toto.txt', 'utf8', function(err, res) {
  console.log(res);
})

