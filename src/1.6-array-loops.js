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
let num_pares = numeros.filter(num => num % 2 == 0);
console.log("Pares: " + num_pares);