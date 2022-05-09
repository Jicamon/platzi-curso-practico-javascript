const precioOriginal = 120;
const descuento = 18;
/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = Number(document.getElementById("InputPrice").value);
    const inputDiscount = Number(document.getElementById("InputDiscount").value);

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El Precio con descuento es: $" + precioConDescuento;
}