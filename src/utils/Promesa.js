"use strick";

let is_ok = true;
//creo una promesa que simula los seg que tarda el servidor en devolverme el arreglo de productos.
const simulatorPromises = (array)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (is_ok) {
                resolve(array)
            } else {
                reject('promesa no resuelta')
            }
        }, 1000);
    })
}

export default simulatorPromises;