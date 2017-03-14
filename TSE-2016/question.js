foo = function (x) { return function (n) {return x + n}}
bar = function (x) { return function (n) {return x * n}}
foobar = function(f, g) { return function (x) { return f(g(x))}}

foo2 = foo(5)
bar1 = bar(4) 
foo6bar3 = foobar(bar1, foo2)

console.log(foo6bar3(10))


console.log(function(f, g) { return function (x) { return f(g(x))}}(function (x) { return function (n) {return x * n}}, function (x) { return function (n) {return x * n}})(10))

console.log(function(f, g) { return function (x) { return f(g(x))}}(function (x) { return function (n) {return x * n}}(4), function (x) { return function (n) {return x + n}} (5))(10))
console.log(function(f, g) { return function (x) { return f(g(x))}}(function (x) { return function (n) {return x * n}}(5), function (x) { return function (n) {return x + n}} (4))(10))
