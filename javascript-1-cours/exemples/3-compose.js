
make_adder = function (x) { return function (n) {return x + n}}

mul3 = function (n) {return function(){  return (n*3);}(); } 

//console.log(mul3(10))

add1 = make_adder(1)

console.log(add1(1))
compose = function(f, g) { return function (x) { return f(g(x))}}

mul3add1 = compose(mul3, add1)

console.log(mul3add1(10))

//var tmp = (function(){  console.log("Printed"); })()



