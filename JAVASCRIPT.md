# Javascript

## Funciones flecha

```javascript
let add = (a, b) => a + b; //suma es la funcion, no el retorno de la misma
let res = add(a,b);
```

```javascript
class Person{
    constructor(nombre){
        this.nombre = nombre;
    }

    greet = () => console.log(`Hola, ${this.nombre}`)
}
```

```javascript
function printNumbers(nums) {
    for (let i = 0; i < nums.length; i++) () => console.log(nums[i]);
}

let numbers = [3, 5, 7, 4, 2];
printNumbers(numbers);
```

```javascript
setTimeout( () => console.log("Mensaje retardado.") , 3000 );
```

## Operador ternario

Formato: `condición ? valorSiVerdadero : valorSiFalso;`

```javascript
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);  // "Eres mayor de edad"
```

### Operador ternario anidado

```javascript
let nota = 85;
let resultado = nota >= 90 ? "Excelente" :
                nota >= 70 ? "Aprobado" :
                "Suspendido";
console.log(resultado); // "Aprobado"
```

## Callbacks

Es una función que **se pasa como argumento a otra función** y se ejecuta después de que se complete una operación, o en un momento específico determinado por esa función.

```javascript
function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
  const nombre = "Ana";
  callback(nombre); // Ejecuta la función pasada como parámetro
}

procesarEntradaUsuario(saludar);
```

## Funcion `setTimeout`

Si se llama a una funcion dentro y no tiene parametros, hay que llamarla sin parentesis porque en el momento de ponerle los parentesis se ejecuta sin esperar.

Si la funcion que se llama lleva parámetros, hay que llamarla con una arrow.

```javascript
setTimeout( () => console.log("Mensaje retardado.") , 3000 );
```

## Bucle For

### For indexado

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### For..of

Recorre los elementos,

```javascript
const frutas = ['manzana', 'banana', 'uva'];

for (const fruta of frutas) {
  console.log(fruta);
}
```

### For..in

Recorre los indices de los elementos. No se recomienda para arrays.

```javascript
const persona = { nombre: 'Ana', edad: 30 };

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
```

### ForEach

Ejecuta una funcion por cada elemento del array.

```javascript
const numeros = [1, 2, 3];

numeros.forEach((num) => {
  console.log(num);
});
```

## Rest y Spread

💡 Ambos usan los mismos tres puntos ..., pero su función depende del contexto:

- Si es entrada, es rest (agrupa).
- Si es salida, es spread (expande).

### Operador Rest `...`

Rest agrupa elementos en una función o destructuración.

```javascript
function suma(...nums){
    return nums.reduce( (total, num) => {
                            return total + num;
                        }, 0);
}

let nums = [5, 8, 9];
console.log(suma(1, 4, 7)); 
```

#### Desestructurar arrays

```javascript
const [primero, ...resto] = [10, 20, 30, 40];
console.log(primero); // 10
console.log(resto);   // [20, 30, 40]
```

### Operador Spread `...`

Descompone en elementos un iterable (array, objeto o cadena).

Copia:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Copia arr1
```

Combina:

```javascript
const nums1 = [1, 2];
const nums2 = [3, 4];
const allNums = [...nums1, ...nums2]; // [1, 2, 3, 4]
```

Paso de parametros:

```javascript
const numbers = [4, 7, 1];
Math.max(...numbers); // equivalente a Math.max(4, 7, 1)
```

Clona y modifica:

```javascript
const user = { name: "Ana", age: 25 };
const updatedUser = { ...user, age: 26 }; // sobrescribe "age"
```

### Funcion `.reduce`

Se utiliza para recorrer los elementos de un array, usando una funcion para cada elemento y un acumulador que guarda el resultado. 

El formato es: `array.reduce(funcion, valor inicial)`.

Los parámetros de la funcion son:

- acumulador: variable que guarda el resultado. Es donde va a parar el return de la funcion.
- elemento: cada uno de los elementos del array.
- indice(opcional): indice del elemento actual del array.
- array(opcional): array a tratar.

```javascript
const numeros= [1, 2, 3, 4, 5];

numeros.reduce((acumulador, elemento, indice, array) => {
    console.log(`${acumulador}: este es el valor del acumulador en cada iteración`);
    console.log(`${elemento}: este es el valor del elemento`);
    console.log(`${indice}: este es el índice del elemento en el array`);
    console.log(`${array}: este es el array que estamos recorriendo`);

    return acumulador + elemento;
}, 0);

```

```javascript
const numeros = [1, 2, 3, 4, 5];
const sumaTotal = numeros.reduce((total, numero) => {
     return total + numero;
}, 0);

console.log("Suma total: ", sumaTotal);
```

## Objetos

En JavaScript, los **objetos** son estructuras de datos que permiten almacenar pares clave-valor. Son fundamentales para organizar información compleja.

### 📦 Crear un objeto

```js
const persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};
```

### 🔍 Acceder a propiedades

```js
console.log(persona.nombre);  // Ana
console.log(persona["edad"]); // 30
```

### ✏️ Modificar propiedades

```js
persona.edad = 31;
persona["ciudad"] = "Barcelona";
```

### ➕ Agregar nuevas propiedades

```js
persona.profesion = "Ingeniera";
```

### ❌ Eliminar propiedades

```js
delete persona.ciudad;
```

### 🔁 Recorrer propiedades

```js
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}
```

### 🧩 Métodos en objetos

Los objetos pueden tener funciones como propiedades, llamadas **métodos**:

```js
const persona = {
  nombre: "Ana",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  }
};

persona.saludar();  // Hola, soy Ana
```
