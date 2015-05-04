# Système de log
On veut réecrire le système de log suivant en coffeescript.

````
var express = require('express');

var Logger = function (level) {
  this.level = level;
  this.log = function (message) {
    if (message === undefined) {
      message = "...";
    }
    console.log('[' + this.level + '] ' + message);
  };
};

debug_logger = new Logger('debug');
request_logger = new Logger('request');

debug_logger.log('Starting the application');

var app = express();

app.get('/', function (req, res) {
  request_logger.log('Request received on /')
  res.send('Hello World!');
});

var server = app.listen(3333, function () {
  var host = server.address().address;
  var port = server.address().port;
  debug_logger.log('Application started on port ' + port);
});
````

# Logger la durée du traitement de get
On veut enregistrer ou afficher la durée du traitement de la fonction get

# Refs
Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014
https://www.youtube.com/watch?v=8aGhZQkoFbQ
