fs = require('fs')
Promise = require 'bluebird'

openIt = (fileName) ->
  new Promise  (resolve, reject) ->
    fs.open fileName, 'w', (err, res) ->
      if (err) then reject(err)
      resolve(res)
    

files = process.argv[2..]

compteur = 0
files.forEach (elem) ->
  compteur++
  fileName = 'tmp/' + elem + '.json'
  openIt(fileName)
  .then (file) ->
    console.log '-> fichier ouvert' + fileName + '=' + compteur
