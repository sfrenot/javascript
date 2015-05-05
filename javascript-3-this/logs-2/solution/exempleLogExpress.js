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
  request_logger.log('Request received on /');
  res.on('finish',  request_logger.log.bind(request_logger, 'coucou'));
  res.send('Hello World!');
});
 
var server = app.listen(3333, function () {
  var host = server.address().address;
  var port = server.address().port;
  debug_logger.log('Application started on port ' + port);
});
