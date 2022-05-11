const lista1 = [
    100,
    200,
    300,
    500
];

function sumatoriaLista(lista){
/*     let sumatoriaLista = 0;

    for(let i = 0; i < lista.length; i++){
        sumatoriaLista += lista[i];
    } */

    const sumatoriaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    return sumatoriaLista;
}


function calcularMediaAritmetica(lista){

    const sumatoria = sumatoriaLista(lista);
    const promedioAritmetico = sumatoria / lista.length;

    return promedioAritmetico;
}