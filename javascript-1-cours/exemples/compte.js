tab = ["aaa", "bbb", "ccc"]

for (i = 0; i < tab.length; i++) {
  console.log("->", tab[i]);
}

//

tab.forEach( function (elem) { console.log("->", elem);});


_ = require('lodash');
_.each(tab, function(elem) { console.log("->", elem);})

