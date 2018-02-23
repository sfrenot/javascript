function parle(phrase) {
  console.log(this.me, " vous dit : ", phrase)
}

parle.call({me: "Stephane"}, "Bonjour");
parle.apply({me: "Stephane"}, ["Bonjour"]);
