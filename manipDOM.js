// selectionner le body et ajouter une div 
document.querySelector("body").innerHTML += `
<div>
    <p>lorem ipsum dolor lorys</p>
</div>
`

let paragrapheAmettreEnrouge = document.querySelector("p")

paragrapheAmettreEnrouge.classList.add("red")

//paragrapheAmettreEnrouge.classList.remove("bg-yellow")

paragrapheAmettreEnrouge.classList.toggle("bg-yellow")


let bouton = document.querySelector("button")

bouton.addEventListener("click", function () {
    console.log("click")
})

function ajouterunparagraphe() {

    document.querySelector("#grosseBoite").innerHTML += `<p>lorem ipsum dolor</p>`
}

// exo 1 H1 en style dur 


// utliliser un selecter pour recup un h1 de la page et changer son style en dur 

let title1 = document.querySelector("h1")
title1.style.backgroundColor = "blue";

// exo 2 Interrupteur

//Ecrire une fonction qui permet alternativement de cacher, puis d’afficher, puis de cacher etc…. un élément dont l’id est passé en paramètre à chaque fois qu’on l’apelle

let buttom = document.querySelector("#bouton")
buttom.addEventListener("click",
    function () {
        const nono = document.querySelector("#nono")
        nono.classList.toggle("display-none")
    })

// exo 3 Choix multiples / choix unique 

let boites = document.querySelectorAll(".boite")

console.log(boites)

//je parcours mon tableau de div 
boites.forEach(boite => {
    boite.addEventListener("click", function () {

        // je reset tout
        reset()
        // j'ai la obite sur laquelle j'ai cliqué
        console.log(boite)
        boite.classList.toggle("bg-red")
    })
})

/**
 * role : reset (enleve la classe bg-red a toutes les div qui ont la classe boite)
 * parametre : non
 * return : non
 */

function reset() {
    let boites = document.querySelectorAll(".boite")
    boites.forEach(boite => {
        boite.classList.remove("bg-red")

    })
}

// exo 4 un compteur de clic

// Un script qui compte le nombre de clic sur un bouton et qui l’affiche dans le body

let compteur = document.querySelector("#compteuR")

