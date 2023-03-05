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

/*
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

//output...bersagliato tramite id dal documento (HTML: il contenitore della fututra gliglia)
let outputEl = document.getElementById ('output-griglia')
//bottone...bersasgliato tramite id dal documento (HTML: bottone play che avvia il gioco)
let buttonEl = document.getElementById ('play-button')


//evento click sul bottone avvio gioco
buttonEl.addEventListener ('click' , function() {
    // dichiaro e memorizzo la difficolta calcolata con una function una function 
    let difficolta = rilevaDifficolta()
    // diachiaro e memrizzo il numero di celle calcolando con una function
    let numerocelle = calcolaCelle(difficolta)
    // per pulire la criglia a ogni click (nel caso si cambi la difficolta)
    outputEl.innerHTML= ''

    //ciclo per creare le celle che formano la griglia
    for (let i = 1 ; i <= numerocelle ; i++) {
        // dichiaro la cella creeandola con una function
        let casella = creacella(i)
        // evento click sulla singola cella 
        casella.addEventListener ('click' , function() {
            // funzione creata per selezionare e segnare il valore
            selezionaEprendiValore(casella)
            
        })
    }   
})



// -------------------funzioni------------------------

function creacella(numerocelle) {

    let casella = document.createElement ('div')
    casella.classList.add('square')
    outputEl.append(casella)
    casella.innerText = numerocelle

    return casella

}

function selezionaEprendiValore(casella) {

    casella.classList.toggle ('verde')
    console.log (casella.innerText)  

}

function diventaNera(casella) {

    casella.classList.toggle ('nera')

}

function rilevaDifficolta() {

    let difficoltaEl = document.getElementById ('difficolta')
    let difficolta = difficoltaEl.value

    return difficolta 

}

function calcolaCelle (difficolta) {

    let numerocelle

    if (difficolta == 0) {
    
        alert('Scegli una difficoltà per iniziare')
    } 
        
    if (difficolta == 3) {
        numerocelle = 49
        outputEl.style.width = 'calc(50px * 7 + 10px)';
        outputEl.style.height = 'calc(50px * 7 + 10px)';
        outputEl.style.border = '5px double rgb(141, 141, 141)';
    }
    if (difficolta == 2) {
        numerocelle = 81
        outputEl.style.width = 'calc(50px * 9 + 10px)';
        outputEl.style.height = 'calc(50px * 9 + 10px)';
        outputEl.style.border = '5px double rgb(141, 141, 141)';
    } 
    
    if (difficolta ==1){
        numerocelle = 100
        outputEl.style.width = 'calc(50px * 10 + 10px)';
        outputEl.style.height = 'calc(50px * 10 + 10px)';
        outputEl.style.border = '5px double rgb(141, 141, 141)';
    }

    return numerocelle
}

// -------------------/ funzioni------------------------






// ---------------click tasto destro----------------

// casella.addEventListener('contextmenu', doRightClick, false);
        
// function doRightClick(ev) {
//     ev = ev || window.event;
//     ev.preventDefault();  // evito che intervenga il comportamento di default, l'apertura del menu
    
//     diventaNera (casella)
//     //TODO: qui faccio quello che mi serve
//     return false;
// }

// ---------------/ click tasto destro----------------
