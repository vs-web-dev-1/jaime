
function displayGreeting(name) {
    const message = `¡Hola, ${name}!`;
    console.log(message);
  }
displayGreeting("HAL9000")

function suma(sumando1, sumando2) {
    let sum = sumando1 + sumando2;
    return sum;
  }

let resultadoSuma=suma(3,4)
console.log("suma: \n"+resultadoSuma)  

function calPrecioIva(precio,iva_pct=10){

    const precio_iva=(precio*(1+iva_pct/100)).toFixed(2);
    return precio_iva;
}

let pvp=calPrecioIva(10)
console.log(pvp)

let lista_pvp={
    art1:10,
    art2:4.23,
    art3:24,
    art4:7.5,
    art5:24.8
}

const iva_recargado=21;

for (const property in lista_pvp) {

    console.log("Sin Iva: ");
    console.log(`${property} = ${lista_pvp[property]}`);

    console.log("Con Iva "+iva_recargado+"% : ");
    console.log(`${property} = ${calPrecioIva(lista_pvp[property],iva_recargado)}`);

  }

