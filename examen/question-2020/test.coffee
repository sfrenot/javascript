hello = (test) ->
  console.log "coucou", 4
  if test?
    console.log "-> #{test}"

hello()
hello("stop")
