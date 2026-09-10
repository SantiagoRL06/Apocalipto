document.addEventListener('DOMContentLoaded' , () => {
    const formulario = document.getElementById('form-reporte');
    const nombreInput = document.getElementById('nombre');
    const avistamientoInput = document.getElementById('avistamiento');
    const urgenciaSelect = document.getElementById('urgencia');
    const mensajeEstado = document.getElementById('mensaje-estado');

    formulario.addEventListener('submit', (e) => {
        //evita el refresco automatico del navegador
        e.preventDefault();
        //resetea los estados de error anteriores
        nombreInput.classList.remove('campo-error');
        avistamientoInput.classList.remove('campo-error');
        urgenciaSelect.classList.remove('campo-error');
        mensajeEstado.className = 'mensaje-hidden';

        let esValido = true;

        // Validación individual de obligatorios
        if (nombreInput.value.trim() === '') {
        nombreInput.classList.add('campo-error');
        esValido = false;
    }
        
        if (avistamientoInput.value.trim() === '') {
        avistamientoInput.classList.add('campo-error');
        esValido = false;
    }
        if(urgenciaSelect.value ===''){
            urgenciaSelect.classList.add('campo-error');
            esValido=false;
        }
        //comprobacion de respuesta interactiva
        if (!esValido){
            mensajeEstado.textContent = 'por favor completa los capmpos pbligatorios(*)';
            mensajeEstado.className = 'mensaje-error-texto';
        } else {
            mensajeEstado.textContent = 'reporte enviado, SOBREVIVE PARCE';
            mensajeEstado.className = 'mensaje-exito-texto';
            formulario.reset();
        }

        });

});
  



