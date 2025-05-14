// Nivel 1

//Ex 1

let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(nom => console.log(nom));

// Ex 2
console.log("--Ex2--")
for (const nom of noms){
    console.log(nom);
}

// Ex 3

let numeros = [1, 2, 3, 4, 5, 6];
let numPares = numeros.filter(num => num % 2 == 0);
console.log("Pares: " + numPares);

// Nivel 2

// Ex 4

let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }; 
for (const clave in obj){
    console.log(`Clave: ${clave} Valor: ${obj[clave]}`);
}

// Ex 5

let numeros2 = [1, 2, 3, 4, 5, 6];
for (num of numeros2){
    console.log(num);
    if (num == 5)
        break;
}

//Nivel 3

