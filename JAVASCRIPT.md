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

## Transformaciones en Arrays

### Funcion `.map`

Llama a una funcion callback por cada elemento del array y devuelve un array con los resultados.

```javascript
const numeros = [1,2,3,4];
//let cuadrados = numeros.map( (elemento, indice, array) => {} );
let cuadrados = numeros.map( elemento => elemento * elemento );

console.log(cuadrados);
```

### Funcion `.filter`

Crea un nuevo array con todos los elementos que cumplan una condición especificada por una función.

```javascript
const nuevoArray = array.filter((elemento, índice, array) => {
  return condición;
});
```

```javascript
const numeros2 = [1,2,3,4];
const pares = numeros2.filter(numero => numero % 2 == 0);
console.log(pares);
```

### Funcion `.find`

Devuelve el primer elemento que cumple la condicion.

```javascript
const resultado = array.find((elemento, índice, array) => {
  return condición;
});
```

```javascript
const numeros3 = [1,10,8,11];
const primero_mayor_10 = numeros3.find(numero => numero > 10);
console.log(primero_mayor_10);
```

### Funcion `.reduce`

Se utiliza para recorrer los elementos de un array, usando una funcion para cada elemento y un acumulador que guarda el resultado.

El formato es: `array.reduce(funcion, valor inicial)`.

```javascript
const resultado = array.reduce((acumulador, elemento, índice, array) => {
  return nuevoAcumulador;
}, valorInicial);
```

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

```javascript
const numeros4 = [13,7,8,21];
const suma = numeros4.reduce( (suma, numero) => suma + numero, 0);
console.log("Sumatorio: " + suma);
```

### Funcion `.every`

Devuelve `true` si todos los elementos del array cumplen la condición. Si alguno no la cumple, devuelve `false`.

```javascript
const edades = [18, 22, 30, 19];
const todosMayoresDeEdad = edades.every(edad => edad >= 18);
console.log(todosMayoresDeEdad); // true
```

### Funcion `.some`

Devuelve `true` si al menos uno de los elementos cumple la condición. Si ninguno la cumple, devuelve `false`.

```javascript
const edades = [14, 17, 20, 15];
const hayMayoresDeEdad = edades.some(edad => edad >= 18);
console.log(hayMayoresDeEdad); // true
```

## Bucles en Arrays

### Bucle `forEach`

```javascript
array.forEach(function(elemento, indice, array) {
  // Código a ejecutar por cada elemento
});
```

```javascript
array.forEach((elemento, indice, array) => {
  // Código a ejecutar por cada elemento
});
```

> `indice` y `array` son opcionales.

```javascript
let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(nom => console.log(nom));
```

### Bucle `for...of`

Se utiliza para iterar directamente sobre los valores de objetos iterables como arrays, strings, mapas, sets, etc.

```javascript
for (const elemento of iterable) {
  // Código a ejecutar con cada elemento
}
```

Se puede usar `break` para salir del bucle.

#### Funcion `.entries`

Si se necesita el indice del array se puede obtener con la funcion `.entries`.

```javascript
const frutas = ['manzana', 'banana', 'uva'];

for (const [indice, valor] of frutas.entries()) {
  console.log(`${indice}: ${valor}`);
}
```

### Bucle `for...in`

Se utiliza para recorrer las propiedades enumerables de un objeto. En lugar de valores como en for...of, este bucle itera sobre las claves (nombres de propiedades).

```javascript
for (const clave in objeto) {
  // Código a ejecutar con cada clave
}
```

```javascript
let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' }; 
for (const clave in obj){
    console.log(`Clave: ${clave} Valor: ${obj[clave]}`);
}
```

## Promesas

Las **Promises** son un mecanismo que permite manejar operaciones asíncronas de una manera más estructurada y comprensible, especialmente cuando se tienen múltiples operaciones que deben ejecutarse de forma secuencial o paralela.

Una **Promise** es un objeto que representa la eventual finalización (o fracaso) de una operación asíncrona. Se puede decir que una **Promise** es un compromiso de que se resolverá con un valor en el futuro, o bien con un error si algo sale mal.

### Estados de una Promise

Una Promise puede estar en uno de estos tres estados:

1. **Pendiente (Pending)**: La operación aún no se ha completado.
2. **Resuelta (Fulfilled)**: La operación se ha completado correctamente.
3. **Rechazada (Rejected)**: Hubo un error en la operación.

### Sintaxis básica de una Promise

⚠️ Es obligatorio llamar a las funciones `resolve` y `reject` dentro del código de la promesa.

```javascript
let miPromise = new Promise((resolve, reject) => {
  // Simulación de operación asíncrona
  let exito = true;
  if (exito) {
    resolve("Operación exitosa");
  } else {
    reject("Hubo un error");
  }
});

miPromise
  .then(result => {
    console.log(result); // Si la Promise se resuelve
  })
  .catch(error => {
    console.log(error); // Si la Promise es rechazada
  });
```

Si hace falta una funcion que devuelva una promesa este sería el formato:

```javascript
let promesa1 = () => { 
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (true)
                resolve("Hola, mundo");
            else
                reject(new Error("Fallo"));
        } , 2000);
    })
};
```

### Encadenamiento de Promises

Se pueden encadenar múltiples Promises usando `.then()` para realizar acciones secuenciales.

```javascript
obtenerDatos()
  .then(datos => {
    console.log("Datos obtenidos:", datos);
    return "Operación siguiente"; // Devuelve una nueva Promise
  })
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.log("Error:", error);
  });
```

### Promesas con `async` / `await`

En lugar de usar `.then()` y `.catch()`, podemos usar `async` y `await` para escribir código más limpio y fácil de leer.

```javascript
async function ejecutar() {
  try {
    let datos = await obtenerDatos();
    console.log("Datos obtenidos:", datos);
  } catch (error) {
    console.log("Error:", error);
  }
}

ejecutar();
```
