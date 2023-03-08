// ITERACIÓN 1: VARIABLES

// 1.1 Crea una variable developer1 y asignale un nombre cualquiera.

let developer1 = "Agustín";

// 1.2.Imprime en consola el texto "El primer desarrollador se llama ****"

let developer1 = "Agustín";
console.log("El segundo desarrollador se llama " + developer1);

// 1.3.Crea una variable developer2 y asigna otro nombre.

let developer2 = "María";

// 1.4. Imprime en consola "El segundo desarrollador se llama ****"

let developer2 = "María";
console.log("El segundo desarrollador se llama " + developer2);

// ITERACIÓN 2: CONDICIONALES

// 2.1
// - Dependiendo de qué desarrollador tenga el nombre más largo se debe imprimir en consola:
// "El desarrollador con nombre **** es el más largo con ** caracteres".
// - En caso de que ambos tienen el mismo número de caracteres entonces imprime:
// "Qué casualidad, ambos nombres tienen ** caracteres".

let developer1 = "Agustín";
let developer2 = " María";

  if(developer1 === developer2) {
    console.log("Qué casualidad, ambos nombres tienen ** caracteres");}
    else if(developer1>developer2) 
    console.log("El desarrollador con nombre" developer1 "es el más largo con ** caracteres")


// ITERACIÓN 3: BUCLES

// Crea un programa que:
// - Solicita al usuario un nombre e imprime en consola la siguiente salida:

const input = prompt('NOMBRE_COMPLETO');

/* 

DETALLES para 'NOMBRE_COMPLETO':

Numero de palabras TOTAL_PALABRAS:
- P A L A B R A 1 (TOTAL_CARACTERS_PALABRA caracteres)
- P A L A B R A 2 (TOTAL_CARACTERS_PALABRA caracteres)
- P A L A B R A N (TOTAL_CARACTERS_PALABRA caracteres) 

*/

// Ejemplo si el usuario escribe Antonio Alberto Jesus en el prompt

/* 

DETALLES para 'Antonio Alberto Jesus':

Numero de palabras 3:
- A N T O N I O (7 caracteres)
- A L B E R T O (7 caracteres)
- J E S U S (5 caracteres) 

*/

//Para lograrlo necesitarás investigar, entender y aplicar los siguientes métodos y propiedades

// String.toUpperCase()
// Array.length
// String.length
// Array.split()
// Array.join()

// Happy coding!
// www.google.com
