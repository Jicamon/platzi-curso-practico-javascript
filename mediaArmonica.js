function sumatoriaDeInversas(lista){
    var sumatoriaInversa = 0;
    
    lista.forEach(element => {
        sumatoriaInversa += (1/element);
    });

    return  lista.length / sumatoriaInversa;
}
