function negate(func) {
  return function() {
    return !func.apply(null, arguments)
  }
}

function lessThanZero(a) {
  return a < 0;
}

var a = -1;
if (lessThanZero(a)) {
  console.log(a + " < 0");
}

moreThanOrEqualZero = negate(lessThanZero)
if (moreThanOrEqualZero(a)) {
  console.log(a + " >= 0");
}

var a=0
if (moreThanOrEqualZero(a)) {
  console.log(a + " >= 0");
}
