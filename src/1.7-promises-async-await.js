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
    let res = await promesa1();
    console.log("Resultado Asincrona: " + res);
}

asincrona();

// Nivel 2

// Ex 5

async function asincrona2() {
    try {
        let res = await promesa1();
        console.log("Resultado Asincrona 2: " + res);
    } catch (error) {
        console.log("Asincrona 2 no ha funcionado - " + error);
    }
}

asincrona2();

// Nivel 3

// Ex 6

const promesa2s = new Promise( (resolve) => {
    setTimeout(() => {
        console.log("Dentro promesa 2s")
        resolve("Promesa 2seg")
    }, 2000)
})

//const promesa3s = new Promise((resolve) => setTimeout(resolve("Promesa 3seg"), 3000))

const promesa3s = new Promise( (resolve) => {
    setTimeout(() => {
        console.log("Dentro promesa 3s")
        resolve("Promesa 3seg")
    }, 3000)
})

Promise.all([promesa2s, promesa3s])
    .then(res => {
        console.log(res)
    })