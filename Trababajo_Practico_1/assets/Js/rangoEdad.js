let edad = prompt("ingrese su edad");

edad= parseInt(edad);

if (edad >=0 & edad <13 ){
    alert("Se encuentra dentro del rango de niño");
}else if(edad>=13 & edad<20){
    alert("Se encuentra dentro del rango de adolcente");
}else if(edad>=20 & edad<60){
    alert("Se encuentra dentro de la edad de adulto");
}else if(edad>=60){
    alert("Se encuentra dentro del rango de adulto mayor");
}