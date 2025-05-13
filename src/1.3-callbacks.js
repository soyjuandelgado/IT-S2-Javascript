// Nivel 1

// Ex 1
function cuadrado(num){
    return num * num;
}

function procesar(num, funcion){
    return funcion(num);
}

let num = 2;

console.log("Resultado procesado:" + procesar(num, cuadrado));

// Ex 2

function suma(n, m){
    return(n + m);
}

function calculadora(n, m, funcion){
    return funcion(n, m);
}

let n = 2;
let m = 3;
console.log(`Parametros: ${n}, ${m} - Resultado Calculadora:` + calculadora(n, m, suma));

// Nivel 2

//Ex 3

function saludar(nombre){
    console.log(`Hola, ${nombre}`);
}

function esperarISaludar(nombre, funcion){
    setTimeout(() => funcion(nombre), 2000);
}

let nombre = "Juan";
esperarISaludar(nombre, saludar);

// Ex 4

function imprimirElement(element){
    console.log("Elemento procesado:" + element);
}
function processarElements(elements, funcion){
    for (const element of elements){
        funcion(element);
    }
}

let elements = [1,2,3,4,5]

processarElements(elements, imprimirElement);