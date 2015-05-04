//Functionnal Refactoring
//Tennent Correspondance principal
//Introduce a binding
//Wrap function (function v)

make_adder = function (x) { return function(v) { return function (n) {return x + n}(v)}}

mul3 = function (n) {return function(z){return (n*3);}(1212)} 


add1 = make_adder(1)

compose = function(f, g) {
  return function() {return function (x) { return f(g(x))}}()
}

mul3add1 = compose(mul3, add1)

console.log(mul3add1(10))

