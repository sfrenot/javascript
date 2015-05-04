error = function (n) { console.log("ERROR"); }

fact_improver = function (partial) {
 return function (n) {
   if (n === 0) {
     return 1;
   } else {
     return n * partial(n-1) 
   }
 }
} 

f2 = fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(fact_improver(error))))))))))))))))))

console.log(f2(17))
