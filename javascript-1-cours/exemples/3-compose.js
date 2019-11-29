makeAdder = function (x) { return function (n) {return x + n}}
add5 = makeAdder(5)

makeMultiplier = function (x) { return function (n) {return x * n}}
mul3 = makeMultiplier(3) 

compose = function(f, g) { return function (x) { return f(g(x))}}

mul3add5 = compose(mul3, add5)

console.log(mul3add5(10))

//var tmp = (function(){  console.log("Printed"); })()



