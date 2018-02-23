function call1 (i {
  if (i < 20) {
    i++;
    console.log(i);
    setTimeout(call1, 0, i);
  } 
}

call1(0);

