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
    return reponse
  }
}

console.log(person.sayHello())

