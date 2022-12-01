const {exec} = require ("child_process");
const fs = require ("fs");

unzip = () => {
  let cmd = `sleep 1; unzip -o ./test.zip`;
  exec(cmd, (err, ret) => {
    console.log(ret);
  })
}

mod = () => {
  fs.writeFileSync('./toto.txt', "b")
}

// unzip()
// mod()

//---
// ## Attention NE PAS MODIFIER LE CODE SANS INSTRUCTION
// ## Vérifier que ce programme s'exécute sur votre machine
//
// ## Si votre programme final décommenté est synchrone en restant simple, vous aurez tous les points
//
// ## 1 Que fait ce programme ?
// ## 2 Que font les lignes 4-9 et 11-13 ?
//
// ## Décommentez les lignes 15-16
// ## 3 Que fait le programe ?
// ## 4 Pourquoi à la fin de l'exécution le fichier toto.txt contient toujours "a" ?
// ## 5 Où placer des trace pour le montrer que javascript est asynchrone ?
//
// ## Comment faire pour que le fichier toto.txt contienne le caractère "b" à la fin de l'exécution ?
// ## 6 En utilisant la syntaxe `then` de l'API promesse, corrigez la ligne 15-16 pour exécuter 15 avant 16.
//       --> Le programme n'a pas besoin d'être exécuté pour l'instant.
// ## 7 Corrigez la fonction unzip() s'exécute avant la fonction mod en devenant compatible avec l'API de
//      promesses avec la construction suivante :
//           return new Promise( (resolve) => {...})
