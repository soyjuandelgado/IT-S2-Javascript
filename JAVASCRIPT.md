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
