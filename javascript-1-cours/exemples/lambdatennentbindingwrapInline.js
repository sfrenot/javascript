//Functionnal Refactoring
//Tennent Correspondance principal
//Introduce a binding
//Wrap function (function v)
//Inlining

//make_adder = function (x) { return function(v) { return function (n) {return x + n}(v)}}

//mul3 = function (n) {return function(z){return (n*3);}(1212)} 


//add1 = function (x) { return function(v) { return function (n) {return x + n}(v)}}(1)

//mul3add1 = function(f, g) {
//  return function() {return function (x) { return f(g(x))}}() }(function (n) {return function(z){return (n*3);}(1212)} , function (x) { return function(v) { return function (n) {return x + n}(v)}}(1))

console.log(

    function(f, g) { 
      return function() {return function (x) { return f(g(x))}}() }(function (n) {return function(z){return (n*3);}(1212)} , function (x) { return function(v) { return function (n) {return x + n}(v)}
    }(1))
    (10)
      
)

