function test(f) {
  setTimeout(function () {
    for (var i = 0; i < 20; i++) {
      console.log("coucou", i);
    }
    f();
  })
}


function traitement() {

  console.log("Debut");

  test(function(message) {
    console.log("Fin")
  	console.log("-> terminé");
  });

  
  setTimeout(function() {
    traitement();
  });
}

traitement();
 
 
  
