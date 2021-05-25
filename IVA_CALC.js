/*
Calcular el precio con IVA de un producto
Mostrar textos con precios con y sin IVA
Funciones
*/

let precio_base=10;

let pct_iva_reducido=0.04;
let pct_iva_norm=0.1;
let pct_iva_recargado=0.21;

let precio_iva_red=precio_base*(1+pct_iva_reducido);
let precio_iva_norm=precio_base*(1+pct_iva_norm);
let precio_iva_recargado=precio_base*(1+pct_iva_recargado);

const lista_precios={
    pvp_base:precio_base,
    pvp_iv_reducido:precio_iva_red,
    pvp_norm:precio_iva_norm,
    pvp_recargo:precio_iva_recargado
}
console.log("Para el articulo con precio base = "+precio_base+" sus posibles precios son: ");
console.log(lista_precios)
console.log("El precio base del artículo es: "+precio_base+"\n El precio con iva reducido es: "+lista_precios.pvp_iv_reducido+
"\n El precio con iva estándar es: "+lista_precios.pvp_norm+
"\n El precio con iva recargado es: "+lista_precios.pvp_recargo)


    



