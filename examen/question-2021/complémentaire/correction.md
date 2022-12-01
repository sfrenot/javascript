1 Donnez la lambda expression équivalente au programme suivant : (1 pt)

mul3 = function (n) {return (n*3);}
make_adder = function (x) { return function (n) {return x + n}}
add1 = make_adder(1)
compose = function(f, g) { return function (x) { return f(g(x))}}
mul3add1 = compose(mul3, add1)
console.log(mul3add1(10))


Rep:
console.log(function(f, g) { return function (x) { return f(g(x))}}(function (n) {return (n*3);}, function (x) { return function (n) {return x + n}}(1))(10))



On récupère un pilote fictif de base de données 'reqSql'. Il permet d'interroger une base de données, sous la forme de requêtes sql et sa spécification est la suivante :
- Le pilote peut s'utiliser soit sous la forme de callbacks avec erreur en premier paramètre soit sous la forme de promesses then/catch. Il répond donc aux deux API suivantes :
       <functionName>(p1, <callbackErr>, <callbackOk>)
       <promise> <functionName>(p1)
- Il s'utilise en deux phases  (* Voir en bas pour des exemples) :
      1 une connexion doit être initialement établie (appel `connect`). La connexion se fait sur une url donnée sous la forme de chaîne de caractères, et renvoie un objet de connexion ou une erreur.
      2 l'utilisateur peut utiliser l'objet retourné pour invoquer des requêtes (appel `exec`) sql sous la forme d'une chaine de caractères.  
      - Si la requête ne lève pas d'erreur, il retourne un tableau d'objets contenant le résultat sous un format json.

2.1 Donnez un exemple complet d'utilisation du driver sans traitement d'erreur en mode callback (4 pts)

db = require("reqSql")
db.connect("db://toto.com/mabase", function(err, res) {
  res.exec("select * from etudiants", function(err, cols) {
    cols.forEach(function(elem) {
      console.log("->" elem)
    }
  })
})

2.2 Donnez un exemple complet d'utilisation du driver en mode promesse. (2pts)
db = require("reqSql")
db.connect("db://toto.com/mabase")
.then( function (res) {
  res.exec("select * from etudiants")
})
.then (function (cols) {
  cols.forEach(function (elem)) {
    console.log("->", elem)
  }
})


2.3 Donnez un exemple de traitement d'erreur le plus compact possible (2pts)
db = require("reqSql")
db.connect("db://toto.com/mabase")
.then( function (res) {
  res.exec("select * from etudiants")
})
.then (function (cols) {
  cols.forEach(function (elem)) {
    console.log("->", elem)
  }
})
.catch (function (err) {
  console.log("Erreur", err)
})

2.4 Donner un code d'utilisation en mode callback avec traitement des erreurs (1pts)
db = require("reqSql")
db.connect("db://toto.com/mabase", function(err, res) {
  if (err) {
    return throws new Error()
  }
  res.exec("select * from etudiants", function(err, cols) {
    if (err) {
      return throws new Error()
    }
    cols.forEach(function(elem) {
      console.log("->" elem)
    }
  })
})

Compléments
------
* Une url typique de connexion : 'db://toto.com/mabase'
* Une requête et une réponse sql typique :
    'select * from étudiants' -> [{'nom': 'Stéphane', 'id': 1213}, {'nom': 'Frédérique', 'id': 1413} ]
