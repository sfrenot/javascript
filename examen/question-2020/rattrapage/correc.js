const {exec} = require ("child_process");
const fs = require ("fs");

unzip = () => {
  return new Promise( (resolve) => {
    let cmd = `unzip -o ./test.zip`; //with 7z, arguments have to be right after the option, without space
    exec(cmd, (err, ret) => {
      console.log("->", ret);
      resolve()
    })
  })
}

mod = () => {
  fs.writeFileSync('./toto.txt', "b")
}

unzip().then(() => {mod()})
