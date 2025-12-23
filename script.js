const submitFuction = (event) => {

    if (!validarFormulario()) {
        event.preventDefault(); // Que no se actualice la pagina si el formulario es invalido
    } else {
        event.preventDefault();

        window.alert (
            'Datos enviados con exito! \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' + 
            'Apellido: ' + document.getElementById('apellido').value + '\n' + 
            'Documento: ' + document.getElementById('documento').value + '\n' + 
            'E-mail: ' + document.getElementById('email').value + '\n' + 
            'Edad: ' + document.getElementById('edad').value + '\n' + 
            'Actividad: ' + document.getElementById('actividad').value + '\n' + 
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        );
    };
};

document.getElementById('formulario').addEventListener('submit', submitFuction); // Escucha el submit del formulario

// Validación formulario
function validarFormulario (){
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    // Validación de los campos de texto
    camposTexto.forEach(campo => {
      let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); // Error + ID con la primera letra en mayuscula

      if(campo.value.length == '') {
        mostrarError(errorCampo, 'Este campo es requerido');
        validacionCorrecta = false;
      } else if(campo.value.length > 0 && campo.value.length < 3){
        mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres');
        validacionCorrecta = false;
      } else {
        ocultarError(errorCampo);
      };
    });

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    // Validación del mail
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // esta expresión regular (regex) valida que el formato del email se válido) {
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, 'Ingrese un e-mail valido');
    };

    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');

    if (edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor de 18 años');
        validacionCorrecta = false
    } else {
        ocultarError(errorEdad);
    };

    // Validación de actividad
    const actividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad');

    if (actividad.value == "") {
        mostrarError(errorActividad, 'Selecciona una actividad');
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad)
    };

    // Validación de nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio');
    let errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if (nivelEstudio.value == "") {
        mostrarError(errorNivelEstudio, 'Selecciona un nivel de estudio');
        validacionCorrecta = false;
    } else {
        ocultarError(errorNivelEstudio)
    };

    // Validación terminos y condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    let errorAceptoTerminos = document.getElementById('errorTerminos');

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, 'Debes aceptar terminos y condiciones');
        validacionCorrecta = false;
    } else {
        ocultarError(errorAceptoTerminos);
    };

    return validacionCorrecta; // Este return determina si el formulario es valido
};

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
};

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = 'none';
};