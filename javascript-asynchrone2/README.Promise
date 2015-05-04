_ = require 'lodash'
Promise = require 'bluebird'
shared = require '../shared'
cheerio = require('cheerio')
request = Promise.promisify require('request')
url = require 'url'
querystring = require 'querystring'

PAGE_SIZE = 100

postRequest = (aRequest) ->
  request
    url: 'http://ops.epo.org/rest-services/published-data/search/abstract?q=abstract%3Delectronic and voting'
    headers:
      'Accept': 'application/json'
    method: 'GET'
  .spread (res, body) ->
    aRequest.lastChecked = new Date()
    new Promise (resolve, reject) ->
      aRequest.save (err) ->
        if err
          reject err
        else
          resolve JSON.parse(body)["ops:world-patent-data"]["ops:biblio-search"]["ops:search-result"]["exchange-documents"]

getDocDescription = (brevet, log) ->
  #request brevet.content.url
  #.spread (res, body) ->
  #  unless res.statusCode is 200
  #    log.error "res.statusCode isnt 200", doc: doc, statusCode: res.statusCode, body: body
  #  $ = cheerio.load(body or '')
  #  res = $('#description > p').map () ->
  #    $(@).text()
  #  brevet.content.content = res.get().join '\n'
  #  console.log brevet.content.url, '-->', brevet.content.content
  #  brevet
  console.log "-> tick for document #{brevet.content.url}"

  
getAllBrevets = (brevets) ->
  getAllBrevets_r = (idx) ->
    if idx is 0
      getDocDescription(brevets[idx])
    else
      Promise.resolve getDocDescription(brevets[--idx])
      .delay(2000)
      .then -> getAllBrevets_r(idx)
   
  getAllBrevets_r(brevets.length)


getDocsFromEspaceNet = (aRequest, log) ->
  console.log 'Tick'
  postRequest aRequest
  .then buildDocs
  #.then getAllBrevets
  #.then (brevets) ->
    #Promise.all brevets.map (doc) -> fonction(doc)
  .each (doc) ->
    Promise.resolve getDocDescription(doc, log)
    .delay(2000)
  .then (res) ->
    console.log '->', res, '<-'
    docs: res
    request: aRequest

buildDocs = (exchangeDocuments) ->
  brevets = []
  exchangeDocuments.map (elem) ->
    ccCode = elem['exchange-document']['@country']
    id = elem['exchange-document']['@doc-number']
    brevets.push
      content:
        url: "http://worldwide.espacenet.com/publicationDetails/description?CC=#{ccCode}&NR=#{id}"
        id: "#{ccCode}#{id}"
  brevets

module.exports = (agent) ->
  shared.requestAgentTick agent, require('./document'), getDocsFromEspaceNet, 'epodoc'
