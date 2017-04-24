console.log("version while");
var start = 0;
var tour = prompt("Entrez le nombre de tour à  : ");
while (start <= tour) {
    console.log("c'est le tour " + start);
    start++;
}

console.log("version for");
for (var tourFor = 0; tourFor <= tour; tourFor++) {
    console.log("c'est le tour " + tourFor);
}
