function parle() {
  console.log("->", this.me);
}

let tmp = parle.bind({me: "Stephane"});
console.log("->", tmp);

//Q5
tmp();
