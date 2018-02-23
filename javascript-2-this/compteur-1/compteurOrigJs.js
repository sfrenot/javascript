var Counter = function () {
  this.count = 0;
  this.tick = function () {
    this.count++;
    console.log(this.count);
  }
};

var myCounter = new Counter();
//setTimeout(myCounter.tick.bind(myCounter), 2000)
setTimeout(myCounter.tick, 2000)

/*myCounter.tick()
myCounter.tick()
myCounter.tick()
myCounter.tick()
myCounter.tick()
myCounter.tick()
myCounter.tick()
*/
