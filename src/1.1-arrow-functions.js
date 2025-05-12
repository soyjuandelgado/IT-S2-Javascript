
console.log("SUMA");
// SUMA
let a = 3;
let b = 5;
let add = (a, b) => a + b; //suma es la funcion, no el retorno de la misma
let res = add(a,b);
console.log("Resultado", res);

//RANDOM
console.log("RANDOM");
//Math.random: aleatorios entre 0 y 1
//Math.floor: devuelve numeros enteros
let randomNumber = () => Math.floor(Math.random() * 101); 
console.log(randomNumber());

// GREET
console.log("GREET");

class Person{
    constructor(nombre){
        this.nombre = nombre;
    }

    greet = () => console.log(`Hola, ${this.nombre}`)
}

const persona = new Person("Juan");
persona.greet();

//Nivel 2

console.log("printNumbers");

function printNumbers(nums) {
    for (let i = 0; i < nums.length; i++) () => console.log(nums[i]);
}

let numbers = [3, 5, 7, 4, 2];
printNumbers(numbers);

//Nivel 3

console.log("setTimeout");

setTimeout( () => console.log("Mensaje retardado.") , 3000 );

