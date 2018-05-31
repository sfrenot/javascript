multiplie = function (a, b) {
  return a * b;
}

console.log("->", multiplie(5, 6));


//

multiplieur = function (a) {
  return function(b) { return multiplie(a, b); }
}

x = multiplieur(5);
console.log("->", x(6));
//
