fs = require('fs-extra-promise')

function convert(chars) {
  return Promise.resolve(
    chars.match(/./g).map((x) => {
      return x.charCodeAt(0).toString(16).padStart(2,0)
    }
    )
  )
}

fs.readFileAsync("./toto.txt", "utf-8")
.then ( (content) => {return convert(content);})
.then ( (res) => {console.log(res)} )
