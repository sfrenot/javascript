Etude du point fixe de fonction, lambda et récursivité.

Vous écrirez l'ensemble des fonctions demandées dans un fichier unique <etudiant>.js, que vous déposerez sous moodle à la fin de l'exercice. Les fonctions inutiles seront commentées au besoin à la correction.

---
Le point fixe d'une fonction est la valeur obtenue lorsque l'on appelle la fonction avec le même paramètre un nombre de fois suffisant pour que la valeur converge.

Par exemple cos(0) converge vers un point fixe.

# Valeur de convergence de cos(0)
Vous pouvez utiliser n'importe quelle machine à calculer pour trouver le point fixe de cos(1).
!!! Faites bien attention de travailler en radians
 **Q1 - Quelle est donc cette valeur ?**
 **Q2 - Combien avez-vous eu besoin d'itérations pour l'obtenir ?**

# Code javascript
## Impératif
**Q3 - Réalisez une boucle de 100 itérations, permettant de visualiser la convergence.**
La fonction Math.cos(x) permet de calculer le cos d'une valeur.

## Fonctionnel
**Q4 - Réalisez l'équivalent récursif de cette fonction.**
Votre fonction doit crasher au bout d'un certain nombre d'itérations. Quelle est l'intitulé de l'erreur.

## Fonctionnel javascript
**Q5 - Corrigez votre fonction afin qu'elle ne crashe plus.**
!!! Mais elle reste une boucle infinie d'affichage

--- Arrivé ICI vous avez la moyenne
## Amusons-nous avez les lambda (ou pas)
** Q6 - Que fait la fonction suivante ?**
```javascript
fact = function(x) { return x === 0 ? 1 : x * fact(x-1)}
console.log(fact(5))
```

Le problème des lambda, est qu'elle ne peuvent pas avoir de nom... `fact` n'est pas possible dans l'univers des lambda.
La question à résoudre est de trouver une technique pour réaliser une récursion sans pouvoir nommer la fonction...

```javascript
console.log(function(x) { return x === 0 ? 1 : x * fact(x-1)}(5))
```
Testez la lambda suivante...
**Q7 - Quelle est l'erreur ?**

Vous allez essayer faire une récursion à base de fonctions anonymes. Le but final est de pouvoir invoquer la fonction comme une lambda anonyme.

**Q8 - transformation initiale**
On va transformer la fonction en passant par un foncteur.
Le code suivant permet de calculer des factorielles.
Jusqu'à quelle valeurs ?
```javascript
error = function(n) { throw "ERREUR ICI"}

make_fact = function(partial) {
  return function(n) {return n === 0 ? 1 : n * partial(n-1)}
}

f0 = make_fact(error)
f1 = make_fact(f0)
f2 = make_fact(f1)
f3 = make_fact(f2)
fx = make_fact(f3)

console.log(fx())
```

**Q9 - transformez l'appel fx dans une lambda.**

**10 - Inlining général
Le code suivant utilise une lambda, mais la recursion reste exprimée à la main.
