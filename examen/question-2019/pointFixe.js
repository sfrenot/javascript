// res = 0
//
// for (i=0; i<100; i++) {
//   res = Math.cos(res)
//   console.log(res)
// }

// calculCos = function (val) {
//   console.log(Math.cos(val))
//   // calculCos(Math.cos(val))
//   setTimeout(calculCos, 0, Math.cos(val))
// }


// var ref
// calculCos = function (val) {
//   res = Math.cos(val)
//   if (res === ref) {
//     process.exit(0)
//   }
//   ref = res
//   console.log(res)
//   // calculCos(Math.cos(val))
//   setTimeout(calculCos, 0, res)
// }
// calculCos(0)

// fs = require("fs-extra")
// fs.readJson('./toto.txt')
// .then(function(res){
//   console.log(res)
// })
// .catch(function(err){
//   console.log(err)
// })

// prom = function(val) {
//   return new Promise(function(resolve) {
//     var ref
//     calculCos = function (val) {
//       // console.log('->', val);
//       // new Promise(function(resolve) {
//         res = Math.cos(val)
//         if (res === ref) {
//           // console.log('coucou', res);
//           return resolve(res)
//            // return Promise.resolve('coucou')
//         }
//         ref = res
//         // console.log(res)
//         // calculCos(Math.cos(val))
//         setTimeout(calculCos, 0, res)
//       // })
//     }
//     calculCos(val)
//   })
// }

// prom = function(val) {
//   return new Promise(function(resolve) {
//     calculCos = function (val, r) {
//       res = Math.cos(val)
//       if (res === val) {
//         return r(res)
//       }
//       setTimeout(calculCos, 0, res, r)
//     }
//     calculCos(val, resolve)
//   })
// }

// var ref
// prom = function (val) {
//   return new Promise(function(resolve){
//     calculCos = function(val) {
//       res = Math.cos(val)
//       if (res === ref) {
//         return resolve(res)      }
//       ref = res
//       calculCos(res)
//       // setTimeout(calculCos, 0, res)
//     }
//     return calculCos(val)
//   })
// }

// calculCos = function(val) {
//   return new Promise(function(resolve){
//     res = Math.cos(val)
//     if (res === val) {
//       // console.log('->',res);
//       return resolve(res)
//     }
//     return resolve(calculCos(res))
//     //setTimeout(calculCos, 0, res)
//   })
// }

// fs = require("fs-extra")
//
// fs.readJson('./toto.txt')
// .then(function(tabVal){
//   return Promise.all(tabVal.map(prom))
// })
// .then(function(tmp){
//   console.log('->', tmp)
// })
// .catch(function(err){
//   console.log(err)
// })

prom = function(val) {
  return new Promise(function(resolve) {
    calculCos = function (val, r) {
      res = Math.cos(val)
      if (res === val) {
        return r(res)
      }
      setTimeout(calculCos, 0, res, r)
    }
    calculCos(val, resolve)
  })
}

prom(1)
.then(function(tmp){
  console.log('->', tmp)
})
