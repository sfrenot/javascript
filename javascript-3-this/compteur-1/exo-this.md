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

