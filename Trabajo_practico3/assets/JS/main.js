let tareas = ["lunes","martes","miercoles"];
for (let i = 0; i <9; i++) {
    let tipoTarea = parseInt(prompt("¿Qué tarea desea realizar?\n"+"1:Ver lista\n"+"2:Agregar un elemento\n"+"3:Editar un elemento\n"+"4:Borrar un elemento elemento\n"+"0:Cerrar programa"));
    switch (tipoTarea) {
        case 0:
            break;
        case 1:
            alert(tareas);
            break;

        case 2:
            let tareaAgregada=(prompt("ingrese la materia"));
            if(tareaAgregada === " "){
                alert("error no se permiten espacios en blanco");
            }else{
                alert("nombre valido")
                AgregarTarea(tareaAgregada); 
            }
         
            console.log(tareas);
            break;
        case 3:
            let editar = prompt("ingrese la materia que quiere editar")
            
                nuevaTarea=tareas.indexOf(editar);
                if (nuevaTarea !==-1) {
                    tareas[nuevaTarea] = prompt("ingrese la nueva materia");
                } else {
                    alert("materia no encontrada");
                }
            break;
        case 4:
            eliminarTarea(prompt("ingrese la tarea a eliminar"));
            eliminarTarea();
            console.log(tareas);
        default:
            alert("numero ingresado no valido");
                break
        }
   if (tipoTarea===0){
        break;
    }
   
    
}
function AgregarTarea(tareaAgregada){
    tareas.push(tareaAgregada);
}
function eliminarTarea(eliminarTarea) {
    tareas = tareas.filter(tarea1 => tarea1 !==eliminarTarea);
}

