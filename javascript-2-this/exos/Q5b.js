function parle(phrase) {
  console.log(" vous dit : ", phrase)
}

parle("Bonjour");
parle.call(null, "Bonjour");
parle.apply(null, ["Bonjour"]);
