class Machine {
  constructor() {
    this.utilite = "rien";
  }
}

let machine = new Machine();

console.log(machine.utilite);


//
function Machine2() {
  this.utilite = 'vide';
}

let machine2 = new Machine2();
console.log(machine2.utilite);



function test () { 
 return this.utilite+' mais quoi !!';
}

console.log(test.bind(machine2)());
