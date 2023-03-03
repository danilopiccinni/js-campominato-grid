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

//output
let outputEl = document.getElementById ('output-griglia')

//bottone
let buttonEl = document.getElementById ('play-button')


//evento click sul bottone
buttonEl.addEventListener ('click' , function() {

    let difficoltaEl = document.getElementById ('difficolta')
    let difficolta = difficoltaEl.value
    let numerocelle;

    if (difficolta == 0) {
        alert('Scegli una difficoltà per iniziare')
    } else if (difficolta == 3) {
        numerocelle = 49
        outputEl.style.width = 'calc(50px * 7)';
        outputEl.style.height = 'calc(50px * 7)';
        } else if (difficolta == 2) {
            numerocelle = 81
            outputEl.style.width = 'calc(50px * 9)';
            outputEl.style.height = 'calc(50px * 9)';
        } else {
            numerocelle = 100
        }

        outputEl.innerHTML= ''

    //ciclo per creare le 100 celle che formano la griglia
    for (let i = 1 ; i <= numerocelle ; i++) {

        let casella = creacella(i)


        casella.addEventListener ('click' , function() {

            selezionaEprendiValore(casella)
           
        })
    }   
})

function creacella(numerocelle) {

    let casella = document.createElement ('div')
    casella.classList.add('square')
    outputEl.append(casella)
    casella.innerText = numerocelle

    return casella

}

function selezionaEprendiValore(casella) {

    casella.classList.toggle ('celeste')
    console.log (casella.innerText)  

}





    
    