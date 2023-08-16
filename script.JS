let cards = document.getElementsByClassName("card")
let textcardsclicked = document.querySelector(".text-cards-clicked")

//classe que define os cards quer foram clicados
const classcardclicked = "card-clicked";
//array que vai controlar os cards que foram clicados
for (let card of cards)

textcardsclicked.innerHTML = "vc nao selecionou bb"

for (let card of cards){
card.addEventListener("click", function(){    
    let {serie, name} = card.dataset;
    
    let carfoiclicado = card.classList.contains(classcardclicado);

    if (cardfoiclicado){
        card.classList.remove(classCardclicado);
       } else{
        card.classList.add(classCardclicado);
    }
    
});
}