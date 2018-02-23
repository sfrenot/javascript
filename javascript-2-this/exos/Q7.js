class Machine3 {
  constructor() {
    this.utilite = "rien3";
    //this.test = function() {console.log("coucou3", this.utilite)};
  }
}

let machine3 = new Machine3(); 
Machine3.prototype.test = function() { console.log("COUCOU", this.utilite); }

machine3.test();

//On surcharge l'objet machine3
machine3.test = function() { console.log("coucou", this.utilite); }
machine3.test()
Object.prototype.test = function() { console.log("PLOPPLOP");}

//machine.test();

