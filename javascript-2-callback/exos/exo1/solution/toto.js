window.onload = function() {
var res = document.getElementById("cpt");

function call1 (i) {
  if (i < 200000) {
    i++;
    console.log(i);
    res.innerHTML = i
    setTimeout(call1, 0, i);
  }
}

setTimeout(call1, 0, 0);
}
