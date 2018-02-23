let Machine1 = function() {
  return {
    utilite: "rien1",
    test: function () {console.log("coucou1", this.utilite);}
  }
}

let Machine2 = function() {
  this.utilite = "rien2";
  this.test = function() {console.log("coucou2", this.utilite)};
}

class Machine3 {
  constructor() {
    this.utilite = "rien3";
    this.test = function() {console.log("coucou3", this.utilite)};
  }
}


let machine1 = new Machine1(); machine1.test();
let machine2 = new Machine2(); machine2.test();
let machine3 = new Machine3(); machine3.test();


//machine.test = function() { console.log("coucou", this.utilite); }

//Machine.prototype.test = function() { console.log("COUCOU", this.utilite); }
//Object.prototype.test = function() { console.log("PLOPPLOP");}

//machine.test();

