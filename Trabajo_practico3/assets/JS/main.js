let tareas = [];

// if (tipoTarea === "resta"){
//     tipoTarea = prompt("ingrese el tipo de tarea");
//     restaTarea()
//     alert(tareas);
// }else if(tipoTarea==="sumar"){
// tarea(prompt("ingrese algo"));
// alert(tareas);
// }else if(tipoTarea==="editar"){

// }
// editTare="restas";
// function restaTarea(){
//     tareas=tareas.filter(tarea1=>tarea1!==tipoTarea);
// }


for (let i = 0; i <9; i++) {
    let tipoTarea = parseInt(prompt("¿Qué tarea desea realizar?\n"+"1:Ver lista\n"+"2:Agregar un elemento\n"+"3:Editar un elemento\n"+"4:Borrar un elemento elemento\n"+"0:Cerrar programa"));
    switch (tipoTarea) {
        case 0:
            break;
        case 1:
            alert(tareas);
            break;
        case 2:
            tarea(prompt("ingrese la materia"))
            tarea();
            break;
        case 3:
            tarea(prompt("ingrese la palabra que se desea editar"))
            nuevaTarea=tareas.indexOf(tarea);
            if (nuevaTarea !== -1) {
                tareas[nuevaTarea] = prompt("ingrese la nueva palabra");
            } else {
                console.log("Tarea no encontrada");
            }
            editarTarea();
            break;
        case 4:
            alert("hooy");
            break;
        default:
            alert("numero ingresado no valido");
            break;
    }
    if (tipoTarea===0){
        break;
    }
}
 
function tarea(tarea){
    tareas.push(tarea);
}
function editarTarea(){
  
}


