## I Javascript (8pts)
Répondez directement dans ce document et sauvegardez le fichier.

**1 Questions de cours sur les langages (3pts)**
> Donnez 3 traits caractéristiques d'un langage functionnel (1 pt)

> Donnez 3 traits caractéristiques d'une langage objet (1 pt)

> Donnez 3 traits caractéristiques d'un langage non natif (1 pt)

**2 Questions de cours sur javascript (5 pts)**
> Ecrivez un code impératif affichant les éléments du tableau [23, 24, 27] (0.5 pt)

> Ecrivez un code fonctionnel affichant les éléments du tableau [23, 24, 27] (0.5 pt)

> Ecrivez le code de lecture d'un fichier "/tmp/toto.txt" sous la forme de callback (2 pts)

> Ecrivez le code de lecture d'un fichier "/tmp/toto.txt" sous la forme d'une promesse (2 pts)

## II Coffeescript !!! (12pts)
Coffeescript est un sur-langage à javascript. C'est à dire qu'il propose une syntaxe légèrement différente mais génère du code javascript.

**Installez le module coffeescript en utilisant npm**  
`npm install coffeescript`  
Le système installe un compilateur coffee
dans le répertoire `node_modules/coffeescript/bin/`
Pour vous simplifiez la vie pour la suite, vous pouvez ajouter ce répertoire dans votre PATH.

### Syntaxe (7pts)
**1 Installation (0.5pt)**
Testez votre installation en lançant la commande 'coffee -v' (0.2pt)
> Copiez le message de sortie

Testez le code suivant (0.3pt)
```bash
$ coffee -e "console.log 'coucou'"
```
> Avez-vous une première observation sur la syntaxe du langage coffeescript ?

**2 Testez la syntaxe (4,5pt)**
Testez avec la commande `coffee ./test.coffee` le script de test.
> Copiez le résultat de l'exécution (0,5)

> Avez-vous quatres observations supplémentaires sur la syntaxe du langage coffeescript ? (4 x 1 pt)

1-
2-
3-
4-

**3 Vérification js (2pts)**
Vous pouvez 'compiler' le code coffee vers javascript avec l'option '-c'.
>Générez et copiez ici le code javascript généré. (1 pt)

>Comment tester que le code produit le même résultat ? (1 pt)

### Comprendre du code (5pts)
Le script `script.coffee` fait quelque chose, mais quoi ?
*Attention, avant de trop detruire le script, pensez à en faire une copie de sauvegarde...*

**1 Lancement Script externe (3pts)**
>Lancez le code, et copiez le résultat ici.  

*Attention!, il se peut qu'il vous manquasse quelques modules. La commande permettant de les ajouter est : `npm install <monmodule>`*

**2 Explications (2pts)**
Que fait ce code ? (4 x 0.5pt)
Intéressez-vous à expliquer principalement les groupes de lignes :  
> [16-19] -  
[21-22] -  
[24-31] -  
[36] -  
