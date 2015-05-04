fs = require('fs')
Promise = require 'bluebird'
Promise.promisifyAll(fs)


files = process.argv[2..]

Promise.map files, (elem) ->
  fileName = 'tmp/' + elem + '.json'
  fs.open(fileName,'r')
  .then (file, err) ->
    console.log '-> fichier ouvert'
