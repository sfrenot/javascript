function call1 (i) {
  if (i < 20) {
    i++;
    console.log(i);
    setTimeout(call1, 0, i);
  } else {
    return 'ok';
  }
  return 'ok';
}

ret = call1(0);
if (ret === 'ok') {
  console.log('terminé');
};

