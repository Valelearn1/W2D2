/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto "persona" con: nome, cognome, eta, citta.
   Stampa: "Mario Rossi, 25 anni, vive a Roma."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const persona = {
  nome: "Mario",
  surname: "Rossi",
  age: 25,
  address: "Roma",
};

console.log(
  `${persona.nome} ${persona.surname}, di ${persona.age} anni, vive a ${persona.address}.`,
);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto "persona": aggiungi "email", poi rimuovi "eta".
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
persona.email = "mario.rossi@gmail.com";
delete persona.age;
console.log(persona);

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto "utente" con una proprietà "indirizzo" (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utente = {
  indirizzo: {
    via: "Susa",
    citta: "Palermo",
    cap: "90121",
  },
};

console.log(utente.indirizzo.cap);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto "persona", variabile chiave = "nome".
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let person = {
  chiave: "nome",
};

console.log(person["chiave"]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa "Pareggio". // se i due più grandi sono uguali, stampa pareggio
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numberOne = 8;
const numberTwo = 8;
const numberThree = 5;

if (numberOne > numberTwo && numberOne > numberThree) {
  console.log(numberOne);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
  console.log(numberTwo);
} else if (numberThree > numberOne && numberThree > numberTwo) {
  console.log(numberThree);
} else if (
  numberOne === numberTwo ||
  numberOne === numberThree ||
  numberTwo === numberThree
) {
  console.log("Pareggio");
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile "totale".
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: "Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€"
   Risolvi una volta con if/else e una volta con ternario. //cercare di farla con l'if else e poi solo dopo con il ternario
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let total = 35;
let shipmentFee = 9.9;
if (total >= 50) {
  console.log("Spedizione gratuita");
} else {
  console.log(
    `Totale carrello: ${total}€ - Spedizione: ${shipmentFee}€ - Totale finale: ${total + shipmentFee}`,
  );
}

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, "ciao", true]).
   Con un for + if, per ogni elemento stampa "x è un numero" o "x non è un numero".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const mixedArray = [42, "ciao", true];
for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "number") {
    console.log("x è un numero");
  } else {
    console.log("x non è un numero");
  }
}

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi i numeri da 1 a 5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [1, 2, 3];
numeri.push(4);
console.log(numeri);
console.log(numeri.length);

numeri.push(5);
console.log(numeri);
console.log(numeri.length);

numeri.unshift(0);
console.log(numeri);
console.log(numeri.length);

/* ESERCIZIO 9 — Carrello con splice
   Array ["Penna", "Quaderno", "Zaino", "Astuccio"].
   Con splice: rimuovi "Quaderno", poi inserisci "Diario" al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const strumentiScuola = ["Penna", "Quaderno", "Zaino", "Astuccio"];
strumentiScuola.splice(1, 1, "Diario");
console.log(strumentiScuola);

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ["Penna", "Quaderno", "Zaino"].
   cercato = "Zaino".
   Con includes: stampa "Zaino è in carrello: true".
   Con indexOf: stampa la posizione, o "Non in carrello".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = ["Penna", "Quaderno", "Zaino"];
console.log(prodotti.includes("Zaino"));
console.log(prodotti.indexOf("Zaino"));

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: "Mario (25 anni)".
   Aggiungi console.table(utenti) alla fine. //fuori dal for
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utenti = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
};

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → "OFFERTA: nome (prezzo€)"
   - disponibile && prezzo >= 10 → "nome — prezzo€" //sia il nome che il prezzo
   - !disponibile → "nome — esaurito" //se non disponibile
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array "inverso", riempilo con un for (dall'ultimo al primo) usando push.
   Stampa "inverso".
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
