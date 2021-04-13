var numero_inserito = parseInt(prompt("digita un numero"))

if(numero_inserito % 2 === 0){
  console.log("il numero " + numero_inserito + " è pari")
}else{
  numero_arrotondato = numero_inserito + 1;
  console.log("il numero " + numero_inserito + " è dispari, aggiungo 1, quindi diventa " + numero_arrotondato + " ed è pari")
}