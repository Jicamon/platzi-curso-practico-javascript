// Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm2");

console.groupEnd();


// Código del Triangulo

console.group("Triangulo");

const ladoTriangulo1 = 6;
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
);

console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("El área del triangulo es de: " + areaTriangulo + "cm2");

console.groupEnd();

// Código del Circulo
console.group("Circulo");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI vale: " + PI );

//Circunferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo mide: " + perimetroCirculo + "cm");

//Área
const areaCirculo = PI * (radioCirculo * radioCirculo)
console.log("El area del circulo mide: " + areaCirculo + "cm2");

console.groupEnd();
