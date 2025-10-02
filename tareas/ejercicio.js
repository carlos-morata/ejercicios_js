// **Sistema de gestión de tareas**
// 1. Crea un array llamado `tareas`, que empiece vacío.
// 2. Cada tarea será un objeto con:
//    * `id`
//    * `descripcion`
//    * `completada` (true/false).
// 3. Crea funciones (métodos independientes) para:
//    * `agregarTarea(descripcion)`
//    * `completarTarea(id)`
//    * `listarTareas()` → que muestre todas con su estado.
// Ejemplo esperado:
// ```js
// agregarTarea("Estudiar objetos");
// agregarTarea("Hacer ejercicio");
// listarTareas();
// // 1. Estudiar objetos - Pendiente
// // 2. Hacer ejercicio - Pendiente
// completarTarea(1);
// listarTareas();
// // 1. Estudiar objetos - Completada
// // 2. Hacer ejercicio - Pendiente

let tasks = []

function addTask(id, descripcion) {
    const task = {
        id,
        descripcion,
        completado: false
    }
    tasks.push(task)

}
addTask(1, "Estudiar Objetos")
addTask(2, "Hacer ejercicio")


function completeTask(id) {
    for(let task of tasks) {
        if(task.id === id) {
            task.completado = true
        }
    }
}

completeTask(1)
completeTask(2)


function listTask() {
    let text = ""
    for(let task of tasks) {
        text += `${task.id} ${task.descripcion} ${task.completado}`
    }
}

console.log(tasks)