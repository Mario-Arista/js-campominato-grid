// dichiaro elemento in cui creare gioco
const gridElement = document.querySelector(".row");

// dichiaro button
const ButtonElement = document.querySelector("#start-button");

// Inizio evento al click 

ButtonElement.addEventListener("click", function(event){

    // Prevengo eventuali problemi
    event.preventDefault()

    for (let i = 0; i < 100; i++) {

        // creo un elemento
        const newElement = document.createElement("div");
        
        // aggiungo la classe square
        newElement.classList.add("square");

        //aggiungo il nuovo elemento alla row
        gridElement.append(newElement);
    }




});