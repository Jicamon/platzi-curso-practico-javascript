const salariosMex = mexico.map(

    function (persona) {
        return persona.salary;
    }

);

const salariosMexSorted = salariosMex.sort((a,b)=>a-b);

function esPar(num){
    return (num % 2 === 0);
}

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

console.log(
    medianaSalarios(salariosMexSorted)
);