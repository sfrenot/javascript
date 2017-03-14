create = function () {
  name = 'test'
  display = function () {
    return name
  }
  return display;
}
a = create('hello');

console.log("->", a())
name = 'bye'
console.log(a())


