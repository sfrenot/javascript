mul3 = function (n) {return (n*3);} 
make_adder = function (x) { return function (n) {return x + n}}
add1 = make_adder(1)
compose = function(f, g) { return function (x) { return f(g(x))}}
mul3add1 = compose(mul3, add1)

console.log(mul3add1(10))

console.log(function(f, g) { return function (x) { return f(g(x))}}(function (n) {return (n*3);}, function (x) { return function (n) {return x + n}}(1))(10))
//console.log(function(f, g) { return function (x) { return f(z(x))}}(function (n) {return (n*3);}, function (x) { return function (n) {return x + n}}(1))(10))
console.log(function(f, g) { return function (x) { return f(g(x))}}(function (n) {return (n*3);}, function () { return function (n) {return x + n}}(1))(10))

