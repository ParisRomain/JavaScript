var nombreUtilisateur = Number(prompt("Entrez le nombre dont vous voulez la table de multiplication : "))
var titre = "la table de multiplication est : ";

    console.log("la table de multiplication de "+nombreUtilisateur+" :");

    for (var table = 0; table <= 10; table++) {
        var resultat = nombreUtilisateur * table;
        console.log(nombreUtilisateur + " x "+ table + " = " + resultat);
    }
