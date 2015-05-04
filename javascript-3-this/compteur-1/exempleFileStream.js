// $ dd if=/dev/random of=bigfile.txt bs=4k count=1k
 
var Counter = function () {
  this.count = 0;
  this.tick = function () {
    this.count++;
    console.log(this.count);
  }
};
 
var fs = require('fs');
var input = fs.createReadStream('./bigfile.txt');
var output = fs.createWriteStream('./bigfile-copy.txt');
var counter = new Counter();
 
// input.on('data', counter.tick.bind(counter));
input.on('data', counter.tick);
input.pipe(output);
