# Réalisation d'un jeu de cartes multi-joueurs
En partant des [règles](./Regles-Flp-7-vf.pdf).

L'objectif est de réaliser le jeu en mode texte. 
Vous devez pouvoir jouer à n joueurs
Toutes les tours des joueurs doivent être enregistrés dans un fichier.

Dans une première étape vous pouvez réaliser le jeu en partageant le clavier à chaque proposition de joueur. 

Vous pouvez utiliser tous les outils à votre disposition (chatgpt, stackoverflow, copilot...), mais le code est exclusivement écrit en javascript pour nodejs, et le code doit être versionné sur un dépot git. (github ou gitlab) accessible. 

Le code peut être réalisé à plusieurs (4 ?) 

Il doit être accompagné d'un Readme.md minimaliste permettant de lancer le jeu et de comprendre le format du fichier d'enregistrement des manches jouées.

# Si vous êtes en avance vous pouvez essayer des extensions
- jouer sur deux machines différentes avec une connexion tcp entre les deux
- donnez des stats d'usage
- donnez une IA qui peut estimer s'il faut tirer ou pas une carte
- en regroupant le code commun, réalisez un autre jeu de cartes de règles différentes : par exemple, [odin](https://media.play-in.com/pdf/rules_games/odin_fr.pdf), [luz](https://iello.fr/wp-content/uploads/2024/10/Luz_Rulebook_FR_Light.pdf), [The Gang](https://iello.fr/wp-content/uploads/2024/12/TheGang_Manual_FR_V1.pdf)

# Un seul conseil
Restez le plus simple possible, mais fonctionnel avec un code propre.
Il faut mieux un jeu initialement simple, qui ne couvre pas toutes les fonctions mais qui tourne à un jeu super avancé mais qui ne fonctionne pas. 

Définition de "Ne fonctionne pas".
Le jeu ne fonctionne pas si : 
 - il ne démarre pas
 - il ne termine pas
 - il termine avant la fin

Le reste peut se négocier
