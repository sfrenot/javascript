var create = function (name) {
  var display = function () {
      return name;
    }
  return display;
}

a = create('hello');
console.log(a());
name = "bye2";
console.log(a());

