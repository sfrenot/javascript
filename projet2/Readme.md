# Réalisation du jeu Jarnac
En partant des [règles](./RegleJarnac.pdf) du jeu [jarnac](https://blackrockgames.fr/upload/imgs/810/boutiques/Jarnac%20fiche%20produit.pdf)

L'objectif est de réaliser le jeu en mode texte. 
Tous les "coups" des deux joueurs doivent être enregistrés dans un fichier.

Dans une première étape vous pouvez réaliser le jeu en partageant le clavier à chaque proposition de joueur. 

Vous pouvez utiliser tous les outils à votre disposition (chatgpt, stackoverflow, copilot...), mais le code est exclusivement écrit en javascript pour nodejs, et le code doit être versionné sur un dépot git. (github ou gitlab) accessible. 

Le code peut être réalisé à plusieurs. 

Il doit être accompagné d'un Readme.md minimaliste permettant de lancer le jeu et de comprendre le format du fichier d'enregistrement des coups joués.

# Si vous êtes en avance vous pouvez essayer des extensions
- donner un temps limité par joueur
- séparer le jeu sur deux fenêtre liées par le fichier de log des coups
- jouer sur deux machines différentes avec une connexion tcp entre les deux
- vérifier dans un dictionnaire externe chaque proposition
- proposer la meilleur proposition possible avec un dictionnaire


# Un seul conseil
Restez le plus simple possible, mais fonctionnel avec un code propre.
Il faut mieux un jeu initialement simple, qui ne couvre pas toutes les fonctions mais qui tourne à un jeu super avancé mais qui ne fonctionne pas. 

Définition de "Ne fonctionne pas".
Le jeu ne fonctionne pas si : 
 - il ne démarre pas
 - il ne termine pas
 - il termine avant la fin

Le reste peu se négocier
