function  multiplie(a, b) {
  return a * b;
}

console.log("->", multiplie(5, 6));


//

function multiplieur(a, b) {
  return function(n) { return multiplie(a, b) * n; }
}

x = multiplieur(5, 6);
console.log("->", x(4));

