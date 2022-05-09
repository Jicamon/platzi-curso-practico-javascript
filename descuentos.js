const cupones = 
[
    { 
        cupon: "DESC10",
        descuento: 10
    },
    { 
        cupon: "DESC30",
        descuento: 30
    },
    { 
        cupon: "DESC50",
        descuento: 50
    }
];

function getDiscountValue(key){
    
    const discount = cupones.find(x => x.cupon == key);
    if( discount != undefined ){
        return discount.descuento;
    }else{
        return 0;
    }
}

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = Number(document.getElementById("InputPrice").value);
    const inputCoupon = document.getElementById("InputCoupon").value;

    const discount = getDiscountValue(inputCoupon);

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, discount);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El Precio con descuento es: $" + precioConDescuento;
}

