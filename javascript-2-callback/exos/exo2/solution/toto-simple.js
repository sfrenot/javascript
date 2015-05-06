function call1 (i, callback) {
  if (i < 20) {
    i++;
    console.log(i);
    setTimeout(call1, 0, i, callback);
  } else {
    callback();
  }
}

call1(0, function() {
  console.log('terminé');
});

