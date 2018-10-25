multiplie = (a, b) => { return a * b; }
console.log('->', multiplie(5, 6))

multiplieur = (a) => { return (b) => { return multiplie(a,  b)}}
console.log('->', multiplieur(5)(6))

multiplieur5 = multiplieur(5)
console.log('->', multiplieur5(6))
