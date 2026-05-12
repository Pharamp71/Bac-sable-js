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

bouton.addEventListener("click", function(){console.log("click")
})

function ajouterunparagraphe(){

    document.querySelector("#grosseBoite").innerHTML += <p>lorem ipsum dolor</p>
}
