
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

let i = 0;
while (i <= 10) {
    if(i%2===0){
        animales.push(i)
    }

 console.log("Lista actual: "+animales);
 console.log("------------")
 i++;
}
