class Counter
  constructor: () ->
    @count = 0

  tick: =>
    @count++
    console.log @count

monCompteur = new Counter()

monCompteur.tick()
setTimeout(monCompteur.tick, 0)



