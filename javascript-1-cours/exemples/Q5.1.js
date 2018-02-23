let notes = [10, 20]
console.log('->', notes.reduce( (val, cumul) => { return((val + cumul)/notes.length) } ))
