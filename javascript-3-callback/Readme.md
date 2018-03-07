# Avant d'attaquer
Avant d'attaquer ce sujet, il faut que vous ayez compris Javascript. Particulièrement les points suivants :
- Savoir lancer et arrêter un interpréteur de commandes javascript comme node ou la console du navigateur
- Connaitre les structures de base de Javascript : variables, structures algorithmiques, tableaux, objets.
- Comprendre la programmation d'ordre supérieur.

# Pourquoi faut-il des callback en Javascript ?
Javascript propose la mise en place de callback en support aux exécutions multithreadées. Le mécanisme de callback est une solution pour ne pas bloquer une exécution monothreadée.

L'objectif de ce TD est de réaliser un certain nombre d'exercices afin de comprendre le principe du callback et de ses origines.

## Exercice liminaire
Ecrire et lancer le programme suivant.

```javascript
function test() {
  for (let i = 0; i < 20; i++) {
    console.log("coucou", i);
  }
  return "termine";
}

console.log("Debut");
result = test();
console.log("->", result);
console.log("Fin");
```

Avez-vous des commentaires ?

Ecrire le nouveau programme suivant.

```javascript
function test(f) {
  for (var i = 0; i < 20; i++) {
    console.log("coucou", i);
  }
  f("termine");
}

console.log("Debut");

test(function(message) {
  console.log("->", message);
});

console.log("Fin")
```

Quelles sont les différences par rapport au programme initial ? Avez-vous des commentaires ?

## Exécution synchrone et asynchrone
Nous allons maintenant transformer le programme suivant, pour qu'il devienne asynchrone...

Copiez et exécutez le code suivant.

```javascript
function test(f) {
  setTimeout(function () {
    for (var i = 0; i < 20; i++) {
      console.log("coucou", i);
    }
    f();
  })
}

console.log("Debut");

test(function(message) {
  console.log("-> Terminé");
});

console.log("Fin")
```

Lancez et exécutez le code suivant. Avez-vous compris ce qu'il vient de se passer ?

--> Philip Roberts  
- https://www.youtube.com/watch?v=8aGhZQkoFbQ  

Le passage par un système asynchrone à base de callback dans le cas de javascript permet de rendre l'appelant indépendant de l'appelé. Ceci est en changement majeur de paradigme de programmation impératif ou fonctionnel. On peut, dès lors, écrire du code non bloquant sans se soucier de la synchronisation des différents espaces d'exécution.

Comprenez-vous les enjeux associés à cette approche ? Quels sont les avantages, quels sont les inconvénient ? Quels est le type de système d'exploitation associé à cette approche ? Comprenez-vous que cette approche n'est pas liée à Javascript ? Mais à quoi est elle liée alors ?

Maintenant que les choses sont claires, nous pouvons écrire la boucle principale d'un systeme turned based. C'est une boucle infinie : qui lance régulièrement des fonctions de traitement.

** Q3 Réécrire le code précédent afin d'avoir une exécution infinie de 'Début, Fin' entrecoupés de 'Terminé'. L'objectif est de transformer ce code en un minimum de lignes.**

## Généralisation	des callbacks
La majorité des fonctions systèmes liées à Javascript sont asynchrone est donc utilisée avec une fonction de callback. La fonction de callback n'est pas un standard, mais une convention d'exécution, dans laquelle le choix dans l'ordre des paramètres de retour n'est pas évident. Nodejs par exemple a choisi de prendre les erreurs en premier paramètre plutôt que la valeur de retour.

** Q4
Ecrire un code nodejs permettant de lire le contenu d'un fichier.
https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback **

** Q5
Ecrire un code nodejs permettant de faire un get sur une page Web https://nodejs.org/api/http.html#http_http_request_options_callback
**

** Q6
Ecrire un code lisant le contenu d'un fichier contenant des urls, puis pour chaque url accéder au site web correspondant.
**


Avez-vous des commentaires ?

#Refs

Philip Roberts  
- https://www.youtube.com/watch?v=8aGhZQkoFbQ  

Douglas Crockford  
- https://www.youtube.com/watch?v=dkZFtimgAcM  

- bluebird promesses    
http://stackoverflow.com/questions/4288759/asynchronous-for-cycle-in-javascript  

&copy; Stéphane Frénot, Département Télécommunications, cours ELP, 2017
