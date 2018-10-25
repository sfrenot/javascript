multiplie = (a, b) -> (a*b)

console.log multiplie(4, 5)


multiplier = (a, b) -> () -> multiplie(a, b)


console.log multiplier(4, 5)()

