function test(f) {
  setTimeout(function () {
    for (var i = 0; i < 20; i++) {
      console.log("coucou", i);
    }
    f();
  })
}


while (true) {
  console.log("Debut");

  test(function(message) {
  	console.log("-> terminé");
  });

 console.log("Fin")
}
  
