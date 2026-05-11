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
function affichermultiplication(nbrAmultiplier) {

    for (let i = 1; i <= 10; i++) {
        console.log(nbrAmultiplier * 1)
    }


}

function tablemultiplication(nombremultiplier) {

    for (let i = 1; i <= 10; i++) {
        console.log(`${nombremultiplier} x ${i} = ${nombremultiplier * i}`)
    }

}

// un script repete 50 fois i will not waste Chalk
//role : ecrit 50 fois "cnsbd"
// parametre: non
// return: non car elle affiche

function punition() {

    for (let i = 1; i <= 50; i++) {
        console.log("I will not waste Chalk")
    }

}

// exo 6
/**
 * role : epeler le mot
 * parametre : le mot epeler
 * return rien car elle affiche
 */


function epeler(mot) {
    console.log(`le mot ${mot} contient ${mot.length} lettres`)
    for (let i = 0; i < mot.length; i++) {

        console.log(mot.charAt(i))
    }

}

let animaux = ["chien", "chat", "lapin", "hamster"]

console.log(animaux[animaux.length])

//créér un tableau "panierfruits" contients 6 fruits
//afficher dans la console le premier et le dernier fruits du tableau
//" le premier fruit du tableau est ... et le dernier est ...."

const panierfruits = ["banane", "peche", "poire", "mangue", "framboise"]

console.log(`le premier fruit est ${panierfruits[0]} le dernier 
    fruit du tableau est ${panierfruits[panierfruits.length - 1]}`)

for (let i = 0; i < panierfruits.length; i++) {
    console.log(panierfruits[i])


}

panierfruits.forEach(fruit => {
    console.log(fruit)
});

//tableau de notes

let notes = [12, 9, 15, 17, 10];

// role: calculer la moyenne a partir d'un tableau de notes
//parametre : le tableau de note
//return: la moyenne

// créer une fonction
function calculermoyenne(tableaunotes) {

    let somme = 0;

    //récupérer les notes une par une dans le tableau
    tableaunotes.forEach(note => {


        //quand il en a une, il l'aditione dans une variable (a l'origine une variable vide)
        somme = somme + note;
    })


    //on divise la somme obtenu par le nbr de valeur dans le tableau
    let moyenne = somme / tableaunotes.length;


    // retourner le resultal
    return moyenne;
}

function affichemoyenne(moyenne) {

    console.log(`la moyenne de l'eleve est : ${moyenne}`)
}

let moyenneeleve = calculermoyenne(notes)
affichemoyenne(moyenneeleve)


//exercice panier fruit

// mon tableau représentant mon panier de fruits 
let fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes",
    "pommes", "poires", "cerises"];

/**
 * role : compter chaque fruit 
 * parametre : les fruits
 * return : le nombre de chaque fruit 
 */

// poche les fruit un par un sois une cerise sois une pommme



function comptefruits(tableauFruit) {

    let pommes = 0;
    let cerises = 0;
    let poires = 0;
    let bananes = 0;

    tableauFruit.forEach(fruit => {

        if (fruit === "pommes") {
            pommes++
        }
        else if (fruit === "cerises") {
            cerises++
        }

        else if (fruit === "poires") {
            poires++
        }

        else if (fruit === "bananes") {
            bananes++
        }

        else {
            compteurinconnus++
        }


    });

    return
        il ya ${ pommes } pommes,
        il ya ${ cerises } cerises,
            il ya ${ poires } poires,
                il ya ${ bananes } bananes,

}

function afficherdanspage(aAfficher){

    document.querySelector("body").innerHTML += `<p> ${aAfficher}</p>`
}

let pharseaAfficher = fruit(fruits)



// code cesar

/**
 * role : 
 * parametre : 
 * return : 
 */
