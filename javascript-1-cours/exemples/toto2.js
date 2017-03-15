person = {
  "name": "Stéphane",
  "firstName": "Frénot",
  "children": [
    { "name": "Albert" },
    { "name": "Jeanne" },
    { "name": "Leon" }
  ],
  "age": 46.3,
  "isMan": true,
  "sayHello": function () {
    reponse = "Bonjour le "+ new Date() + "\n";
    reponse += "J'ai " + this.nbChildren() + " enfants";
    return reponse
  },
  "nbChildren": function() {
    return this.children.length;
  }
}

console.log(person.sayHello())

