
function arrowFunctions(){
    const salida = document.getElementById("salida")

    console.log("SUMA");
    salida.innerHTML = "SUMA<br>";
    // SUMA
    let a = 3;
    let b = 5;
    let add = (a, b) => a + b; //suma es la funcion, no el retorno de la misma
    let res = add(a,b);
    console.log("Resultado", res);
    salida.innerHTML += `Resultado ${res}<br>`;

    //RANDOM
    console.log("RANDOM");
    salida.innerHTML += "RANDOM<br>";
    //Math.random: aleatorios entre 0 y 1
    //Math.floor: devuelve numeros enteros
    let randomNumber = () => Math.floor(Math.random() * 101); 
    console.log(randomNumber());
    salida.innerHTML += randomNumber() + "<br>";

    // GREET
    console.log("GREET");
    salida.innerHTML += "GREET<br>";
    class Person{
        constructor(nombre){
            this.nombre = nombre;
        }

        greet = () => {console.log(`Hola, ${this.nombre}`)
                salida.innerHTML += `Hola, ${this.nombre}` + "<br>";}   
    }

    const persona = new Person("Juan");
    persona.greet();

    //Nivel 2

    console.log("printNumbers");
    salida.innerHTML += "printNumbers<br>";

    function printNumbers(nums) {
        nums.map(num => {console.log(num);
                        salida.innerHTML += num + "<br>";
                    })
    }

    let numbers = [3, 5, 7, 4, 2];
    printNumbers(numbers);

    //Nivel 3

    console.log("setTimeout");
    salida.innerHTML += "setTimeout<br>";

    setTimeout( () => {console.log("Mensaje retardado.")
        salida.innerHTML += "Mensaje retardado.<br>";
    } , 3000 );
}