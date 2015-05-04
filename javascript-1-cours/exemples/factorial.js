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

f0 = fact_improver(error);
f1 = fact_improver()
f2 = fact_improver(f1)

console.log(f2(1))
