/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/


/*
-colleghiamo l'output dove dovrà comparire la griglia in pagina

-prendiamo il bottone dalla pagina e lo assegniamo a una variabile creandoli un click
    -creiamo un ciclo per generare 100 elementi (celle)
    -aggiungiamo una classe che dia stile ai quadrati (css)
    -e assegnamo il testo al suo interno tramite il contatore crescente

    -creiamo un evento click per ogni singola cella
        -che colori di azzurro e scriva in console il valore al suo interno 
*/


//output
let outputEl = document.getElementById ('output-griglia')

//bottone
let buttonEl = document.getElementById ('play-button')

//evento click sul bottone
buttonEl.addEventListener ('click' , function() {
    
    //ciclo per creare le 100 celle che formano la griglia
    for (let i = 1 ; i <= 100 ; i++) {
        let casella = document.createElement ('div')
        casella.classList.add('square')
        outputEl.append(casella)
        casella.innerText = i

    //evento click sulle celle
        casella.addEventListener ('click' , function() {
            casella.style.backgroundColor = '#00fffa'
            console.log (casella.innerText)
        })
    }
})
