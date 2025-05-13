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