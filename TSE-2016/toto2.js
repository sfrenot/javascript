function call1 (i) {
  if (i < 200000) {
    i++;
    console.log(i);
    setTimeout(call1, 0, i);
  } 
}

call1(0);

