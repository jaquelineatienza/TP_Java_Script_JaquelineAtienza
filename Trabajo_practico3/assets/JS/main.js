let tareas = [];
 let tipoTarea= 0;
while (tipoTarea !== 5){
     tipoTarea = parseInt(prompt("¿Qué tarea desea realizar?\n"+"1:Ver lista\n"+"2:Agregar un elemento\n"+"3:Editar un elemento\n"+"4:Borrar un elemento elemento\n"+"5:Cerrar programa"));

    switch (tipoTarea) {
        case 1:
            verTareas();
            break;
           
        case 2:
            let tareaAgregada=(prompt("ingrese la materia"));
            if (tareaAgregada.trim() === "") {
                console.log("No se admiten solo espacios en blanco.");
                alert("Error: No se permiten solo espacios en blanco");
            } else if (tareaAgregada !== tareaAgregada.trim()) {
                console.log("No se admiten espacios en blanco al inicio ni al final");
                alert("Error: No se admiten espacios en blanco al inicio ni al final");
            } else {
                alert("Nombre válido");
                AgregarTarea(tareaAgregada.trim()); 
            }
            console.log(tareas);
            break;
        case 3:
            let editar = prompt("ingrese la materia que quiere editar")
            if (editar.trim() === "") {
                console.log("No se admiten solo espacios en blanco.");
                alert("Error: No se permiten solo espacios en blanco");
            } else if (editar !== editar.trim()) {
                console.log("No se admiten espacios en blanco al inicio ni al final");
                alert("Error: No se admiten espacios en blanco al inicio ni al final");
            }
                nuevaTarea=tareas.indexOf(editar);
                if (nuevaTarea !==-1) {
                    tareas[nuevaTarea] = prompt("ingrese la nueva materia");
                } else {
                    alert("materia no encontrada");
                }
        
            break;
        case 4:
            verTareas();
            let tareaAEliminar = prompt("Ingrese la tarea a eliminar").trim();
            if (tareaAEliminar === "") {
            alert("Error: No se puede eliminar una tarea vacía o solo con espacios en blanco");
            } else if (tareaAEliminar !== tareaAEliminar.trim()) {
            alert("Error: No se admiten espacios en blanco al inicio ni al final.");
            } else {
            eliminarTarea(tareaAEliminar);
            console.log(tareas);
            }
            
        case 5:
            console.log("chau");
            break;
        default:
            alert("numero ingresado no valido");
                break
        }
   if (tipoTarea===0){
        break;
    }
}  
function verTareas(){
    if(tareas.length===0){
        alert("tareas esta vacio")
    }else{
        alert(tareas);
    }
}

function AgregarTarea(tareaAgregada){
    tareas.push(tareaAgregada);
}
function eliminarTarea(tarea) {
    let indice = tareas.indexOf(tarea);
    if (indice !== -1) {
        tareas.splice(indice, 1);
        alert(`Tarea "${tarea}" eliminada.`);
    } else {
        alert(`Tarea "${tarea}" no encontrada.`);
    }
}

