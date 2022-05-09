// Código del cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();


// Código del Triangulo

console.group("Triangulo");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm."
); */

//console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

function perimetroTriangulo(ladoUno, ladoDos, base){
    return ladoUno + ladoDos + base;
} 

//console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

//console.log("El área del triangulo es de: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del Circulo
console.group("Circulo");

//Radio
/* const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + "cm");
 */
//Diametro
function diametroCirculo(radio){
    return radio * 2;
};
//console.log("El diametro del circulo mide: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
//console.log("PI vale: " + PI );

//Circunferencia 
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("La circunferencia del circulo mide: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio){
    return PI * (radio * radio);
} 
//console.log("El area del circulo mide: " + areaCirculo + "cm2");

console.groupEnd();
