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

            <div class="bg-bleu text-white mb-50 w-30 txt-center">
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