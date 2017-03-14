function call1 () {
  console.log("i -->" + i);
}

for (i = 0; i < 2000000; i++) {
  call1();
}

