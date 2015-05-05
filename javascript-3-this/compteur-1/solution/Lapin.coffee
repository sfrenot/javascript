class Lapin
  constructor: (@couleur) ->

  parle: (phrase) ->
    console.log "Le Lapin ", @couleur, " dit ", phrase, " ."

lapin = new Lapin "blanc"
lapin.parle("Bonjour #{new Date()}")

