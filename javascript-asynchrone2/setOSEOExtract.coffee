Promise = require 'bluebird'
mongoose = require 'mongoose'

database = mongoose.createConnection 'mongodb://localhost/jumplyn'
Document = database.model 'Document', require '../core/models/Document'
DocumentFile = Document.discriminator 'DocumentFile', require '../core/models/DocumentFile'

connect = new Promise (resolve, reject) ->
  database.on 'connected', () ->
    console.log 'Connected to the new database "jumplyn"'
    resolve()

connect
.then ->
  Promise.map oseos, (oseo) ->
    DocumentFile
    .update(
      _id: oseo._id
    ,
      $set:
        extract:
          note: parseInt oseo.note
          abstract: oseo.abstract
          extracts:
            marche: oseo.extracts['marché']
            social: oseo.extracts['social']
    )
    .exec()
.catch (err) ->
  console.log 'ERROR'
  console.log err.stack
.then ->
  console.log 'Closing connections.'
  database.close()
