// Déclaration des variables
var start = Number(prompt("Saisir le nombre initial : "));
var plus = start + 10;

// Boucle for
for (var i = start; i <= plus; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}

// Boucle while
console.log("Avec le while");
while (start <= plus) {
    if (start % 2 === 0) {
        console.log(start + " est pair");
    } else {
        console.log(start + " est impair");
    }
    start++;
}
