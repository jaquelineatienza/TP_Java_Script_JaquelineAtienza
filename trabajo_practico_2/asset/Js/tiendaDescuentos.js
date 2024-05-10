let producto = 200;
let cantidadProducto=parseInt(prompt("ingrese la cantidad de productos a comprar"));
let totalProducto= producto*cantidadProducto;

if(isNaN(cantidadProducto)|| cantidadProducto<1){
    alert("error de tipeo por favor intentelo de nuevo")
}else if(cantidadProducto>1){
    totalProducto=cantidadProducto*producto;
    if(totalProducto>=2000){
    
        let descuento= totalProducto-(0.15*totalProducto);
        alert("total con descuento"+ descuento);
    }else {
        
        alert("Total a pagar" +totalProducto);
    }
    
}


