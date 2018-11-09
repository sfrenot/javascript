//let notes = [10, 20]
//console.log('->', notes.reduce( (cumul, val) => { return(val + cumul)}) /notes.length)



notes =  [10, 20, 10, 30]
console.log(notes.reduce( (cumul, val, index, array) => {return(index !== (array.length-1) ? cumul + val : (cumul + val)/array.length)}))

