


//let a=1;

let radioMedio=45;
const PI=3.14159625;

const bici = {
    marca:"bh",
    precio:100,
    es_mountain:true,
    radio:45,
    rueda:2*PI*radioMedio
};

console.log(bici);
console.log("Rueda: "+bici.radio+" con circunf "+bici.rueda);

let biciRadioMedio =  bici.radio==radioMedio;
console.log(biciRadioMedio);

let biciRadioMedio2 =  bici.radio=="45";
console.log(biciRadioMedio2);

let biciRadioMedio3 =  bici.radio==="45";
console.log(biciRadioMedio3);



let uno=1;
let dos=2;
let mayor=dos>uno;
let menor=uno<dos;
let distinto=dos!=uno;
let superDistinto= uno!== dos;
let superIgual= uno===uno;
console.log("dos es mayor que uno: "+mayor)
console.log("uno es distinto de dos "+distinto);
