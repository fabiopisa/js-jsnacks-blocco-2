/* JSnack 1 B-2 */
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
/* /JSnack 1 B-2 */

/* JSnack 2 B-2 */
var numero_inserito = parseInt(prompt("digita un numero"))

if(numero_inserito % 2 === 0){
  console.log("il numero " + numero_inserito + " è pari")
}else{
   var numero_arrotondato = numero_inserito + 1;
  console.log("il numero " + numero_inserito + " è dispari, aggiungo 1, quindi diventa " + numero_arrotondato + " ed è pari")
}
/* /JSnack 2 B-2 */