// Nivel 1

//Ex 1

const numeros = [1,2,3,4];
//let cuadrados = numeros.map( (elemento, indice, array) => {} );
let cuadrados = numeros.map( elemento => elemento * elemento );

console.log("Cuadrados: " + cuadrados);

// Ex 2

const numeros2 = [1,2,3,4];
const pares = numeros2.filter(numero => numero % 2 == 0);
console.log("Pares: " + pares);

// Ex 3

const numeros3 = [1,10,8,11];
const primero_mayor_10 = numeros3.find(numero => numero > 10);
console.log("Mayor de 10: " + primero_mayor_10);

// Ex 4

const numeros4 = [13,7,8,21];
const suma = numeros4.reduce( (suma, numero) => suma + numero, 0);
console.log("Sumatorio: " + suma);

// Nivel 2

const numeros5 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
const resultado = numeros5.filter( numero => numero >= 10 )         //10, 15, 17, 11, 12
                        .map(numero => numero * 2)                  //20, 30, 34, 22, 24
                        .reduce((suma, numero) => suma + numero, 0);   //20+30=50+34=84+22=106+26=130
console.log("Operaciones encadenadas: " + resultado);

// Nivel 3

// Ex 6

const numeros6 = [11, 12, 13, 14];
const todos = numeros6.every(numero => numero > 10);
const alguno = numeros6.some(numero => numero > 10);
console.log(numeros6 + " Todos>10: " + todos + " Algunos>10: " + alguno);