fs = require('fs-extra-promise');

fs.readFileAsync('./toto.txt', 'utf-8')
.then( 
  (res) => {
    console.log(res);
  }
)
