// dichiaro elemento in cui creare gioco
const gridElement = document.querySelector(".row");

// dichiaro button
const ButtonElement = document.querySelector("#start-button");

// dichiaro valori options dentro select
const difficileInputElement = document.getElementById("level-dif").value;
const medioInputElement = document.getElementById("level-med").value;
const facileInputElement = document.getElementById("level-med").value;


// Funzione per riempire array
function getNumbersArray(number) {

    // Dichiaro array vuoto
    const arrayWhitNumbers = [];

    // Faccio un for per 100 numeri per il momento
    for (let i = 1; i <= number; i++) {

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

    if (difficileInputElement === "difficile") {

    }

    
    for (let i = 0; i < 100; i++) {

        // creo un elemento
        const newElement = document.createElement("div");
        
        // aggiungo la classe square
        newElement.classList.add("square-10");

        // aggiungo la classe square
        newElement.innerText = getNumbersArray(100)[i];

        //aggiungo il nuovo elemento alla row
        gridElement.append(newElement);

        //aggiungo che se clicco il nuovo elemento
        // cambia background color
        newElement.addEventListener("click", function() {

            this.classList.toggle("green");
            console.log("è stata cliccata la cella numero:", getNumbersArray()[i]);
            

        });

        
    }

});