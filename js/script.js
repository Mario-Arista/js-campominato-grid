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

    // valore della select
    const difficultyChoice = document.querySelector("#level-select").value;

    // metto un contatore
    let numberOfElements;

    if (difficultyChoice == "difficile") {
        numberOfElements = 100;
    } else if (difficultyChoice == "medio") {
        numberOfElements = 81;
    } else if (difficultyChoice == "facile") {
        numberOfElements = 49;
    } else {
        alert("scegli un livello!");
    }

    for (let i = 0; i < numberOfElements; i++) {

        // creo un elemento
        const newElement = document.createElement("div");
        
        // aggiungo la classe square
        newElement.classList.add("square-10");

        // aggiungo la classe square
        newElement.innerText = getNumbersArray()[i];

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