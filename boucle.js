for (let i = 1; i < 5; i++) {
    console.log("coucou")
}

for (let i = 1; i < 101; i++) {
    console.log(i)
}

for (let i = 100; i > 0; i--) {
    console.log(i)
}

// ecrit une fondation qui affiche la table de multiplication d'un nombre passé en paramètre
// afficher la table de multiplication d'un ombre quelconque
// parametre : nombre 
// return rien
function affichermultiplication(nbrAmultiplier){

for(let i = 1; i<=10; i++){
    console.log(nbrAmultiplier*1)
}


}

function tablemultiplication(nombremultiplier){

for (let i = 1; i<=10; i++){
    console.log(`${nombremultiplier} x ${i} = ${nombremultiplier * i}`)
}

}

// un script repete 50 fois i will not waste Chalk
//role : ecrit 50 fois "cnsbd"
// parametre: non
// return: non car elle affiche

function punition(){

for (let i = 1; i <= 50; i++) {
    console.log("I will not waste Chalk")
}

}