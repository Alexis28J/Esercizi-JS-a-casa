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



// function sumOfStrings(input1, input2) {

// let num1 = parseInt(input1); // uso parseInt() per convertire le stringhe in numeri interi
// let num2 = parseInt(input2); 

// if (input1 === '') {
//     num1 = 0;  // se la stringa è vuota, la considero come 0
// }
// if (input2 === '') {
//     num2 = 0;  // se la stringa è vuota, la considero come 0
// } 

// //posso mettere due if separati perchè entrambi devono essere verificati indipendentemente l'uno dall'altro

// let sum = num1 + num2;

// return sum.toString(); // uso toString() per convertire il risultato della somma in una stringa
// }
// console.log(sumOfStrings('8', '5'));
// console.log(sumOfStrings('-7', '5'));
// console.log(sumOfStrings('', ''));
// console.log(sumOfStrings('', '3'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//10)Hex to Decimal (Da esadecimale a decimale)
//Completa la funzione che converte un numero esadecimale (fornito come stringa) in un numero decimale.

// function hexToDecimal(num) {
//   return parseInt(num, 16);  //parseInt() è una funzione integrata in JavaScript che converte una stringa in un numero intero.
//   // uso parseInt() per convertire la stringa esadecimale in un numero decimale
//   // il secondo argomento (16) indica che la base del numero è esadecimale
// }

// // Esempio di utilizzo
// console.log(hexToDecimal("1A")); // Output: 26
// console.log(hexToDecimal("FF")); //-> 255
// console.log(hexToDecimal("A")); //-> 10
// console.log(hexToDecimal("9C")); //-> 156


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//11)String Cleaning (pulizia delle stringhe)
//Il tuo capo ha deciso di risparmiare acquistando un software di riconoscimento ottico dei caratteri a basso costo per la scansione di vecchi romanzi nel tuo database. All'inizio sembra catturare le parole correttamente, ma ti accorgi subito che inserisce molti numeri in punti casuali del testo.

// Examples (input -> output)

// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'


//I tuoi colleghi stressati si stanno rivolgendo a te per trovare una soluzione che rimuova tutti i numeri da questo testo confuso. Il tuo programma prenderà una stringa e la pulirà da tutti i caratteri numerici, restituendo una stringa con spaziatura e caratteri speciali ~#$%^&!@*():;"'.,? tutti intatti.

// function stringCleaning(str) {

//     let newString = ''; // inizializzo la variabile newString come stringa vuota per memorizzare il risultato finale.

//     const nbr = '0123456789'; // definisco una stringa contenente tutti i numeri da 0 a 9 

//     for (let i = 0; i < str.length; i++) {
//         const element = str[i];
//         if (nbr.includes(element)) { // uso includes() per verificare se l'elemento corrente è un numero
//             // includes() restituisce true se l'elemento è presente nella stringa nbr, altrimenti restituisce false
//             // se è un numero, non lo aggiungo a newString
//             //la funzione includes() è case-sensitive, quindi distingue tra maiuscole e minuscole
//             //la sintassi corretta è: string.includes(substring) che verifica se la sottostringa è presente nella stringa

//             continue; // se è un numero, salto l'iterazione corrente e passo alla successiva
//             //continue interrompe l'iterazione corrente del ciclo e passa alla successiva
//             //e uguale a dire: "se è un numero, non fare nulla e passa al prossimo carattere"
//             //break invece interrompe completamente il ciclo
//         }

//         newString = newString + element; // se non è un numero, lo aggiungo a newString
//     }
//     return newString; // restituisco la stringa pulita senza numeri
// }

// console.log(stringCleaning('This looks5 grea8t!'));
// console.log(stringCleaning('123456789'));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//12)Beginner Series #4 Cockroach (Serie per principianti n. 4 Scarafaggio)
//Lo scarafaggio è uno degli insetti più veloci. Scrivi una funzione che prenda la sua velocità in km/h e la restituisca in cm/s, arrotondata per difetto all'intero (= floored).


// Per esempio:  1.08 km/h --> 30 cm/s

//Nota! L'input è un numero reale (il tipo effettivo dipende dal linguaggio) ed è >= 0. Il risultato dovrebbe essere un intero.


// Per convertire i km/h in cm/s si deve dividere per 3,6. Questa è una conseguenza della relazione tra chilometri orari e metri al secondo, infatti 1 m/s = 3,6 km/h, e dunque 1 km/h = 1/3,6 m/s.
//conversione da km/h a cm/s:
//1km = 100000 cm,  1 ora = 3600 secondi
//allora la relazione cm/s = km/h x 100000/3600


// function cockroachSpeed(kmh) {

//     let speedInCmS = Math.floor(kmh*(100000 / 3600));  //Math.floor() in JavaScript serve ad arrotondare un numero per difetto al valore intero più vicino inferiore o uguale al numero stesso.

//     return speedInCmS;
// }


// console.log(cockroachSpeed(1.08));
// console.log(cockroachSpeed(15));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//13) You're a square! (Sei un quadrato!)
//Un quadrato di quadrati

// Ti piacciono i mattoncini da costruzione. Ti piacciono soprattutto i mattoncini quadrati. E quello che ti piace ancora di più è disporli in un quadrato di mattoncini quadrati!
// Tuttavia, a volte, non puoi disporli in un quadrato. Invece, ti ritrovi con un normale rettangolo! Quelle maledette cose! Se solo avessi un modo per sapere se stai lavorando invano... Aspetta! Ecco fatto! Devi solo controllare se il numero di mattoncini che hai è un quadrato perfetto.
// Esercizio
// Dato un numero intero, determina se è un quadrato:
// In matematica, un numero quadrato o quadrato perfetto è un numero intero che è il quadrato di un intero; in altre parole, è il prodotto di un numero intero per se stesso.
// I test useranno sempre un numero intero, quindi non preoccuparti nei linguaggi a tipizzazione dinamica.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false


// function perfectSquare(nbr) {

//     let n = Math.sqrt(nbr);       // "Math.sqrt() calcola la radice quadrata"

//     if (Number.isInteger(n)) {   // Per verificare una condizione su un numero intero in JavaScript si può usare "Number.isInteger()".
//         return true;
//     } else {
//         return false;
//     }

// }

// console.log(perfectSquare(-1));
// console.log(perfectSquare(0));
// console.log(perfectSquare(3));
// console.log(perfectSquare(4));
// console.log(perfectSquare(25));
// console.log(perfectSquare(26));
// console.log(perfectSquare(81));
// console.log(perfectSquare(11));
// console.log(perfectSquare(47));
// console.log(perfectSquare(-4));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//14) Regex validate PIN code (Codice PIN di convalida Regex)
//Gli sportelli bancomat accettano codici PIN a 4 o 6 cifre, e i codici PIN non possono contenere più di 4 o 6 cifre.
//Se alla funzione viene passata una stringa PIN valida, restituisce true, altrimenti restituisce false.

// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function pinValidator(input) {   // RIFARLO!

for (let i = 0; i < input.length; i++) {

    if (input.length === 4 || input.length === 6) {
        return true;
    }

    if (input[i].includes('0123456789')) {
        return true;

    } else if (input[i].includes('abcdefghijklmnopqrstuvwxyz')) {
        return false;
    }
    
}
}

console.log(pinValidator("1234"));
console.log(pinValidator("12345"));
console.log(pinValidator("a234"));
console.log(pinValidator("a2v"));
console.log(pinValidator("a2341j"));







