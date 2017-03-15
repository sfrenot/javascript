function test(f) {
  for (var i = 0; i < 20; i++) {
    console.log("coucou", i);
  }
  f("termine");
}


console.log("Debut");

test(function(message) {
	console.log("->", message);
});

console.log("Fin")


 
 
  
