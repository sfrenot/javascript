let notes = [10, 20]
console.log('->', notes.map((val) => {return (val-2);}).reduce( (val, cumul) => { return(val + cumul)/notes.length } ))
