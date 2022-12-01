Répondez directement dans ce document et sauvegardez le fichier.

**1 Questions de cours sur javascript (2pts)**
> En utilisant la fonction reduce, calculez la somme des éléments du tableau suivant [1, 2, 3](2 pt)

**2 Debuggage de code (3 pts)**
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
    }
  })
}

boucle(false)
.then (function() {
  console.log("terminé")
})
```

La fonction boucle devrait se comporter comme une promesse, mais il semble que ce ne soit pas le cas.

> Pourquoi peut-on dire qu'elle ne se comporte pas comme une promesse ? (1 pt)
> Corrigez pour que la fonction boucle ai un comportement de promesse (1 pt)
> Que faut-il ajouter pour que je puisse invoquer boucle avec le paramètre à `true` ?  (1 pt)

**3 Loop (3pts)**
Ce code fonctionne infiniment et compte de 0 à 999.
Corrigez ce code pour qu'il s'exécute infiniment sans bloquer un navigateur, mais en comptant dans l'autre sens : de 999 à 0.


````javascript
cont = function() {
  setTimeout(loop)
}

loop = function (idx) {
  if (!idx) { idx = 0 }
  console.log("->", idx);
  ++idx < 1000 ? loop(idx) : cont()
}

loop(0)
````

**4 Questions de cours sur les langages (2pts)**
> Donnez 2 traits caractéristiques d'un langage natif (1 pt)
> Donnez 3 traits caractéristiques d'une langage objet (1 pt)
