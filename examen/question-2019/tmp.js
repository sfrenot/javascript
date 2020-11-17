var ref
var i=0
calculCos = function (val) {
  i++
  res = Math.cos(val)
  if (res === ref) {
    process.exit(0)
  }
  ref = res
  setTimeout(calculCos, 0, res)
}
calculCos(0)
