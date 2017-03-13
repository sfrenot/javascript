
    function create() {
      this.reponse = 23;
      this.calc = function (x) {return x + this.reponse ; }
    }

    var a = new create()
    console.log(a.calc(12), a.reponse) 
