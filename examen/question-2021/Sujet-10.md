Répondez directement dans ce document et sauvegardez le fichier.

**1 Ecrivez le code suivant sous la forme d'un callback (3 pts)**
```javascript
function boucle(param) {
  return new Promise(function(resolve, reject) {
    i = 0;
    toto = true;
    while(toto) {
      console.log("->", i);
      toto = (++i < 1000 ? true : false)
    }
    if (param) {
      return reject()
    } else {
      return resolve()
    }
  })
}

boucle(false)
.then (function() {
  console.log("Terminé")
})
.catch (function() {
  console.log("Pas cool")
})
```

**1 Questions de cours sur les langages (2pts)**
> Donnez 3 traits caractéristiques d'une langage fonctionnel (1 pt)
> Donnez 2 traits caractéristiques d'une langage natif (1 pt)

**2 Questions de cours sur javascript (2pts)**
> Ecrivez une fonction reduce qui effectue la somme des éléments du tableau suivant [1, 2, 3](2 pt)

**4 Event Queue (3pts)**
Corrigez ce code pour qu'il s'exécute infiniment bloquer un navigateur.
-> 0 .... -> 999 -> 0 .... -> 999 -> 0 ......

````javascript
function boucle (i) {
  console.log("->", i);
  ++i < 1000 ? boucle(i) : boucle(0)
}

boucle(0)
```
