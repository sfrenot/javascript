let tab = [1, 2, 3]

for (i = 0; i < tab.length; i++) {
  console.log(tab[i]);
}

// ---

tab.forEach((elem) => {console.log(elem)})

// ---

_ = require('lodash');
_.forEach(tab, (elem) => { console.log(elem)})


