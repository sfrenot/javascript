_ = require 'lodash'
Promise = require 'bluebird'
request = require 'request-promise'
sites = require './liste.json'

site = _.find sites, (site) ->
  site.git?

unless site?
  console.error "Crawl Terminé"
  process.exit(1)


site.licences = []
# console.warn "-> #{site.name}"
url = "https://raw.githubusercontent.com/#{site.git.replace("https://github.com/","")}/master/COPYING"
request
  url : url
  method: 'GET'
.then (body) ->
  lines = body.split('\n')
  lines.forEach (line) ->
    # console.warn "--#{line}--"
    if line.trim().startsWith('Copyright')
      licence = line
      .trim()
      .replace(/.*\d{4} /, '')
      .replace(/The/, '')
      .replace(/Developers|developers/, '')
      .trim()
      site.licences.push(licence)

.catch (err) ->
  console.error "Fichier non trouvée #{site.name} #{err}"
.then () ->
  console.log JSON.stringify sites, null, 2
