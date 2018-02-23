L'objectif de ce TD est double. Découvrir coffeescript comme sur-langage à JavaScript et comprendre le mot-clé this. 
L'exercice se fera sous io.js ou node.js.

** Prérequis : Installation d'un interpréteur et nodejs ou io.js **

# CoffeeScript
Coffeescript est décrit sur ce site Web. Nous n'allons pas tout étudier, mais deux constructions sont interessantes. 

L'opérateur `->`remplace la déclaration de fonction, et la supression  des `{}`comme délimiteurs de bloc pour les remplacer par des indentations. 

La possibilité de définir des classes.

    Vérifier que nodejs est installé
    Installez coffee-script : npm install coffee-script
    Consultez la documentation coffeescript pour comprendre la déclaration de classes
    
Traduire le code suivant en classe coffeeScript et vérifier que le code fonctionne
    
    function Lapin (couleur) {
      this.couleur = couleur;
      this.parle = function (phrase) {
        console.log("Le Lapin ", this.couleur, " dit ", phrase, " .");
      }
    }

    var lapinTueur = new Lapin("blanc");
    lapinTueur.parle("Groumpf");

# Ecrire le code coffee similaire à cette classe javascript

    var Counter = function () {
      this.count = 0;
      this.tick = function () {
        this.count++;
        console.log(this.count);
      }
    };

    var myCounter = new Counter();
    myCounter.tick()
    myCounter.tick()
    myCounter.tick()

# Utilisez une classe coffee à la place d'une simple traduction du code


# Ajouter un timeout pour un second appel.
    var myCounter = new Counter()
    myCounter.tick()
    setTimeout(myCounter, 1000)

-> Que se passe t'il ?  
-> Lire la document de this sur <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this>   
-> Corriger le code   


# Corrigez votre classe coffee, pour éviter cela

# Généralisez le problème de this

# Refs
Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014
https://www.youtube.com/watch?v=8aGhZQkoFbQ

