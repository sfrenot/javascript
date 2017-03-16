function  multiplie(a, b) {
  return a * b;
}

console.log("->", multiplie(5, 6));


//

function multiplieur(a, b) {
  return function() { return multiplie(a, b); }
}

x = multiplieur(5, 6);
console.log("->", x());
//
