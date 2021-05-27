
const numeros=[];

const SIZE=numeros.length;

function inicializarNumeros(arr,tamanio){
    for(let i=1;i<=tamanio;i++){
        arr.push(i);
    }
    
}

function mostrarNumeros(arr){
    for(let i=0;i<=arr.length;i++){
        console.log(`En la posicion ${i} tenemos el num ${arr[i]}`);
    }
}

function mostrarPares(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            console.log(`En la posición ${i} está el número par ${arr[i]}`);
        }
    }
}


function extraerPares(arr){
    return arr.filter((numero)=>numero %2 ===0);
}

function obtenerCuadrados(arr){
    return arr.map((numero)=>numero**2);
}

function cuadradosDePares(arr){
    return arr.filter((numero) => numero%2 === 0).map((par)=>par**2);
}

inicializarNumeros(numeros,9);
mostrarNumeros(numeros);
mostrarPares(numeros);
console.log(extraerPares(numeros));
console.log(obtenerCuadrados(numeros));
console.log(cuadradosDePares(numeros));


export const funcionesNumeros={
    inicializar:inicializarNumeros,
    mostrar:mostrarNumeros,
    n: numeros,
    cuadPar:cuadradosDePares,
    cuadrados:obtenerCuadrados
};
