console.log('Esercizi pressi da Codewars');


//1) Sum ArrayS (Somma di Array)

//  Scrivi una funzione che accetti un array di numeri e ne restituisca la somma. I numeri possono essere negativi o non interi. Se l'array non contiene numeri, restituire 0.

// Esempi

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398


// Presupposti

// Si può presumere di ricevere solo numeri.
// Non si può presumere la dimensione dell'array.
// Si può presumere di ottenere un array e, se l'array è vuoto, di restituire 0.

// Cosa stiamo testando

// Stiamo testando cicli e operazioni matematiche di base. Questo è per i principianti che stanno imparando a usare cicli e operazioni matematiche.
// Gli utenti avanzati potrebbero trovare questo esercizio estremamente semplice e possono scriverlo facilmente in una sola riga.

// const pippo = [1, 5.2, 4, 0, -1]

// function sum (numbers) {
  
//   let somma = 0;
  
//   for(let i = 0; i < numbers.length; i++){

//     if (numbers.length === 0) {
//         console.log('array è vuota');
//         }else{
//             somma += numbers[i];
//         }
//   }  
  
//   return somma;
// }

// console.log(sum(pippo));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//2) Convert number to reversed array of digits (Convertire il numero in una matrice invertita di cifre)
//Dato un numero casuale non negativo, è necessario restituire le cifre di questo numero all'interno di un array in ordine inverso.

// Example (Input => Output):

// 35231 => [1,3,2,5,3]
// 0     => [0]

// const pluto = 35231

// function digitize(n) {
    
//    return n.toString().split('').reverse().map(Number);
// //uso toString per convertire il numero in stringa
// //uso split('') per dividere ogni carattere della stringa in un array
// //uso reverse() per invertire l'ordine degli elementi nell'array
// //uso map(Number) per convertire ogni elemento dell'array di stringhe in numeri
//   }

//   console.log(digitize(pluto));
  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3)Remove First and Last Character (Rimuovi il primo e l'ultimo carattere)
//Il tuo obiettivo è scrivere una funzione che rimuova il primo e l'ultimo carattere di una stringa. Ti viene fornito un parametro, la stringa originale.
//Importante: la tua funzione deve gestire stringhe di qualsiasi lunghezza ≥ 2 caratteri. Per stringhe con esattamente 2 caratteri, restituisci una stringa vuota.

// Examples

// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr' 
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'

// Requisiti

// La stringa di input avrà sempre almeno 2 caratteri
// Per stringhe con esattamente 2 caratteri, restituire una stringa vuota
// Per stringhe con 3 o più caratteri, rimuovere il primo e l'ultimo carattere
// La funzione deve gestire stringhe contenenti lettere, numeri e caratteri speciali

// Casi di test

// La tua soluzione verrà testata su:

// Funzionalità di base con parole comuni
// Casi limite con stringhe di 2 e 3 caratteri
// Stringhe contenenti numeri e caratteri speciali
// Casi di test casuali di lunghezza variabile


// const pippo = 'laboratorio';
// const pluto = 'cuoio';
// const paperino = 'DNA';
// const paperone = 'oh';
// const special = '&&7oh-mamma-mia+-%!!'

// function removeFirstAndLastChar(strArray) {
    
//     let newString = '';  // inizializzo la variabile newString come stringa vuota per memorizzare il risultato finale.

//    if (strArray.length <= 2) {
//             return newString = '';
//    } else {
//             newString = strArray.slice(1, -1);
//             //slice(1, -1) per estrarre una sottostringa dalla stringa originale, escludendo il primo e l'ultimo carattere.
//             //Il primo argomento (1) indica l'indice di inizio (inclusivo), mentre il secondo argomento (-1) indica l'indice di fine (esclusivo).
//             //-1 rappresenta l'ultimo carattere della stringa, quindi escludendolo otteniamo la sottostringa desiderata.
//    }
//              //avrei presso lo stesso risultato usando substring(1, strArray.length - 1). 
//              // 1 indica l'indice di inizio (inclusivo) e strArray.length - 1 indica l'indice di fine (esclusivo), che corrisponde all'ultimo carattere della stringa originale.
// return newString;
// }

// console.log(removeFirstAndLastChar(paperone));
// console.log(removeFirstAndLastChar(pippo));
// console.log(removeFirstAndLastChar(pluto));
// console.log(removeFirstAndLastChar(paperino));
// console.log(removeFirstAndLastChar(special));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//4) Grade book (Registro dei voti)

//Completa la funzione in modo che trovi la media dei tre punteggi passati e restituisca il valore della lettera associato a quel voto.

// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	    'F'

//I valori testati sono tutti compresi tra 0 e 100. Non è necessario verificare la presenza di valori negativi o superiori a 100.


// function meanOfScores (n1, n2, n3) {

//     let mean = (n1 + n2 + n3) / 3;

//     if (mean >= 90 && mean <= 100) {
//         return 'A';
//     } else if (mean >= 80 && mean <= 90) {
//         return 'B';
//     } else if (mean >= 70 && mean <= 80) {
//         return 'C';
//     } else if (mean >= 60 && mean <= 70) {
//         return 'D';
//     } else  if (mean >= 0 && mean < 60) {
//         return 'F';
//     } else {
//         return 'ERROR';
//     }
    
//     }
    
//     console.log(meanOfScores(60, 70, 80));
//     console.log(meanOfScores(20, 20, 19));
//     console.log(meanOfScores(80, 85, 90));
//     console.log(meanOfScores(100, 90, 80));
//     console.log(meanOfScores(80, 80, 30));
//     console.log(meanOfScores(-40, 'xen', 70));
    
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5)Is it a palindrome? (È un palindromo?)
//Scrivi una funzione che controlli se una data stringa (senza distinzione tra maiuscole e minuscole) è palindroma.
//Un palindromo è una parola, un numero, una frase o un'altra sequenza di simboli che si legge allo stesso modo sia in avanti che al contrario, ad esempio madam o racecar.

// function isPalindrome(str) {
    
// const string = str.toLowerCase();  //converto la stringa in minuscolo per non fare distinzione tra maiuscole e minuscole
    
// const reverseString = string.split('').reverse().join('');

// return reverseString === string;

// //split('') divide la stringa in un array di caratteri
// //se non metto nulla dentro le virgolette, divide ogni carattere
// //se non metto le virgolette, allora considera l'intera stringa come un unico elemento dell'array

// //reverse() inverte l'ordine degli elementi nell'array o di una stringa
// //se non metto nulla dentro le parentesi, inverte tutti gli elementi
// //la funzione reverse() non modifica l'array originale, ma restituisce un nuovo array con gli elementi invertiti
// //le virgolette non sono necessarie in questo caso

// //join('') unisce gli elementi dell'array in una nuova stringa
// //se non metto nulla dentro le virgolette, unisce gli elementi senza spazi
// //se non metto le virgolette, allora le unisce con una virgola tra gli elementi


// }

// console.log(isPalindrome('dad'));
// console.log(isPalindrome('car'));
// console.log(isPalindrome('madam'));
// console.log(isPalindrome('ABba'));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//6) Volume of a Cuboid (Volume di un cuboide o parallelepipedo rettangolo)
//Bob ha bisogno di un metodo rapido per calcolare il volume di un parallelepipedo rettangolare con tre valori: lunghezza, larghezza e altezza del parallelepipedo.
//Scrivi una funzione che aiuti Bob in questo calcolo.

//Il volume di un cuboide si calcola moltiplicando la sua lunghezza, larghezza e altezza. La formula è: Volume = Lunghezza x Larghezza x Altezza.

// function volumeOfACuboid(length, width, height) {
    
//    const volume = length * width * height;

//    return volume;
// }

// console.log(volumeOfACuboid(7, 8, 9));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//7)Quarter of the year (Trimestre dell'anno)    
//Dato un mese come numero intero da 1 a 12, restituisci a quale trimestre dell'anno appartiene come numero intero.
//Ad esempio: il mese 2 (febbraio) fa parte del primo trimestre; il mese 6 (giugno) fa parte del secondo trimestre; e il mese 11 (novembre) fa parte del quarto trimestre.

//Vincolo: 1 <= month <= 12

// function quarterOfTheYear(month) {    ----  su "Codewars" non funziona
    
//     if (month >= 1 && month <= 3) {
//         return 'month ' + month + ' is part of the first quarter';
//     } else if (month >= 4 && month <= 6) {
//         return 'month ' + month + ' is part of the second quarter';
//     } else if (month >= 7 && month <= 9) {
//         return 'month ' + month + ' is part of the third quarter';
//     } else if (month >= 10 && month <= 12) {
//         return 'month ' + month + ' is part of the fourth quarter';
//     } else {
//         return 'ERROR'
//     }
// }

// console.log(quarterOfTheYear(2));
// console.log(quarterOfTheYear(5));
// console.log(quarterOfTheYear(8));
// console.log(quarterOfTheYear(11));
// console.log(quarterOfTheYear(14));
// console.log(quarterOfTheYear(0));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//8)String repeat (Ripetizione di una stringa)
//Scrivi una funzione che accetti un numero intero non negativo n e una stringa s come parametri e restituisca una stringa di s ripetuta esattamente n volte.

// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



// function repeatString(n, s) {
//     if (n > 0) {
//         return s.repeat(n);
//     } else {
//         return '';  // se n è 0 o negativo, restituisco una stringa vuota quindi '' (empty string)
//     } 
// }
// console.log(repeatString(4, 'cane'));
// console.log(repeatString(-2, 'gatto'));



// const repeatString2 = (n, s) => n > 0? s.repeat(n) : ''; // operatore ternario che fa la stessa cosa della funzione sopra
// console.log(repeatString2(3, 'capra'));
// console.log(repeatString2(-6, 'gorilla'));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//9)Sum The Strings (Somma delle stringhe)
//Crea una funzione che accetta come input 2 numeri interi sotto forma di stringa e restituisce in output la somma (anch'essa sotto forma di stringa):

//Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Note:

// Se uno dei due input è una stringa vuota, consideralo pari a zero.

// Gli input e l'output previsto non supereranno mai il limite degli interi a 32 bit con segno (2^31 - 1)



function sumOfStrings(input1, input2) {

if (input1 === '') {
    input1 = Number('').toString();
     // per mettere a zero le stringhe vuote, uso Number('') che converte la stringa vuota in 0 e la somma sarà corretta
     // uso .toString(), in questo modo restituisco 0 come stringa
} else if (input2 === '') {  
    input2 = Number('').toString();  // NON MI PRENDE QUESTA CONDIZIONE!
}

let num1 = parseInt(input1); 
let num2 = parseInt(input2);

const sum = num1 + num2;

return sum.toString();

}

console.log(sumOfStrings('8', '5'));
console.log(sumOfStrings('-7', '5'));
console.log(sumOfStrings('', ''));
console.log(sumOfStrings('', '3'));




