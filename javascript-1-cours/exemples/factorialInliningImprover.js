//error = function (n) { console.log("ERROR"); }

console.log(

function(improver) {
  return improver(improver);
}(function (improver) {
 return function (n) {
   if (n === 0) {
     return 1;
   } else {
     return n * improver(improver)(n-1) 
   }
 }
})(120)

)

