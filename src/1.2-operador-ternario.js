function potConduir(edat) {
    return ((edat >= 18) ? "Pots conduir" : "No pots conduir");
}

console.log(potConduir(17));

//Ex 2
let n = 5;
let m = 7;
console.log( (n < 7) ? "num1 és més gran" : "num2 és més gran" );

//Nivel 2

function signoNumero(num){
    return (num < 0) ? -1 :
            (num > 0) ? +1 : 
                0;
}

console.log( signoNumero(20) );

function trobarMaxim(a, b, c){
    return (a > b && a > c) ? a :
            (b > c && b > a) ? b :
                c;
}
let a = 4, b = 5, c=3;
console.log(`a:${a}, b:${b}, c:${c} -> El mayor es:${trobarMaxim(a,b,c)}`)

// Nivell 3

function parOImpar(numeros){
    let esPar = []
    for (let i = 0; i < numeros.length; i++) {
        esPar[i] = (numeros[i] % 2 == 0) ? 1 : 0;
    }
    return esPar;
}

numeros = [1,2,3,4,5,6];

console.log(`Array: ${numeros}`);
console.log(`Array: ${parOImpar(numeros)}`);