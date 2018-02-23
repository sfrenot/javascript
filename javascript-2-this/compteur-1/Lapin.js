function Lapin (couleur) {
  this.couleur = couleur;
  this.parle = function (phrase) {
    console.log("Le Lapin ", this.couleur, " dit ", phrase, " .");
  }
}

var lapinTueur = new Lapin("blanc");
lapinTueur.parle("Groumpf");

