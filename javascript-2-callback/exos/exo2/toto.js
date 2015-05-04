//Pattern
function call1 () {
  function _call1(i) {
    //Ancienne fonction
    i++;
    console.log("i -->" + i);
    if (i < 2000) {
      //Pattern
      setTimeout(_call1, 0, i);
    } 
  }
  _call1(0);
}

ret = call1()
if (ret === 'ok') {
  console.log("Terminé");
}

