[2, 3, 5, 7, 11, 13, 17, 19].forEach (i) ->
  input_block = parseInt((Math.sqrt(i) % 1).toString(2).slice(2, 34), 2)
  console.log(input_block.toString(16), input_block.toString(2).padStart(32, '0'))
