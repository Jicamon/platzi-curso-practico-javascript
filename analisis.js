// Helpers

function esPar(num){
    return (num % 2 === 0);
}

// Calculadora de mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    var mediana = 0;

    if(esPar(lista.length)){

        mediana = (lista[mitad] + lista[mitad - 1]) / 2;
                
    } else {

        mediana = lista[mitad];
        
    }

    return mediana;
}

// Mediana general
const salariosMex = mexico.map(

    function (persona) {
        return persona.salary;
    }

);

const salariosMexSorted = salariosMex.sort((a,b)=>a-b);


const medianaGeneralMex = medianaSalarios(salariosMexSorted);

// Mediana del Top 10%

const spliceStart = parseInt((salariosMexSorted.length * 90 ) / 100);
const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(spliceStart, spliceCount);

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log({
    medianaGeneralMex,
    medianaTop10Mex,
});