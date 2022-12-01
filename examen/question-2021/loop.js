function boucle (i) {
  console.log("->", i);
  ++i < 1000 ? boucle(i) : setTimeout(boucle, 0, 0)
}

boucle(0)

