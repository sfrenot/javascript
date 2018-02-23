let liste = [["a"], {a: 10}, console.log, 10];

let getType = function(a) {
  console.log(a.toString(), " => ", typeof a);
}

liste.forEach(getType);


