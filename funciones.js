
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
console.log(resultadoSuma)  

function calPrecioIva(precio,iva_pct){
    const precio_iva=precio*(1+iva_pct/100).toFixed(2);
    return precio_iva;
}
let pvp=calPrecioIva(10,21)
console.log(pvp)
