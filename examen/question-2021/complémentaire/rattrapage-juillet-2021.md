1 Décomposez la lambda suivante en un ensemble de fonctions possédant au moins un paramètre : (1 pt)
console.log(function(f, g) { return function (x) { return f(g(x))}}(function (n) {return (n*3)}, function (x) { return function (n) {return x + n}}(1))(10))

2 Promesse et Callbacks
On récupère un pilote fictif de base de données 'reqSql'. Il permet d'interroger une base de données, sous la forme de requêtes sql et sa spécification est la suivante :

- Le pilote peut s'utiliser soit sous la forme de callbacks avec erreur en premier paramètre soit sous la forme de promesses then/catch. Toutes les fonctions répondent  aux deux API suivantes :
       <functionName>(p1, <callbackErr>, <callbackOk>)
       <promise> <functionName>(p1)

- Il s'utilise en deux phases  (* Voir en bas pour des exemples) :
      1 une connexion doit être initialement établie (appel `connect`). La connexion se fait sur une url donnée sous la forme de chaîne de caractères, et renvoie un objet de connexion ou une erreur.
      2 l'utilisateur peut utiliser l'objet retourné pour invoquer des requêtes (appel `exec`) sql sous la forme d'une chaine de caractères.  
      - Si la requête ne lève pas d'erreur, il retourne un tableau d'objets contenant le résultat sous un format json.

2.1 Donnez un exemple complet d'utilisation du driver/module sans traitement d'erreur en mode callback (4 pts). Le pseudo code est le suivant :
```javascript
req = import("reqSql");
// Etablir connexion avec la base de données
   // Dans le callback de connexion, interroger la base de données
     // Dans le callback d'intérogation, lire les lignes obtenues
```
2.2 Donnez un exemple complet d'utilisation du driver en mode promesse. (2pts).
Le pseudo code est le suivant :
```javascript
eq = import("reqSql");
// Etablir connexion avec la base de données
// Puis interroger la base de données
// Puis lire les lignes obtenues
```

2.3 Donnez un exemple de traitement d'erreur le plus compact possible (2pts)

2.4 Donner un code d'utilisation en mode callback avec traitement des erreurs (1pts)

Compléments
------
* Une url typique de connexion : 'db://toto.com/mabase'
* Une requête et une réponse sql typique :
    'select * from étudiants' -> [{'nom': 'Stéphane', 'id': 1213}, {'nom': 'Frédérique', 'id': 1413} ]
