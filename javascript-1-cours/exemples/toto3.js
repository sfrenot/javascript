function Person (name, firstname, children) {
  this.name = name;
  this.firstname = firstname;
  this.children = children;

  this.sayHello = function () {
    reponse = "Bonjour le "+ new Date() + "\n";
    reponse += "J'ai " + this.nbChildren() + " enfants";
    reponse += elemSep;
    return reponse;
  }

  this.nbChildren = function() {
    return this.children.length;
  }

  var elemSep = " privé";

}

Person.prototype.toString = function() {
  return 'hello' + this.name;
}

var someOne = new Person("Frénot", "Stéphane", [{"name":"Albert"}, {"name":"Leon"}]);
console.log("" + someOne);
console.log(Object.getOwnPropertyNames(someOne));
console.log("name " + someOne.name);
console.log("name " + someOne.privateName);
console.log(Person.prototype);
console.log(someOne.sayHello());
console.log(someOne.elemSep);

