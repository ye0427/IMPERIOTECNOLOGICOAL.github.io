// Función para abrir un modal
function abrirModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

// Función para cerrar un modal
function cerrarModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera del contenido
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

