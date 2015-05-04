'use strict'
Promise = require 'bluebird'
_ = require 'lodash'
mongoose = require 'mongoose'
cheerio = require 'cheerio'
config = require __dirname + '/../core/config'

database = mongoose.createConnection 'mongodb://localhost/jumplyn'

unless process.argv[2]?
  throw new Error 'Préciser en argument le chemin de fichier vers la liste des descriptions des OSEOS'
oseos = require process.argv[2]

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
          structure: oseo.structure
          extracts:
            marche: oseo.extracts['marché']
            technique: oseo.extracts['technique']
            social: oseo.extracts['social']
    )
    .exec()
.catch (err) ->
  console.log 'ERROR'
  console.log err.stack
.then ->
  console.log 'Closing connections.'
  database.close()