var InputCantidad = 0;
var InputInteres = 0;
var InputTiempo = 0;

function calcularGananciaAnual(cantidad, porcentaje){
    return cantidad + (cantidad * porcentaje) / 100;
};

function calcularGananciaCompuestaTotal(cantidad, porcentaje, tiempo){
    var cantidadAcumulada = cantidad;
    for(var i = 0; i < tiempo; i++){
        cantidadAcumulada = calcularGananciaAnual(cantidadAcumulada, porcentaje);
    }
    return cantidadAcumulada;
}

function calcularGananciaTotal(cantidad, porcentaje, tiempo){
    var cantidadAcumulada = cantidad;
    for(var i = 0; i < tiempo; i++){
        cantidadAcumulada += calcularGananciaAnual(cantidad, porcentaje) - cantidad;
    }
    return cantidadAcumulada;
}

function calcularGanancia(){
    var cantidad = Number(document.getElementById("InputCantidad").value);
    var porcentaje = Number(document.getElementById("InputInteres").value);
    var tiempo = Number(document.getElementById("InputTiempo").value);
    var resultado = document.getElementById("Resultado");
    var selectIntereces = document.getElementById("SelectIntereces");
    if(Number(selectIntereces.value) === 1){
        var cantidadFinal = calcularGananciaCompuestaTotal(cantidad, porcentaje, tiempo);
    } else {
        var cantidadFinal = calcularGananciaTotal(cantidad, porcentaje, tiempo);
    }
    
    var gananciaReal = cantidadFinal - cantidad;
    
    resultado.innerText = 
        "La ganancia total es de: " 
        + cantidadFinal.toLocaleString('en-US') 
        + ". La ganancia real es de: " 
        + gananciaReal.toLocaleString('en-US');
}

