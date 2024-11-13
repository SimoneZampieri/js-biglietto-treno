//il programma deve chiedere all'utente l'età
//il prezzo del biglietto al km è di 0,21 euro
//20% sconto per minori
//40% sconto per over 65
//l'output va dato con 2 decimali
//devo sapere quanti km vuole percorrere il passeggero
//devo sapere l'età di quest'ultimo

//dati noti

const prezzoKm = 0.21;
const scontoMinori = 20;
const scontoOver = 40;

//dati da sapere

const kmTotali = prompt('Quanti KM devi percorrere?');
const etaPasseggero = prompt('Quanti anni Hai?');

//svolgimento
let prezzoBiglietto;
let calcoloPrezzo;
let prezzoTotKm = kmTotali * prezzoKm;

if (etaPasseggero < 18){
    calcoloPrezzo = (prezzoTotKm / 100) * (100 - scontoMinori)
} else if (etaPasseggero > 65){
    calcoloPrezzo = (prezzoTotKm / 100) * (100 - scontoOver)
} else {
    calcoloPrezzo = prezzoTotKm
}

//output

prezzoBiglietto = calcoloPrezzo.toFixed(2);
console.log( ` Il prezzo totale è: ${prezzoBiglietto}€ ` );
alert ( ` Il prezzo totale è: ${prezzoBiglietto}€ ` );