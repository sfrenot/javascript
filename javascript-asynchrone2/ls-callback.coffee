fs = require('fs')

openIt = (fileName, callback) ->
    fs.open fileName, 'w', (err, res) ->
      if (err) then callback(err)
      callback(res)
    

files = process.argv[2..]

compteur = 0
files.forEach (elem) ->
  compteur++
  fileName = 'tmp/' + elem + '.json'
  openIt(fileName, (res) ->
    console.log '-> fichier ouvert ' + fileName + ':' + res + ' = ' + compteur
  )
