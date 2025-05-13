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