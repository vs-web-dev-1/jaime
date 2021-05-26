
let iva_aplicable=21;

let prod1={art_n:"zapatos",art_precio:"45",art_iva:true};
let prod2={art_n:"pan",art_precio:"2",art_iva:false};
let prod3={art_n:"Chaqueta",art_precio:"35",art_iva:true};
let prod4={art_n:"Café",art_precio:"5",art_iva:false};

lista_compra=[prod1,prod2,prod3,prod4];

for(let i=0;i < lista_compra.length; i++) {
    
    let precio_final;
    
        if(lista_compra[i].art_iva==true){
            precio_final=(lista_compra[i].art_precio*(1+iva_aplicable/100)).toFixed(2);
        } else {
            precio_final=lista_compra[i].art_precio;
        }

    console.log("-----------------------------------");
    console.log("Artículo "+i+": "+lista_compra[i].art_n+
    " con precio base= "+lista_compra[i].art_precio+". "+
    "Tiene Iva: "+lista_compra[i].art_iva+" --> Precio final: "+precio_final);
    console.log("-----------------------------------");

  }
