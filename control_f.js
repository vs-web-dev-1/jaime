
let a=1;
let b=4;
console.log("------------")
console.log("------------")
console.log("a es "+a);
console.log("b es "+b);
console.log("------------")
console.log("------------")
console.log("control menor o igual que:");

if(a<=b){
    console.log("a es menor que b")
}else{
    console.log("a no es menor que b")
}
console.log("------------")
console.log("control mayor o igual que:")

if(a>=b){
    console.log("a es mayor o igual que b")
}else{
    console.log("a no es mayor o igual que b")
}
console.log("------------")
console.log("control menor o igual que (apuntes):")

if(a=>b){
    console.log("a es igual o mayor que b")
}else{
    console.log("a no es igual o mayor que b")
}

console.log("------------")
console.log("------------")
console.log("------------")

let animales=["orca","gato","mono","canario"];
animales.push("vaca");
console.log("Lista de animales: "+animales);
console.log("------------")
console.log("------------")
console.log(" Control de While: ")
console.log("------------");

let i = 0;

while (i <= 10) {

    if(i%2===0){
        animales.push(i);
    }

 console.log("Lista actual: "+animales);
 console.log("------------");
 i++;
}

console.log("------------");
console.log("------------");
console.log(" Control de array: ")
console.log("------------");

for (let i = 0; i < animales.length; i++) {
    if(typeof animales[i]==='string'){
        console.log(animales[i]+" es un animal");
    }else if(typeof animales[i]==='number'){
        console.log(animales[i]+" es un numero");
    }    
}

console.log("------------");
console.log(" Control de array con Switch: ")
console.log("------------");
for (let i = 0; i < animales.length; i++) {
  switch(typeof animales[i]){
      case 'string': 
        console.log(animales[i]+" es un animal");
        break;
      case 'number':
        console.log(animales[i]+" es un numero");   
        break;

  }
}
console.log("------------");
console.log(animales.values(2))
console.log("------------INDEX VACA:");
console.log(animales.indexOf("vaca"))
console.log("------------ FOR EACH----------");

let tipo = (a) => console.log(a+": "+typeof(a));

animales.forEach(tipo);

