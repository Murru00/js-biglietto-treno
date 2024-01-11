const printTicket = document.getElementById('priceticket');

//Chiedo al cliente quanti KM desidera percorrere:
const Km = prompt('Quanti KM desidera percorrere');
console.log(Km);

//Chiedo al cliente l'età:
const userAge = prompt('Quanti anni hai?');

//prezzo del biglietto
const ticketPrice = Km * 0.21;

let ticket = 0;

// Sconto del 20% se il cliente è minorenne:
let discount20 = ticketPrice * 0.2;

// Sconto del 40% se il cliente è over65:
let discount40 = ticketPrice * 0.4;

//Prezzo in base all'età:
if (userAge < 18) {
    ticket = ticketPrice - discount20;
} else if (userAge > 65) {
    ticket = ticketPrice - discount40;
} else {
    ticket = ticketPrice;
}

//Stampo del biglietto
printTicket.innerText = ' Il prezzo del biglietto è di ' + ticket.toFixed(2) + '€';



