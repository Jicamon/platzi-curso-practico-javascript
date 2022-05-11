function esPar(num){

    if(num % 2 === 0){

        return true;

    }else{

        return false;

    }

}

function ordenaLista(lista){
    return lista.sort( function(a, b){
        return a - b;
    });
}


function calcularMediana(lista){
    let mediana = 0;

    const mitadLista = parseInt(lista.length / 2);

    const listaOrdenada = ordenaLista(lista);

    if(esPar(lista.length)){

        mediana = (listaOrdenada[mitadLista] + listaOrdenada[mitadLista - 1]) / 2;  

    }else{
        mediana = listaOrdenada[mitadLista];
    }
    
    return mediana;
}