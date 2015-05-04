console.log("Printed");
(function () {
  console.log("Printed");
}());

var inc = (function() {
  var n = 0;
  return function() {
    return n++;
  }
}());

var incr = (function(n) { //Parameter mechanism
  return function() {
    return n++;
  };
}(0));
