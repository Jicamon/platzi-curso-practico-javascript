let nombre = "Andrés";
let apellido = "Rivera";
let nombreUsusario = "Jicamon";
let edad = 25;
let correoElectronico = "chuy_1322@hotmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 50.00;
let deudas = 20.00;

document.write(nombre + " " + apellido);
document.write(dineroAhorrado - deudas);

function infoPersonal(name, lastname, nickname){
    const completeName = name + " " + lastname;

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       
       break;
   case "Basic":
       
       break;
   case "Expert":
       
       break;
   case "ExpertPlus":
       
       break;
}

if(tipoDeSuscripcion === "Free")
{
    console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripcion === "Basic")
{
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if(tipoDeSuscripcion === "Expert")
{
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}       

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while(i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

for (let i2 = 10; i2 >= 2; i2--) {
    console.log("El valor de i es: " + i2);
}

let i2 = 10;
while(i2 >= 2){
    console.log("El valor de i2 es: "+ i2);
    i2--;
}


var solucion = 0
do{
    solucion = Number(prompt('Cuanto es 2+2?'))
}while(solucion!==4)
alert("Felicidades, es correcto")

let x = ["primero","segundo","tercero"];
function imprimePrimero(x){
alert(x[0]);
}

function imprimeTodos(x){
    for(let i = 0; i < x.length; i++){
        console.log(x[i]);
    }
}

let obj = {
    name: "Jesus",
    age: 25, 
    nickname: "Jicamon"
}
function imprimeObjeto(obj){

}