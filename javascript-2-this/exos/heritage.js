function Create() { this.reponse = 23; }
Create.prototype.calc = function (x) { return x + this.reponse }

function Create2() {this.reponse = 32}
Create2.prototype = new Create()
Create2.prototype.hello = function () { console.log("hello"); }
Create2.prototype.calc = function (x) { return 2*x + this.reponse; }

let a = new Create2()
console.log(a.calc(12))
a.hello()

console.log(a.__proto__.calc(12))
console.log(a.__proto__.__proto__.calc(12))

console.log(a.__proto__)
console.log(a.__proto__.__proto__)
console.log(a.__proto__.__proto__.__proto__)
console.log(a.__proto__.__proto__.__proto__.__proto__)
