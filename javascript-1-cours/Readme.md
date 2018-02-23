# JavaScript
---
Ce TD suppose une connaissance initiale en programmation impérative C et en approche objet Java.

Mars 2014 - [Stéphane Frénot](mailto:stephane.frenot@insa-lyon.fr), INSA Lyon / Telecom

JavaScript est un langage de programmation initialement introduit dans les navigateurs Web afin de rendre les pages HTML plus dynamiques dans leurs interactions avec l'utilisateur. Des optimisations en performances lui ont permis de se hisser comme un langage de programmation efficace aussi bien au niveau du client qu'au niveau du serveur. Il est nécessaire dans une cadre d'ingénierie informatique de bien connaitre ce langage dans le contexte du Web actuel, car vous serez nécessairement confronté un jour à son utilisation. S'il est souvent présenté comme un langage mal conçu, il est en passe de devenir le langage de référence d'Internet. Certains groupes comme Google ont véritablement parié sur ce langage autant que sur l'alternative Java par exemple. Ce cours essaye d'expliquer rapidement le contexte d'utilisation de JavaScript afin d'en comprendre les pièges et les freins initiaux.

Un cours de synthèse : [Damien Reimert](http://cours.reimert.fr/javascript.html#)  
Un autre cours : [Stéphane Frénot](http://perso.citi.insa-lyon.fr/sfrenot/cours/TSE-2016/JavaScriptTSE-html)

Le livre à lire est : [Eloquent Javascript](http://eloquentjavascript.net/Eloquent_JavaScript.pdf)  

JavaScript est un langage faiblement typé, avec peu de contrôle.

**Avez-vous une idée de la raison ?**

### Installation
Nous utilisons [nodejs](http://nodejs.org), comme interpréteur de programme JavaScript. Si vous utilisez les machines du département, je vous recommande d'installer node sur le répertoire /tmp de la machine de connexion.
```bash
    cd /tmp
    wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.xz
    tar xvf ./node-v8.9.4-linux-x64.tar.xz
    echo "export PATH=$PATH:/tmp/node-v8.9.4-linux-x64/bin" >> ~/.bashrc
    . ~/.bashrc
    cd
```

** Avez-vous compris ces lignes ?**

L'interpreteur se lance avec la commande `node`.

### Lancement
Il existe deux manières de l'utiliser.

    node // pour lancer l'interpreteur interactif
    node toto.js // pour lancer un script écrit dans un fichier

Il n'existe pas de programme 'le plus simple' car il n'y a aucune contrainte imposée par le langage. Par exemple, il n'y a pas de phase de compilation, ou de contrôle. Voici un exemple de programme simple. (Evidemment, on peut faire plus simple). Pour voir le résultat d'exécution, vous pouvez ouvrir la console javascript dans votre navigateur

    Chrome :
      Mac : Cmd+alt+j
      Windows : Ctrl+Maj+j
    Firefox :
      Mac : Cmd+alt+k
      Windows : Ctrl+Maj+k
    Internet Explorer : F12
    Safari : Cmd+alt+c

ou utiliser nodejs en mode interactif.
```javascript
i = 1
console.log("coucou " + i)
  ```

**Essayez donc ce programme dans les deux modes**   
**Quels sont vos commentaires ?**

Vous pouvez également lancer ce programme dans votre navigateur Web préféré. Soit avec la console interactive, soit en écrivant une page html qui charge le script.

```html
<html>
   <script src="./toto.js"></script>
</html>
```

### Les types de données
Une variable n'a pas a être déclarée, elle sera 'typé' en fonction de son usage.

    1. numériques : i = 2012 //Attention la limite est de 2^52 (10^15)
    2. string : a = "coucou"
    3. booleen : b = true
    4. fonction : c = function () {}
    5. expression régulière : d = /a/

Une variable peut être déclarée avant son usage avec le mot clé let. Elle est alors initialisée à "undefined".

```javascript
let x
console.log(x)
```

Q0 : testez le type RE avec la fonction JS test().
Q0.1 : Où trouver de la documentation ?

### Les structures de controle
javascript possède des structures de contrôle algorithmiques comme tous les langages.

    if / else if / else
    while ()
    do {} while ()
    for () / break
    switch() / case / break

### Les fonctions
javascript permet de capturer les algorithmes dans des fonctions. Le programme initial (votre navigateur ou votre interpréteur javascript) est également une fonction.

```javascript
    function somme(a, b) {
       return a+b
    }

    console.log(somme(2,3))
```

_Les ';' sont optionnels si vous avez une instruction par ligne. Mais on est souvent habitué à mettre un ';'_

**Ecrire le programme correspondant à somme en javascript et en Java, exécuter. Quels sont vos commentaires ?**

Les fonctions s'écrivent de trois manières :

* La déclaration de fonction
```javascript

        function toto(x) {
          console.log("->", x);
        }
```

toto est nommé explicitement, la fonction est disponible dès le lancement du script. L'invocation se fait par `toto('coucou')`.

* L'expression de fonction
```javascript
         let a = function (x) {
           console.log("-->", x);
         }
```

La fonction est anonyme, mais elle est associée à la variable `a`. Elle n'est disponible qu'à partir de sa déclaration. L'invocation se fait par `a('coucou')`.

* l'expression de fonction avec l'opérateur flèche
```javascript
    let a = (x) => {
      console.log("--->",x );
    }
```

C'est une écriture strictement équivalente à l'expression de fonction mais qui permet de compacter les écritures. L'invocation est donc la même.

** Dans les codes précédents, qu'est ce qu'un paramètre de fonction, qu'est-ce qu'un argument de fonction ? **

Une fonction renvoie `undefined` sauf s'il est spécifié autre chose avec l'instruction `return`. L'instruction `return` arrête l'exécution de la fonction.

## Un langage 'avancé' basé sur les fonctions
Javascript est un langage issu de la communauté des langages fonctionnels stricts (scheme). Il présente une caractéristique forte d'être compatible avec ce paradigme (sans la notion de pureté). C'est à dire que les fonctions sont des éléments de premier ordre, au même niveau que les variables. Ainsi une variable peut être de type fonction, et une fonction peut être passée en paramètre à une autre fonction ou passée comme retour de fonction.

### Avant d'aller dans les détails fonctionnels
Evacuons un côté humoristique de javascript.

```javascript
null == undefined
false == 0
"" == 0
"5" == 5
```

**Quelqu'un a une explication ?**
**La solution est...**
**Rejouez les tests avec ===**

Solution de fermat
```javascript
Math.pow(57055, 3) + Math.pow(339590, 3) == Math.pow(340126, 3)
```

Quelques codes désagréables

```javascript
    "Appolo" + 5
    null + "ify"
    "5" * 5
    "strawberry" * 5
```
**Comment "blinder" tout cela ?**

### Bon, passons aux choses sérieuses avec nos fonctions
Une variable peut être de type fonction (et c'est là que cela va commencer à faire mal à la tête.)

```javascript
    let a = function(a,b) { return a + b }
    console.log(a(4,5))
```

Et évidemment, on peut maintenant tout casser, car on peut mettre n'importe quoi dans une fonction. En gros il n'y aucune règle.

```javascript
    console.log = "a"
```

## Comparons deux programmes de multiplications
Vous allez comparer deux approches d'appel de fonction. Un appel qui renvoie directement le résultat d'un calcul et un appel qui renvoie une fonction capable de calculer un résultat.

### Calcul direct, indirect foncteur
Q1 Ecrire la fonction multiplie(a, b) qui renvoie le résultat d'une multiplication entre a et b.
Ecrire le programme de test de cette fonction. Tout peut se faire dans le même fichier.

Q2 Ecrire la fonction multiplieur(a) qui renvoie une fonction capable de réaliser la multiplication par a. Invoquer cette fonction avec b en paramètre. Réalisez la même multiplication qu'auparavant.

Prenez une pause pour comprendre ce code et posez vos questions.

### Langage fonctionnel pur ou closure ?
Q4 Testez et comprenez le code suivant. Que faut-il ajouter au principe de fonctions pour que cela soit possible ?

```javascript
    function create() {
      let reponse = 23;
      return function (x) { return x + reponse; }
    }

    let a = create()
    console.log(a(12))
```

### Scope implicite vs Objet
Le code suivant utilise plutôt un paradigme objet pour réaliser l'action.

```javascript
    function create() {
      this.reponse = 23;
      this.calc = function (x) { return x + this.reponse; }
    }

    let a = new create()
    console.log(a.calc(12))
```
### Nombre de paramètres d'une fonction et principe de curryfication.

```javascript
    function moins(a, b, c) {
      return (a - b);
    }

    console.log(moins(3, 2));
    console.log(moins(3, 2, 4, 8));
    console.log(moins(2));
```

### Allons, respirons un peu avec les objets et les tableaux
Un objet n'est pas un objet Java ... Mais une HashMap, une Map, un tableau Associatif. Bref une structure qui gère des équivalences clé valeurs.
Q5 : Pourquoi est-ce un objet ?
```javascript
    let chose = { "hello" : "coucou", 3:10}
    chose["3"];
    -> 10
    chose.hello;
    -> coucou
    delete chose.hello;
    chose
    for (o in chose) {
      console.log( o + '->' + chose[o])
    }
```
Les tableaux existent.
```javascript
    mesAmis = ["bob", "raoul", "louis"]
    for (i = 0; i < mesAmis.length; i++) {
      console.log("->" + mesAmis[i]);
    }
    tesAmis = new Array();
    tesAmis.push(1);
    tesAmis.push('leon');
```
**Une petite remarque. Dans l'exemple précédent, que se passe t'il si on remplace :

```javascript
console.log("->" + mesAmis[i])
par
console.log("->", mesAmis[i])
```
**Discutons du format JSON**

#### Map / Reduce ####
La manipulation de tableau se fait avec deux opérateurs de référence. map et reduce. Les connaissez-vous ?

Q5.1 : Calculez la moyenne d'un tableau en utilisant la fonction reduce.

Q5.2 : Passez en majuscule toutes les entrées d'un tableau de prénoms.

Q5.3 : A partir d'un tableau retirez 2 points, puis calculez la moyenne résultante.

Tous les traitements massifs de données peuvent se faire avec des combinaisons de ces deux opérateurs.




### Les méthodes ###
```javascript
    doe = "Doe"
    typeof doe.toUpperCase
    doe.toUpperCase()
```

### Les variables automatiques ###
```javascript
    function arguments() {
      return "Vous avez fourni " + arguments.length + " arguments.";
    }
    arguments(1, 2, 3, "toto")
```
***Une remarque particulière sur le code précédent ?***

### Les exceptions ###
Pareil que pour java / throw + try/catch

### Les fonctions d'ordre supérieur. Ou l'approche fonctionnelle ###

Prenez un tableau de valeurs.
Parcourez, et afficher les  valeurs de trois manières.
- 1 En utilisant la boucle for
- 2 En utilisant la construction javascript forEach

Une fois que les deux premiers exemples sont traités, nous passons à l'utilsation d'un module externe.
- 3 En utilisant la bibliothèque lodash

Pour utiliser lodash, il faut utiliser un module externe. L'outil de gestion s'appelle npm pour Node Package Manager. Nous le détaillerons plus tard.

npm quick and dirty
----
L'utilisation d'un module se fait en trois étapes.
1. Installation du module dans l'environnement
2. Déclaration d'une variable associée à l'objet représentant le module
3. Utilisation des fonctions fournies

On va donc utiliser lodash pour parcourir le tableau.

Chercher sur Internet la documentation de lodash, et trouvez la fonction de parcours de collection.

```javascript
// 1. Installation du module lodash avec npm
npm install lodash

// 2. Déclaration de la variable de
//    manipulation de la bibliothèque
_ = require('lodash'); // Require est une fonction node qui
                       // permet de charger un 'module'.
                       // Npm est un gestionnaire de module externe.

// 3. Utilisation d'une fonction fournie
_.sortBy([1, 4, 3]); // '_' est le nom de la variable que vous
                     // avez choisi pour représenter la librairie
                     // lodash dans votre programme ou votre
                     // environnement d'exécution
```

Comparez les trois approches de parcours de la collection.

# Le sujet de base pour la première séance s'arrête ici.
A la fin de cette séance, vous devez avoir compris la syntaxe générale de javascript.
Comprendre un programme prenant en paramètre des fonctions ou retournant une fonction.
Il y a quelques exercices supplémentaires de programmation fonctionnelle si vous en voulez plus issus du livre Eloquent Javascript.

Les fonctions d'ordre supérieur prennent des fonctions en paramètre, et peuvent donc les appliquer dans leur exécution.

Prenons l'exemple du parcours d'un tableau.

```javascript
    function afficheTableau(tableau) {
      for (i = 0; i < tableau.length; i++; ) {
        console.log(tableau[i])
      }
    }
```
** Réalisez une fonction 'logEach' qui prend un tableau en paramètre et fait un console.log sur chaque paramètre

** Puis, transformez donc ce code dans une fonction générique `forEach` permettant d'appliquer une fonction quelconque à tous les membres du tableau. Utilisez-là pour afficher les valeurs du tableau sur la console, puis pour faire une somme d'éléments d'un tableau**

---
On peut également renvoyer une fonction. Que fait la fonction suivante ?

```javascript
    function negate(func) {
      return function(x) {
        return !func(x)
      }
    }
```

**Ecrire la fonction de comparaison d'un nombre par rapport à 0 et appliquez la version negate dessus.**

 En plus générique.

```javascript
    function negate(func) {
      return function() {
        return !func.apply(null, arguments)
      }
    }
```

**Qu'est ce que que cela apporte ?**

```javascript
    let op = {
      "+": function (a, b) { return a+b; },
      "-": function (a, b) { return a-b; }
    }

    reduce (op["+"], 0, [1, 2, 3]) // On gagne la déclaration d'une fonction add

    function partial (func) { // La fonction construit une nouvelle fonction, avec des       paramètres partiellement fournis
      let knownArgs = arguments;
      return function () {
        let realArgs = [];
        for (let i=1; i < knownArgs.length; i++) {
          realArgs.push(knownArgs[i]);
        }  
        for (let i=0; i<arguments.length;i ++) {
          realArgs.push(arguments[i]);
        }  
        return func.apply(null, realArgs);
      };  
    }

    map(partial(op["+"],1), [0,2,4]))  // Ici ca devient vraiment fonctionnel ...   
```

**Que fait le code fonctionnel suivant ?**
```javascript
    function aDécouvrir(f1, f2) {
      return function () {
        return f1(f2.apply(null, arguments))
      }
    }
```
Pour se détendre [wat](https://www.destroyallsoftware.com/talks/wat)  
Linux dans javascript [bellard](http://bellard.org/jslinux/)  
Douglas Crockford, javascript leader [crockford](http://en.wikipedia.org/wiki/Douglas_Crockford)  
Description du new [stackOverflow](http://stackoverflow.com/questions/383402/is-javascript-s-new-keyword-considered-harmful)  
Description du this [stackOverflow](http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript)  
Dessin du this[schema this](http://zeekat.nl/articles/constructors-considered-mildly-confusing.html)  
Programmation fonctionelle [ruby](https://www.youtube.com/watch?v=FITJMJjASUs)
Statique ou dynamique [video](http://vimeo.com/74354480)

CT JS : [video](https://www.youtube.com/watch?v=PtD-WKSC6ak)

---
# Pourquoi faire du JavaScript ?
Javascript est certainement aujourd'hui le plus gros ecosystème numérique. Il va concerner les aspects communautaires suivants :

- Développement d'applications :   
  * n'importe qui peut développer en Javascript, et l'exécuter sans 'temps mort'.
  * Démarrer par les interfaces Web permet d'avoir un MVP[^1] tiré par l'usage (UX).
  * L'infrastructure nodejs[^2] permet d'envisager des développements logiciels monolangages de bout en bout. LinkedIn, NetFlix, Paypal
- Développement de plugins : (Nature fonctionnelle)
  * Les fonctions basiques sont développés de manière autonomes. Certains plugins sont maintenant incontournables :
    * jquery
    * underscore
    * bootstrap
  * Nombreux gestionnaires de bibliothèques : bower (client), npm (serveur), require, standardisation des modules
- Intégration dans tous les grands systèmes : facebook, linkedin
- Infrastructures de référence : angularjs, amberjs, phonegap, cordovajs,
- Runtime : os, nodejs, v8, navigateurs
  * Navigateurs Web : fixe, tablettes, smartphone
  * Machines virtuelles : v8, fantomjs
  * Systèmes d'exploitation
- Sur Langages : coffeescript, typescript

---
- Assembleur du web
- Jungle stimulante
- Approche modulaire/fonctionnelle, facile de développer
- Pas de 'spécialiste' de domaine précis
- Effet reseau (github)
- Normalisation ECMA  

---
- Le but n'est pas d'enseigner exclusivement JavaScript, mais d'être prêt sur le plus gros ecosystème connu.
- Menaces : dart, jungle complexe (mais vrai challenge), mauvais programmeur (mais c'est le cas dans tous les langages).


[^1]: Minimum Viable Product : Lean startup, E. Ries
[^2]: NodeJs : [http://nodejs.org](http://nodejs.org)
