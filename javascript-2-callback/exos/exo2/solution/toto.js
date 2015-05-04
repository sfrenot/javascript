//Pattern
function call1 (callback) {
  function _call1(i) {
    //Ancienne fonction
    i++;
    console.log("i -->" + i);
    if (i < 2000) {
      //Pattern
      setTimeout(_call1, 0, i);
    } else {
      callback()
    }
  }
  _call1(0);
}

call1(function cont() {
  console.log("j'ai terminé");
  alert('terminé');
})

