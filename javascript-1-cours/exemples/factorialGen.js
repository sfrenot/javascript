error = function (n) { console.log("ERROR"); }

fact_improver =
 function(partial) {
    return function (n) {
      if (n === 0) {
        return 1; 
      } else {
        return n * partial(n-1)
      }
    }
  }

// Y combinator
y = function (improver) {
      return function(gen) {
        return gen(gen);
      }(
         function (gen) {
           return improver(function (v) {return gen(gen)(v)})
         }
       )
    }

// Y calculates the fixpoint ofan improver function
fact = y(fact_improver)

// Fact is the fixpoint of fact_improver
fact = fact_improver(fact)

a = fact(5)

console.log(a)

