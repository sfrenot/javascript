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

// Applicative Order Y combinator
// Z-combintaor
// Fixpoint Combinator
y = function (f) {
      return function(x) {
        return f(function (v) {return x(x)(v)})
      }(
             function(x) {
        return f(function (v) {return x(x)(v)})
      })
    }

// Y calculates the fixpoint ofan improver function
fact = y(fact_improver)

// Fact is the fixpoint of fact_improver
fact = fact_improver(fact)

a = fact(5)

console.log(a)

