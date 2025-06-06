/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 5;
const num2 = 23;
if (num1 === num2) {
  console.log(num1 + " è uguale a " + num2);
} else if (num1 > num2) {
  console.log(num1 + " è piu grande di " + num2);
} else {
  console.log(num2 + " è piu grande di " + num1);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const numInteroFornito = 10;
if (numInteroFornito !== 5) {
  console.log(numInteroFornito + " not equal");
} else {
  console.log(numInteroFornito + " è proprio lo stesso numero!");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const num = 20;
const resto = num % 5;
if (num % 5 === 0) {
  console.log(num + " è divisibile per 5");
} else {
  console.log(num + " non è divisibile per 5 e il suo resto è " + resto);
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, 
  il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 10;
const num4 = 2;
if (num3 === 8 || num4 === 8) {
  console.log("Uno dei due numeri è 8");
} else if (num3 + num4 === 8) {
  console.log("La loro somma è 8");
} else if (num3 - num4 === 8 || num4 - num3 === 8) {
  console.log("La loro differenza è 8");
} else {
  console.log(
    "Nessuno dei due numeri è 8, ne 8 è il risultato della loro somma o sottrazione... MI SPIAZE"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo 
  totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente 
  ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere 
  addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 30;
const spedizione = 10;
if (totalShoppingCart >= 50) {
  checkout = totalShoppingCart;
  console.log(
    "Complimentoni poichè hai le mani bucate ha vinto la spedizione gratuita!"
  );
} else {
  checkout = totalShoppingCart + spedizione;
  console.log(
    "Non hai soddisfatto i requisiti minimi per la spedizione gratuita"
  );
}
console.log("Totale da pagare: " + checkout);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato
   il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo,
   determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = 80;
const promo = (totalShoppingCart * 20) / 100;
if (totalShoppingCart >= 50) {
  totalShoppingCart -= promo;
  console.log(
    "Complimentoni poichè hai le mani bucate ha vinto la spedizione gratuita!"
  );
} else {
  totalShoppingCart -= promo;
  totalShoppingCart += spedizione;
  console.log(
    "Non hai soddisfatto i requisiti minimi per la spedizione gratuita"
  );
}
checkout = totalShoppingCart;
console.log(
  "Oggi è il Black Friday, con il 20% di promo hai risparmiato: " + promo
);
console.log("Totale da pagare: " + checkout);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro
  valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let var1 = 28;
let var2 = 55;
let var3 = 7;
if (var1 > var2 && var1 > var3) {
  if (var2 > var3) {
    console.log(var1 + " " + var2 + " " + var3);
  } else {
    console.log(var1 + " " + var3 + " " + var2);
  }
} else if (var2 > var1 && var2 > var3) {
  if (var1 > var3) {
    console.log(var2 + " " + var1 + " " + var3);
  } else {
    console.log(var2 + " " + var3 + " " + var1);
  }
} else {
  if (var1 > var2) {
    console.log(var3 + " " + var1 + " " + var2);
  } else {
    console.log(var3 + " " + var2 + " " + var1);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no 
  (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let value = 10;
let value2 = "CheFIGATA";
console.log(typeof value);
console.log(typeof value2);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari 
  (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 5;
if (num5 % 2 !== 0) {
  console.log("Il numero è dispari");
} else {
  console.log("Il numero è pari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio 
  corretto in ogni circostanza.
  */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", 
  il cui valore sarà "Toronto".
*/
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere 
  la proprietà "lastName".
*/
delete me.lastName;
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere 
  l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. 
  Riempilo successivamente con i numeri da 1 a 10.
*/
const numerini = [];
numerini.push(2, 3, 4, 5, 6, 7, 8, 9, 10);
numerini.unshift(1);
console.log(numerini);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, 
  con il valore 100.
*/
numerini.splice(9, 1, 100);
console.log(numerini);
/* SCRIVI QUI LA TUA RISPOSTA */
