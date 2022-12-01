function boucle (param) {
  return new Promise(function(resolve, reject) {
    i = 0;
    toto = true;
    while(toto) {
      console.log("->", i);
      toto = (++i < 1000 ? true : false)
    }
    if (param) {
      return reject()
    }
  })
}

boucle(false)
.then (function() {
  console.log("terminé")
})

