//role : ecrire bonjour dans la console
//parametre : prenom de la personne a saluer
//retrouner : rien




console.log("salut" + " Noan") // console.log( ) -> ecrit dans la console

let age = 17; // une variable dont le contenu peut évoluer
const vitesseluimiere = 299792; // une variable dont le contenu n'evoluara jamais : une constente
console.log(age);

let salut = "bonjour Noan, ca va?"

let connecte = false;

console.log(connecte)

age = age - 1;

console.log(age)

// exercice 2

let i = 0;

i = i + 1;

console.log(i)

i += 1;

i++

i = i + 2
i += 2

// exercice 3

let nom = "cherara";
let prenom = "Noan"; 

let nomcomplet = `le prenom est ${prenom} et le nom est ${nom}`;

console.log(nomcomplet)

// exercice 4

let pre = "salut" + "prenom"

let prenomsalut = `salut ${prenom} ca va`

console.log(prenomsalut)

console.log(`salut ${prenom},comment ca va`)

console.log("salut"  + prenom + ", comment ca va")

// exercice 5

let pharse = "le chat est bleu"
let longueurpharse = pharse.length

console.log(`le pharse : ${pharse} contient ${longueurpharse} caratere`)

// exercice 6

let mot = "chateau"

console.log(mot.replace("t","p"))

// exercice 7

let mot2 = "pelican"

let dernierePos = mot2.length-1

console.log(mot2.length)
console.log(mot2.indexOf("p"))
console.log(mot2[dernierePos])

//role : emballe le jouet
//parametre : le jouet
//retour : le cadeau

function direbjr(prenom){
    console.log(`bonjour ${prenom}`);
}

//j'appelle / je lance ma fonction
direbjr("Nico")


//role : additionner deux chiffres
//parametre : deux chiffres
//return : le resutal

function addition(a,b){
    return a+b;
}

let valuer = addition(5,2)

console.log(valuer)