// Nivel 1

// Ex 1

let promesa1 = () => { 
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (true)
                resolve("Hola, món");
            else
                reject(new Error("Fallo"));
        } , 2000);
    })
};

// Ex 2

promesa1().then( res => console.log(`Resultado promesa 1: ${res}`) );

// Ex 3

let promesa2 = new Promise( (resolve, reject) => {
    let texto = 
    prompt("Introduce un texto");
    setTimeout( () =>{
        if (texto=="Hola")
            resolve(texto);
        else
            reject(new Error("El texto introducido no es 'Hola'."));
    }, 2000);
});

promesa2.then( res => console.log("Promesa 2 correcta con texto: " + res) )
    .catch( error => console.log("Promesa 2 con error: " + error));

//Ex 4

async function asincrona() {
    try {
        let res = await promesa1();
        console.log("Resultado Asincrona: " + res);
    } catch (error) {
        console.log("No ha funcionado - " + error);
    }
}

asincrona();