Counter = () ->
  this.count = 0
  this.tick = () ->
    this.count++
    console.log(this.count)

myCounter = new Counter()
