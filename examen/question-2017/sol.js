rp = require('request-promise');
write = require('fs-writefile-promise');

rp('http://www.insa-lyon.fr')
.then((res) => {
  write('/tmp/toto', res)
})
.catch((err) => { console.log(err) })
