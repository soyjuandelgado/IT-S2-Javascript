// Nivel 1
// Ex 1

num1 = [1,2,3];
num2 = [4,5,6];
num1y2 = [...num1, ...num2];
console.log(num1y2);

// Ex 2

function suma(...nums){
    return nums.reduce( (total, num) => {
                            return total + num;
                        }, 0);
}

let nums = [5, 8, 9];
console.log(suma(1, 4, 7)); 
console.log(suma(...nums)); //usando spread

// Nivel 2

// Ex 3

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1};

console.log(obj2);
obj2.a = 3;
console.log(obj1);

// Ex 4

const elementos = [1, 2, 3, 4, 5];
let [primero, segundo, ...otros] = elementos;

console.log(primero);
console.log(segundo);
console.log(otros);

// Nivel 3

// Ex 5