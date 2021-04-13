var somma = 0;

// esercizio fatto con for
/* for(var i=0; i < 5; i++){
  var numeri_utente = parseInt(prompt("inserisci numero"));
  console.log(numeri_utente)
  somma += numeri_utente
} */

//esercizio fatto con while
var i =0;

while(i<5){
  var numeri_utente = parseInt(prompt("inserisci numero"));
  console.log(numeri_utente)
  somma += numeri_utente
  i++
}

console.log(somma)