// dichiaro elemento in cui creare gioco
const gridElement = document.querySelector(".row");

// dichiaro button
const ButtonElement = document.querySelector("#start-button");

// Funzione per riempire array
function getNumbersArray(number) {

    // Dichiaro array vuoto
    const arrayWhitNumbers = [];

    // Faccio un for per 100 numeri per il momento
    for (let i = 1; i <= 100; i++) {

        // inserisci numeri in array vuoto
        arrayWhitNumbers.push(i);
 
    }

    // restituisco array pieno
    return arrayWhitNumbers;
    

}


// Inizio evento al click 

ButtonElement.addEventListener("click", function(event){

    // Prevengo eventuali problemi
    event.preventDefault()

    for (let i = 0; i < 100; i++) {

        // creo un elemento
        const newElement = document.createElement("div");
        
        // aggiungo la classe square
        newElement.classList.add("square");

        // aggiungo la classe square
        newElement.innerText = getNumbersArray()[i];

        //aggiungo il nuovo elemento alla row
        gridElement.append(newElement);
    }

});