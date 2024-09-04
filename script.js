let TAREAS = [];
const inputTarea = document.getElementById('input_Tarea');
const btnGuardar = document.getElementById('btn_guardar');
const listaTareas = document.getElementById('lista_Tareas');

btnGuardar.addEventListener('click', function() {
    const tarea = inputTarea.value;

    if (tarea !== '') {
        TAREAS.push(tarea);

        // Crear un nuevo div para la tarea
        const tareaDiv = document.createElement('div');
        tareaDiv.innerText = tarea;
        tareaDiv.classList.add('task');

        // Crear un botón de eliminación
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn_eliminar');
        const imgEliminar = document.createElement('img');
        imgEliminar.src = '/remove.svg';
        imgEliminar.alt = 'Eliminar';

        // Agregar la imagen dentro del botón
        btnEliminar.appendChild(imgEliminar);

        // Agregar un evento para eliminar la tarea
        btnEliminar.addEventListener('click', function() {
            listaTareas.removeChild(tareaDiv);
        });

        // Agregar el botón de eliminación al div de la tarea
        tareaDiv.appendChild(btnEliminar);

        // Insertar la tarea al principio de la lista
        listaTareas.insertBefore(tareaDiv, listaTareas.firstChild);

        // Limpiar el input
        inputTarea.value = '';
    }
});
