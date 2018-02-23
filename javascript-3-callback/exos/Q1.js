function test() {
  for (var i = 0; i < 20; i++) {
    console.log("coucou", i);
  }
  return "termine";
}

console.log("Debut");
result = test();
console.log("->", result);
console.log("Fin");

