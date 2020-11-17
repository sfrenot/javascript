# Etude du point fixe de fonction, recursivité et promesses.

Vous écrirez l'ensemble des fonctions demandées dans un fichier unique <etudiant>.js, que vous déposerez sous moodle à la fin de l'exercice. Les fonctions seront commentées/decommentées au besoin à la correction.

---
Le point fixe d'une fonction est la valeur obtenue lorsque l'on appelle la fonction avec le paramètre du résultat précédent un nombre de fois suffisant pour que la valeur converge.

Par exemple cos(1) converge vers un point fixe.

# Convergence de cos(1)
Vous pouvez utiliser n'importe quelle machine à calculer pour trouver le point fixe de cos(1).
!!! Faites bien attention de travailler en radians  
**0,5 Q1 - Quelle est donc cette valeur ?**  

# Javascript
## Impératif
**0,5 Q2 - Réalisez une boucle impérative de 100 itérations, permettant de visualiser la convergence.**  
La fonction Math.cos(x) permet de calculer le cos d'une valeur.

## Fonctionnel
**0,5 Q3 - Réalisez l'équivalent récursif de cette fonction.**  

Votre fonction doit crasher au bout d'un certain nombre d'itérations.  
**0,5 Q4 - Quel est l'intitulé de l'erreur.**  
**1 Q5 - Que se passe t'il ?**

## Fonctionnel javascript  
!!! En conservant l'exécution infinie.  
**2 Q6 - Corrigez votre fonction afin qu'elle ne _crashe_ plus.**  

**1 Q7 - Arrêt de de la récursion**  
Ajoutez une condition d'arrêt à votre récursion, afin de sortir du programme quand le point fixe est atteint.
!!! La sortie se fait avec `process.exit(0)`  

# Promesses
## Lecture d'un fichier
**1 Q8 Lire un fichier toto.txt, en utilisant le mécanisme de promesse, et la bibliothèque npm `fs-extra`**

## Utilisation
Nous venons de _promessifier_ la fonction précédente.   
**2 Q9 Ecrivez le code d'utilisation de cette promesse.**

```javascript
prom = function(val) {
  return new Promise(function(resolve) {
    calculCos = function (val, r) {
      res = Math.cos(val)
      if (res === val) {
        return r(res)
      }
      setTimeout(calculCos, 0, res, r)
    }
    calculCos(val, resolve)
  })
}
```

**1 Q10 Donnez la liste des fonctions qui s'exécutent dans l'event queue.**
