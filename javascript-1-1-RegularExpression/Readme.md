# Les RE - Quick start
Les expressions régulières ou expressions rationnelles (*Regular expressions*) est un langage de recherche de modèle de correspondance (*pattern*) et de substitution dans une chaîne de caractères.

Les expressions régulières sont très utiles dans le traitement d'information textuelles afin de pouvoir faire de nombreuses correspondances et remplacements. Le Web étant majoritairement orienté texte, par opposition aux approches binaires, il est naturel que les expressions régulières sont omniprésentes.

Le langage des expressions régulières est un langage non *turing complet* qui est indépendant des langages de programmations ou des éditeurs de texte. On peut vouloir utiliser des expressions régulières aussi bien dans un programme qu'en éditant un texte ou un tableau de données textuelles.

De base une expression régulière s'exprime avec trois paramètres.
```javascript
/<pattern recherché>/<pattern de remplacement>/<modificateurs>
```
Q1 : remplacer le code suivant par l'équivalent dans une expression régulière.
`"a ba a".replace("a", "z")`

Q2 : avez vous des remarques

Pour la suite de l'exercice nous utiliserons la fonction `replace(<regexp>, '<Substitution>')`

## Les modificateurs
Il y a deux modificateurs de base :
- i : permet de ne pas distinguer minuscules et majuscules dans l'expression
- g : permet de répéter le *pattern* autant de fois que possible

Q2 : replacer dans le texte suivant toutes les occurrences de stephane par george

```javascript
a = "Bonjour M. stephane.\n Je m\'appelle Stephane. Super Stephane"
```

**Remarque : il existe quelques autres modificateurs**

## Le langage d'expression
(nb vous pouvez tester tout cela directement dans votre éditeur compatible 'expression régulière')

/a/ -> le caractère 'a'  
/ab/ -> la suite de caractères ab  
/./ -> n'importe quel caractère  
/a*/ -> une répétition de 'a'  
/^/ -> Début de ligne  
/$/ -> Fin de ligne  
...

Q1 : Supprimer le premier caractère de la chaine
`Hello World`

Q2 : Supprimer la première ligne
```javascript
  a = Hello World.\n Good bye world
```

## Les groupes
Le langage d'expressions régulières n'est pas *turing complet*. Il peut être nécessaire d'extraire des parties pour les réutiliser dans le remplacement.

Un groupe se délimite avec des (). Pour rappeler le résultat, le langage génère une variable automatique $x (x pour le numéro du groupe).
*// Attention en fonction de l'environnement, le symbole $ peut être différent*

Q3 : Remplacer dans la chaîne précédente `a` toutes les occurrences de World par 'World of stephane' en conservant les minuscules et majuscules.

Q4 : Remplacer dans le texte suivant les parenthèses par des guillemets.
```javascript
   a = "Je suis âgé de dix (10) ans"
```
Remarque : l'alternative entre deux possibilités s'exprime avec le symbole '|'. `/a|b/` indique le caractère 'a' ou le caractère 'b'.

## Fonctions javascript
Javascript fournit de nombreuses fonctions pour le traitement des expressions régulières. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference

`test` : La méthode test() vérifie s'il y a une correspondance entre un texte et une expression rationnelle. Elle retourne true en cas de succès et false dans le cas contraire.

`match` : La méthode match() permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.

`exec` : La méthode exec() exécute la recherche d'une correspondance sur une chaîne de caractères donnée. Elle renvoie un tableau contenant les résultats ou null.

Une des fonctions classiquement utilisées est la fonction split, qui permet de découper une chaine en sous-chaînes selon un caractère de séparation. Les expressions régulières permettent de découper selon une expression régulière.

Q5 : En utilisant la fonction `split`, décomposez la chaine suivante `"Hello 1 word. Sentence number 2."` sur les chiffres.

Remarques : l'expression régulière d'un caractère numérique est `\d`.

Q5 : testez la fonction split avec et sans conservation du groupe de recherche.


-----
A la fin de ces exercices vous devez avoir travaillé les compétence suivantes :

C7 - Mettre en œuvre, réaliser, développer, déployer des programmes informatiques
Capacités
  - Ecrire des expressions régulières simples

Connaissances : 
  - Structure d'un langage d'expressions régulières
  - Fonctions de base : replace, split, test, match, exec
  - Principe du caractère d'échappement
  - Symboles du langage : ^, $, ., *, |, \, \d
