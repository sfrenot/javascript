var ref
prom = function (val) {
  return new Promise(function(resolve){
    calculCos = function(val) {
      res = Math.cos(val)
      if (res === ref) {
        // console.log('coucou', res);
        // return resolve(res)
        return res
      }
      ref = res
      // calculCos(res)
      setTimeout(calculCos, 0, res)
    }
    return calculCos(val)
  })
}

fs = require("fs-extra")
Promise = require('bluebird')

fs.readJson('./toto.txt')
.then(function(res){
  return Promise.map(res, prom)
})
.then(function(tmp){
  console.log('->', tmp)
})
.catch(function(err){
  console.log(err)
})
