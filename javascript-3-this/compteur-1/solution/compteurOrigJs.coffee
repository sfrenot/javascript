Counter = () ->
  this.count = 0
  this.tick = () ->
    this.count++
    console.log(this.count)
  return

myCounter = new Counter()

setTimeout(myCounter.tick.bind(myCounter),0)
setTimeout(myCounter.tick.bind(myCounter),0)
setTimeout(myCounter.tick.bind(myCounter),0)
setTimeout(myCounter.tick.bind(myCounter),0)
setTimeout(myCounter.tick.bind(myCounter),0)
setTimeout(myCounter.tick.bind(myCounter),0)

