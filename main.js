let card = document.querySelectorAll(".card-item")

card.forEach(item =>{
    item.addEventListener("click", () =>{
        resetActive()
        item.classList.add("active")
        
    }
    )

});

function resetActive(){
    for(item of card){
        item.classList.remove("active")

    }   
}