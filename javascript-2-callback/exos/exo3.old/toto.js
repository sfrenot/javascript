//Pattern
function call1 (callback) {
  function _call1(i) {
    //Ancienne fonction
    i++;
    console.log("i -->" + i);
    if (i < 200000) {
      //Pattern
      setTimeout(_call1, 0, i);
    }
  }
  _call1(0);
}

call1(function() {
  console.log("La fonction est terminée");
});

