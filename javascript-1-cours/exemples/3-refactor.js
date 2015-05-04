console.log("Coucou");

// Tennent
a = (function() { console.log("Coucou");})()

// Binding
a = (function(z) { console.log("Coucou", z);})(123)

// Wrap
a = (function(e) { (function(z) { console.log("Coucou", z);})(e)})(1)
