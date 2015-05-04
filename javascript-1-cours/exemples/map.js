function map(func, array) {
  var result = []
  array.forEach(function(element) {
    result.push(func(element))
  });
  return result
}

console.log(map(Math.round, [0.1, 0.2, 2, Math.PI]))


