function map(func, array) {
  var result = []
  array.forEach(function(element) {
    result.push(func(element))
  });
  return result
}

var op = {
  "+": function (a, b) { return a+b; },
  "-": function (a, b) { return a-b; }
}

function partial (func) { // La fonction construit une nouvelle fonction, avec des paramètres partiellement fournis
  var knownArgs = arguments;
  return function () {
    var realArgs = [];
    for (var i=1; i < knownArgs.length; i++) {
      realArgs.push(knownArgs[i]);
    }  
    for (var i=0; i<arguments.length;i++) {
      realArgs.push(arguments[i]);
    }  
    return func.apply(null, realArgs);
  };
}

console.log(map(partial(op["+"], 1), [0, 2, 3]))


