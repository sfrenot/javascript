function call1 (i) {
  if (i < 200000) {
    console.log("i -->" + i);
    setTimeout(call1, 0, i);
  }
}

setTimeout(call1, 0, 0);

