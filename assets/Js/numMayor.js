let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");
let num3 = prompt("Ingrese el tercer numero ");

console.log(num1+num2+num3);


if(num1<num2 && num2<num3 && num1<num3){
    alert(num1 + num2 + num3);
}else if (num2<num1 && num1<num3 && num2<num3){
    alert(num2+num1+num3);
}
else if (num3<num2 && num2<num1 && num3<num1){
    alert(num3 + num2 + num1);
}
else if(num2<num3 && num2<num1 && num3<num1){
    alert(num2+num3+num1);
}
else if(num1<num2 && num1<num3 && num3<num2){
alert(num1+num3+num2);
}else if (num3<num2 && num3<num1 && num1<num2){
    alert(num3+num1+num2);
}



