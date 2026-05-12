let promo11 = [

    {
        prenom: "alexis",
        age: 19,
        ville: "St Etienne",
        job: "gagner de l'argent"
    },
    {
        prenom: "Romain",
        age: 27,
        ville: "St Etienne",
        job: "data scientist"
    },
    {
        prenom: "Ludivine",
        age: 29,
        ville: "St Etienne",
        job: "formatrice"
    },
    {
        prenom: "Nico",
        age: 42,
        ville: "St Etienne",
        job: "eleveur de poulet"
    },
]

function ficheelevedansDOM(tableaupromo11) {


    //prendre les eleve un par un 
    promo11.forEach(eleve => {
        // ecritre leur prenom, leur age et leur ville en console

        //appeller ma fonction dont le rôle est d'envoyer au DOM       
        ajouteraubody(

            `<div class="bg-bleu text-white mb-50 w-30 txt-center">
                <h2>eleve.prenom</h2>
                <p> ${eleve.age}</p>
                <p> ${eleve.prenom}</p>
                <p>${eleve.job}</p>
            </div>
        
        `)

    });

}

function ajouteraubody(trucaafficher) {

    document.querySelector("body").innerHTML += trucaafficher

}

ficheelevedansDOM(promo11)


// La recette v1 affiche la recette 

//Nous souhaitons afficher en console la recette de cuisine du poulet
//rôti au thym et à l'ail. La recette nous est donnée comme cela :



let recette = {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
}

console.log(`
    la recette du ${recette.nom}
    difficulté : ${recette.difficulte}
    temps de préparation : ${recette.tempPreparation}
    temps de cuisson : ${recette.tempCuisson}
    pour ${recette.nbrPortions} personnes
liste des ingrédiens : ${recette.ingredients}
    
    `)


// la recette v2

let recettes = [
    {
        nom: "poulet rôti au thym et à l'ail",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "1h 15 min",
        nbrPortions: 6,
        ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
    },
    {
        nom: "spaghetti à la bolognaise",
        difficulte: "Moyenne",
        tempPreparation: "20 min",
        tempCuisson: "40 min",
        nbrPortions: 4,
        ingredients: ["spaghetti", "viande hachée", "oignon", "carotte", "tomate concassée", "ail", "huile d'olive", "sel", "poivre"]
    },
    {
        nom: "salade César",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "0 min",
        nbrPortions: 2,
        ingredients: ["laitue romaine", "croûtons", "parmesan râpé", "filet de poulet", "sauce César", "sel", "poivre"]
    }
];

/**
 * role : recuperer les recettes une par une pour les affiches
 * parametre : le tableau des recettes 
 * return : rien 
 */


function ficheRecettes(tableaurecette) {
    // recuperer les recettes une par une
    tableaurecette.forEach(recette => {
        let ingrediensliste = "";

        ingrediensliste += ` <li>${recette.ingredients}</li>`
        console.log(ingrediensliste)

        recette.ingredients.forEach(recette => {


        });

        // quand il en tiens une il l'affiche
        console.log(`
    
     la recette du ${recette.nom}
    difficulté : ${recette.difficulte}
    temps de préparation : ${recette.tempPreparation}
    temps de cuisson : ${recette.tempCuisson}
    pour ${recette.nbrPortions} personnes
liste des ingrédiens : ${recette.ingredients}    
    `)

    });

}

ajouteraubody(`
     <div>
        <h2> titre recette ${recette.nom}</h2>
        <p> difficulté : ${recette.difficulte}</p>
        <p> temps de preparation :  ${recette.tempPreparation}</p>
        <p>temps de cuission : ${recette.tempCuisson}</p>
        <p>nombre de portions : ${recette.nbrPortions}</p>
        <p> listes des ingrediens : </p>
        <ul>
            <li>${recette.ingredients}</li>
        </ul>
    </div>
`)

function ajouteraubody(trucaafficher){

    document.querySelector("body").innerHTML += trucaafficher
}




