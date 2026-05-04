//role : calcul moyenne
//parametre : la moyenne un eleve
// return : la moyenne de la console

// exo 1

function moyenne(a,b,c,d){
    return (a+b+c+d)/4;
}

let eleve = moyenne(13,5,17,10)

console.log(eleve)

// exo 2

//role : Décrémentation -> retirer une au stock
//parametre : rien
// return : rien

let stock = 6;

function decremeute(){
    stock--;
}

decremeute();
console.log(stock)

// exo 3

//role : affiche le mot
//parametre : mot
// return : rien

let animal = "phoque";

dernierePos = animal.length-1

function affichelettre(animal){
    return(animal.length-1)
}
console.log(animal[dernierePos])

// exo 4

//role : replacer bubble tea par un autre
//parametre : le nouveau produit et la liste ini
// return : rien

function nouvelleoffre(nouveauproduit, listeinitiale){
    console.log(listeinitiale.replace("bubble tea", nouveauproduit))

}

nouvelleoffre("matcha", "cafe, bubble tea, tisane")

// exo 5

//role : afficher si l'adresse mail contient ou non @
//parametre : l'adresse mail
// return : rien car elle affiche

function verifMail(mailAverif){
    console.log(mailAverif.includes("@"))
}

verifMail("contact@gmail.com")






//role : affiche des balises a ma page html
//parametre : la balise a ajouter
// return : rien

function ajouterBalise(balise) {
    document.querySelector("body").innerHTML += balise
}

ajouterBalise('<h1 class="red">Coucou</h1>')
ajouterBalise("<p> on est vraiment trop fort en js  </p>")
ajouterBalise('<img src="https://images.pexels.com/photos/29973779/pexels-photo-29973779.jpeg" alt="">')


//role : afficher l'addition de deux chiffres
// parametre : les chiffres a additionner
//return : rien

function afficherAddition(a, b){
    ajouterBalise(`<p> ${a+b} </p>`)
}

afficherAddition(7,5)

//role: afficher le prenom dans le body
//parametre : prenom
//return : rien

function afficherPrenom(prenom){
    ajouterBalise(`<p>${prenom}, comment ça va?</p>`)
}

afficherPrenom("David")

console.log("YOLOO")
