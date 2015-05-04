//Pattern
function call3 (callback) {
  function _call3(i) {
    //Ancienne fonction
    i++;
    console.log("f3 -->" + i);
    if (i < 50) {
      //Pattern
      setTimeout(_call3, 0, i);
    } else {
      callback();
      return;
    }
  }
  _call3(0);
}

function call2 (callback) {
  function _call2(i) {
    //Ancienne fonction
    i++;
    console.log("f2 -->" + i);
    if (i < 50) {
      //Pattern
      setTimeout(_call2, 0, i);
    } else {
      callback();
      return;
    }
  }
  _call2(0);
}

function call1 (callback) {
  function _call1(i) {
    //Ancienne fonction
    i++;
    console.log("f1 -->" + i);
    if (i < 50) {
      //Pattern
      setTimeout(_call1, 0, i);
    } else {
      callback();
      return;
    }
  }
  _call1(0);
}

call1(function() {
  console.log("La fonction 1 est terminée");
  call2(function() {
    console.log("La fonction 2 est terminée");
    call3(function() {
      console.log("La fonction 3 est terminée");
    });
    console.log("La fonction 3 commence");
  });
  console.log("La fonction 2 commence");
});

console.log("Je ne suis pas bloqué ici, la fonction 1 commence");
