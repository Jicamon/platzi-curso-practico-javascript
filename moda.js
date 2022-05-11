const lista2 = [1,2,1,1,2,2,4,3,3,3,4,4,4,4];

function modaFinal(lista){

    let listaDeResultados = [];

    if(lista[lista.length - 1][1] > lista[lista.length - 2][1])
    {
        listaDeResultados.push(lista[lista.length - 1]);
        return listaDeResultados;
    }else{
        lista.pop();
        return listaDeResultados.push(modaFinal(lista));
    }
}

function calcularModa(lista){

    let listaCount = {};

    lista.map(
        function (elemento){
            if(listaCount[elemento]){

                listaCount[elemento]++;   

            } else {

                listaCount[elemento] = 1;
 
            }            
        }
    );

    console.group("listaCount");
    console.log(listaCount);
    console.groupEnd();
    const listaCountArray = Object.entries(listaCount).sort((a,b)=>a[1]-b[1]);
    console.group("listaCountArray");
    console.log(listaCountArray);
    console.groupEnd();

    let ultElem = [];
    let modas = [];

    do{
        ultElem = listaCountArray.pop();
        modas.push(ultElem);
    }while(listaCountArray.length >= 1 && ultElem[1] === listaCountArray[listaCountArray.length - 1][1] );

    //const moda = modaFinal(listaCountArray);

    if(modas.length > 1){
        let elementos = [];
        for(let i = 0; i < modas.length; i++){
            elementos.push(modas[i][0]);
        }

        return "Las modas son: " + elementos + " repitiendose " + modas[0][1] + " veces cada uno."

    } else {
        return "La moda es: " + modas[0][0] + " repitiendose " + modas[0][1] + " veces";
    }   
}

