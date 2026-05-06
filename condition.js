// exo 1

//role : strciment decrit
//parametre : ecrivez une expression js qui egal 10
//return : rien

// exo 1 tricoleure

// demander a l'utilisateur de quelle couleur est le feu 
//role : demander a l'utilisateur de quelle couleur est le feu 
// parametre : non
//return : la reponse de l'utilisateur (rouge, vert, orange ou quelque chose d'autres) 
function demanderCouleur(){
    let reponseUtilisateur = prompt("de quel couleur est le feu ? ")
    return reponseUtilisateur;
}


//lui indiquer ce qu'il doit faire 
//role :  Afficher une indication de conduite en focntion de la couleur du feu 
// parametre : couleur du feu
//return : rien car elel affiche 
function afficherInfoConduite(couleurFeu){

// si la couleur du feu est vert -> je passe 
if(couleurFeu === "vert"){
    alert("je passe ! ")
}
//si la couleurt du feu est orange -> je freine 
else if(couleurFeu === "orange"){
    alert("freine !")
}
// si la couleur du feu est rouge -> je m'arette 
else if(couleurFeu === "rouge"){
    alert("stop ! ")
}
// sinon ya un soucis
else{
    alert("pannique! ")
}

}


//role : apeller demander couleur puis afficher info
//parametre : 
//return : 
function lancerFonctions(){
    let couleur = demanderCouleur()
    afficherInfoConduite(couleur)
}

lancerFonctions()


//exo 2

//calculer une moyenne genrale 
//role : calculer la moyenen G de l'eleve
//paramtre : les moyennes des différentes matiéres (4)
//return : la moyenne genrale
function calculerMoyenne(noteMath, noteFrancais, noteHistoire, noteSVT){

    let moyenneG = (noteFrancais+noteHistoire+noteMath+noteSVT)/4
    return moyenneG
}

//créer un commentaire 
//role : créer un commentaire en focntion de la moyenne Generale
//parametre : la moyenne G de l'eleve
//return : le commentaire 

function genererCommentaire(moyenneGenerale){

    //si la moyenen generale est inférieur ou égale a 10 -> travailler plus 
    if(moyenneGenerale <=10){
        return "Travaillez plus"
    }

    //sinon si la moyenen genrale est entre 10 et 13 -> poursuivez effort
    else if(moyenneGenerale>10 && moyenneGenerale<=13){
        return "poursuivez vos efforts"
    }

    //sinon si lamoyenne g est entre 13 et 15 -> bon travail 
    else if (moyenneGenerale>13 && moyenneGenerale<=15){
        return "bon travail"
    }

    //sinon si la moyenen g est entre 15 et 17 -> bravo 
    else if(moyenneGenerale>15 && moyenneGenerale<=17){
        return "bravo"
    }

    //sinon -> felicitation
    else{
        return "felicitations"
    }

}

//éditer bulletin
//role : Afficher le bulletin 
//parametre : la moyenen G et le commentaire 
//return : rien car elle affiche 

function afficherBulletin(commentaire, moyenneGenerale, prenomEleve){

    alert(`La moyenne de l'éléve ${prenomEleve} est : ${moyenneGenerale} et le commentaire est : ${commentaire}`)

}

//role : jouer le scenario -> calculermoyenne, commentaire, buleetin
//paramtre : notes
//return : rien

function scenario(a,b,c,d,prenomEleve){
    let moyenneG = calculerMoyenne(a, b, c, d)
    let commentaire = genererCommentaire(moyenneG)
    afficherBulletin(commentaire, moyenneG, prenomEleve)
}

scenario(9,8,7,3,"Marie");
scenario(9,8,7,3,"Paul");
scenario(9,8,7,3,"Jean");




