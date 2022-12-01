# Projet ELP javascript

Dans ce projet vous devez réaliser une interface en ligne de commande interactive permettant d'exécuter des fonctions du système d'exploitation. Pour faire simple vous devez développer un shell en javascript. Vous trouverez également le terme de CLI (Command Line Interface) interactif.  

- un CLI est une commande invoquée avec des paramètres comme par exemple `git`. 
- un CLI interactif est un environnement permettant de lancer un ensemble de commandes


Un CLI interfactif répond au principe de REPL pour Read - Eval - Print - Loop.   

Read : Lecture de la commande  
Eval : Exéctution de la commande  
Print : Affichage du résultat  
Loop : C'est reparti....  

Bash est donc un CLI interactif. 

## Shell en Javascript
Vous devez donc réaliser un shell en node qui présente les caractéristiques suivantes :   
- Boucler de manière infinie,
- Pouvoir exécuter au premier plan un programme du système d'exploitation en indiquant son chemin d'accès (absolu ou relatif : / ou ..), ou qu'il soit dans une variable PATH récupérée de l'environnement shell de l'utilisateur au démarrage. 
- Lister les processus en cours (en numérotant à partir de 1 dans le shell) avec la commande `lp`
- Pouvoir tuer, mettre en pause ou reprendre un processus avec une commmande `bing [-k|-p|-c] <processId>`
- Pouvoir exécuter en tâche de fond un programme avec le postfix '!'
- Sortir du shell sur CTRl-P
- Détacher certains processus du CLIi avec la commande `keep`

Pour les différentes commandes vous pouvez utiliser les commandes du shel présentes, mais vous devez les `emballer` pour limiter les options et rendre votre shell le plus simple possible. 

## Jeu de test


## Pistes d'études
Il existe de nombreux outils et paquages javascript qui peuvent vous aider à réaliser votre système. 


- prompt : permet d'intéragir avec un utilisateur pour récupérer 
- inquire : 
- node REPL : 
- 









