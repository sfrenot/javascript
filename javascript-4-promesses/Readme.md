(ref entre autres (https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261#.esf9nsnwf)
#Liminaire
Que fait le code dans le répertoire liminaire ?

#Promesses
Le mécanisme des promesses est un mécanisme de remplacement aux callback afin de rendre le code plus fluide. Le mécanisme des callback est un mécanisme de bas-niveau, proche de l'assembleur Javascript capable de gérer les événement asynchrone de la boucle événementielle JavaScript. (cf TD2).

Ce mécanisme simple, devient rapidement complexe dans le traitement d'erreurs, lorsque les événements asynchrones s'enchaînent. Un callback étant une 'promesse' d'exécution futur, il est parfois difficile de savoir comment gérer ces événements. Un autre cas complexe apparait lorsqu'il y a exécution groupées de callback. Doit-on arrêter l'exécution si un callback échoue, sachant qu'une partie des callbacks auront été réalisés, ou doit-on valider tous les callback malgré des erreur. Comment faire pour valider un appel dès qu'au moins un callback d'une collection est réalisé ?

Q1 : comprenez-vous le paragraphe précédent ? Avez-vous en tête des exemples d'exécution posant des problèmes ?

# Question initiale


# Définition des promesses
Une promesse, commme son nom l'indique, est un objet qui peut produire une valeur unique dans un futur : soit une valeur de résolution, soit une raison pour laquelle elle n'est pas résolue. En interne une promesse doit être dans un des trois états : accomplie, rejetée, en attente. Un devéloppeur peut y attacher une fonction pour gérer l'accomplissement ou le rejet. Une promesse est avide ; elle est lancée dès sa création...

La notion de promesse existe dans le principe de futures présent dans des langages comme MultiLisp ou Concurrent Prolog dès les années 80. L'utilisation du terme promesse vient du papier de Barbara Liskov et Liuba Shrira de 88 : “Promises: Linguistic Support for Efficient Asynchronous Procedure Calls in Distributed Systems”. Proceedings of the SIGPLAN ’88 Conference on Programming Language Design and Implementation; Atlanta, Georgia, United States, pp. 260–267. ISBN 0–89791–269–1, published by ACM. Also published in ACM SIGPLAN Notices, Volume 23, Issue 7, July 1988.

Dans le monde Javascript elles sont arrivées avec le module async de jQuery, puis le framework Dojo ajoutera la bibliothèque Deferred. Rapidement une spécification de standardisation émerge (Promise/A) qui deviendra plus tard Promise/A+. Ajourd'hui l'implantation de référence est [bluebird](http://bluebirdjs.com/docs/getting-started.html)

# Utiliser une promesse
L'utilisation des promesse se fait selon le pattern suivant :

```
<promesse>
.then (function (res) { ...}) // Réussite
.catch (function (err) {...}) // Erreur
```

- Installer le package fs-extra-promise
En utilisant ce package, lire un fichier et traiter les erreurs possibles.

# Ecrire une promesse
L'écriture d'une promesse consiste à retourner un objet Promesse. Cette objet 'emballe' l'exécution de la fonction initiale. Si le retour est valide il se fait en invoquant la fonction resolve, sinon en invoquant la fonction reject.

```Javascript
Promise = require('bluebird');

wait = function(time) {
  a = new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
  return a;
}

wait(3000).then(function() { console.log('Bonjour');})
```

Q2 Tester, lire et comprendre ce code...

# Seconde promesse
Etendre la promesse wait afin d'annuler la promesse si le délai est supérieur à 3 secondes. Le mot clé 'then', permet de déclencher la suite d'action quand la promesse est résolue. Le mot-clé 'catch' permet de traiter le rejet d'une promesse quand elle est annulée. Compléter votre code de test afin de gérer le cas d'erreur.

# Que va afficher ce code ?
Essayez de lire et de comprendre le code Q2.js avant de le lancer. Puis comparez votre idée au résultat observé.

# Réorganisation du flow
Réorganisez le flow de promesses afin de faire la première puis la seconde promesse dans le resolve de la première.

# Ouvrir le code Q4
Donnez une explication probable de ce que vous voyez...

# Transmission de résultat
Dans l'exemple Q4, on veux maintenant récupérer un résultat issu de la promesse. Modifiez le code pour transmettre un résultat. (Cette question, peut être complexe).

# Flow de promesses
Lire l'exemple Q6 et anticipez ce qui va se passer.

# Que valide ce code ?
```Javascript
console.log("start");
Promise.resolve('Bonjour').then(console.log)
console.log("End")
```

# Enfin on va utiliser tout cela...
En utilisant le module npm request-promise, réécrire le code liminaire. La recherche des pages filles doit se faire en utilisant un Promise.all.

# Wrap-up
A la fin de ce TD, vous devez :
- Avoir compris le principe et les intérêts des promesses comme remplacement des callback JS
- Savoir transformer une fonction en promesse
- Savoir utiliser une promesse fournie
- Savoir enchainer des promesses et le traitement associé
- Avoir compris les mots clés : then / catch / finally

# Question subsidiaire
Quels sont les trois paradygmes de comportements asynchrones dans Javascript ?
