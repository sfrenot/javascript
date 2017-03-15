Promise = require('bluebird');

wait = function(time) { 
  a = new Promise(function(resolve) {
    setTimeout(resolve, time);
  }); 
  return a;
} 

wait(3000).then(function() { console.log('Bonjour');})

