var Counter = function () {
  this.count = 0;
  this.tick = function () {
    this.count++;
    console.log(this.count);
  }
};

var myCounter = new Counter();
myCounter.tick()
myCounter.tick()
myCounter.tick()
myCounter.tick()
myCounter.tick()
myCounter.tick()
myCounter.tick()
