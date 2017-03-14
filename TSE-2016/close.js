var create = function () {
  var name = "hello";
  var display = function () {
      return name;
    }
  return display;
}

a = create('hello');
console.log(a());
name = "bye2";
console.log(a());

