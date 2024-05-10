let nota1 = parseInt( prompt("ingrese la primera nota del trimestre"));
let nota2 = parseInt(prompt("ingrese la segunda nota del trimestre"));
let nota3 = parseInt(prompt("ingrese la tercera nota del trimestre"));


 if(isNaN(nota1)){
    alert("numero ingresado no valido");
}else if(isNaN(nota2)){
    alert("numero ingresado no valido");
}else if(isNaN(nota3)){
    alert("numero ingresado no valido");
}else if(nota1 && nota2 && nota3 >>0 && nota1 && nota2 && nota3 <<11){
    let  promedio =  parseInt ((nota1 + nota2 + nota3) /3);
    
    switch(true){
        case (promedio >= 1 && promedio <=3):
            alert("nota insuficiente");
            break
        case  (promedio >= 4 && promedio <= 5):
            alert("nota regular");
            break
        case  (promedio >= 6 && promedio <= 7):
            alert("nota buena");
            break
        case  (promedio >= 8 && promedio <= 9):
            alert("nota muy buena");
            break
        case (promedio=10):
            alert("nota sobresaliente");
            break
       }
}



    


