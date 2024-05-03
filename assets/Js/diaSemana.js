
 let dia = prompt("ingrese un numero del 1 al 7");

 dia= parseInt(dia);

switch (dia) {
    case 1:
        alert("el dia de hoy es lunea")
      
        break;
    case 2:
            alert("el dia de hoy es Martes")
        break;
    case 3:
        alert("el dia de hoy es miercoles")
    break;
    case 4:
            alert("el dia de hoy es jueves")
        break;
    case 5:
        alert("el dia de hoy es viernes")
            break;
    case 6:
        alert("el dia de hoy es sabado")
        break;
    case 7:
            alert("el dia de hoy es domingo")
        break;
    default:
      alert("Error el numero ingresado supera el rango aceptado(1 al 7)")
        break;
  }
