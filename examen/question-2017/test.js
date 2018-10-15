fs = require('fs');
fs.readFile('/tmp/toto', (err, res) => {
  console.log("->", err);
  console.log("-->", res);
  });
