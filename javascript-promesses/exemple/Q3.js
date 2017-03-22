Promise = require('bluebird');

wait = function(time) { 
  a = new Promise(function(resolve, reject) {
    if (time > 3000) {
      reject('erreur');
    } else {
      setTimeout(resolve, time);
    }
  }); 
  return a;
} 

wait(2000)
.then(
  function() {
    wait(4000);
  })
.then(function() {
  console.log('cool');
})
.catch(function(res) { console.log('Erreur', res);})

