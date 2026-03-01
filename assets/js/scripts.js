// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    // Escuchar el evento submit del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto
        
        // Llamar a la función de validación
        if (validateForm()) {
            alert('✅ ¡Formulario válido! Registro exitoso.');
            // Opcional: limpiar el formulario después de enviar
            // form.reset();
        } else {
            alert('❌ Por favor, corrija los errores en el formulario.');
        }
    });
});

/**
 * Función principal de validación del formulario
 * Retorna true si todos los campos son válidos, false si hay errores
 */
function validateForm() {
    let isValid = true;
    
    // ==========================================
    // VALIDACIÓN DE EJEMPLO: Campo Nombre
    // ==========================================
    const nombre = document.getElementById('nombre');
    const valorNombre = nombre.value.trim();
    
    if (valorNombre === '') {
        // Campo vacío - marcar como inválido
        nombre.classList.add('no-valid');
        isValid = false;
    } else if (valorNombre.length < 2) {
        // Muy corto - marcar como inválido
        nombre.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        nombre.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Apellido Paterno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    // Pista: Usa getElementById('apellidoPaterno')
    
    const apellidoPaterno = document.getElementById('apellidoPaterno');
    const valorApellidoPaterno = apellidoPaterno.value.trim();
    
    if (valorApellidoPaterno === '') {
        // Campo vacío - marcar como inválido
        apellidoPaterno.classList.add('no-valid');
        isValid = false;
    } else if (valorApellidoPaterno.length < 2) {
        // Muy corto - marcar como inválido
        apellidoPaterno.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        apellidoPaterno.classList.remove('no-valid');
    }  
       
    // ==========================================
    // TODO: Validar Apellido Materno
    // ==========================================
    // Requisitos: No vacío, mínimo 2 caracteres
    
    const apellidoMaterno = document.getElementById('apellidoMaterno');
    const valorApellidoMaterno = apellidoMaterno.value.trim();
    
    if (valorApellidoMaterno === '') {
        // Campo vacío - marcar como inválido
        apellidoMaterno.classList.add('no-valid');
        isValid = false;
    } else if (valorApellidoMaterno.length < 2) {
        // Muy corto - marcar como inválido
        apellidoMaterno.classList.add('no-valid');
        isValid = false;
    } else {
        // Campo válido - remover marca de error si existe
        apellidoMaterno.classList.remove('no-valid');
    } 
    
    // ==========================================
    // TODO: Validar Cédula
    // ==========================================
    // Requisitos: Exactamente 10 dígitos numéricos
    // Pista: Usa /^\d{10}$/.test(valor) para validar
    
    const cedula = document.getElementById('cedula');
    const valorCedula = cedula.value.trim();
    const regex = /^\d{10}$/;

    if(valorCedula == ''){
        isValid = false;
        cedula.classList.add('no-valid');
    } else if(!regex.test(valorCedula)) {
        isValid = false;
        cedula.classList.add('no-valid');
    } else {
        cedula.classList.remove('no-valid');
    }
      
    // ==========================================
    // TODO: Validar Motivo
    // ==========================================
    // Requisitos: No vacío, mínimo 10 caracteres
    
    const motivo = document.getElementById('motivo');
    const valorMotivo = motivo.value.trim();
    const regexM = /^.{10,}$/;

    if(valorMotivo == ''){
        isValid = false;
        motivo.classList.add('no-valid');
    } else if(!regexM.test(valorMotivo)) {
        isValid = false;
        motivo.classList.add('no-valid');
    } else {
        motivo.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Tipo de Cuenta
    // ==========================================
    // Requisitos: Debe tener un valor seleccionado (no vacío)
    // Pista: Verifica que select.value !== ''
    
    const tipoCuenta = document.getElementById('tipoCuenta');
    if (tipoCuenta.value === '') {
        isValid = false;
        tipoCuenta.classList.add('no-valid');
    } else {
        tipoCuenta.classList.remove('no-valid');
    }    
    
    // ==========================================
    // TODO: Validar Calle
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    
    const calle = document.getElementById('calle');
    const valorCalle = calle.value.trim();
    const regexCalle = /^.{3,}$/;

    if(valorCalle == ''){
        isValid = false;
        calle.classList.add('no-valid');
    } else if(!regexCalle.test(valorCalle)) {
        isValid = false;
        calle.classList.add('no-valid');
    } else {
        calle.classList.remove('no-valid');
    }
    
    // ==========================================
    // TODO: Validar Número
    // ==========================================
    // Requisitos: No vacío
    
    const numero = document.getElementById('numero');
    const valorNumero = numero.value.trim();

    if(valorNumero == ''){
        isValid = false;
        numero.classList.add('no-valid');
    } else {
        numero.classList.remove('no-valid');
    }   
    
    // ==========================================
    // TODO: Validar Intersección
    // ==========================================
    // Requisitos: No vacío, mínimo 3 caracteres
    
    const interseccion = document.getElementById('interseccion');
    const valorInterseccion = interseccion.value.trim();
    const regexInterseccion = /^.{3,}$/;

    if(valorInterseccion == ''){
        isValid = false;
        interseccion.classList.add('no-valid');
    } else if(!regexInterseccion.test(valorInterseccion)) {
        isValid = false;
        interseccion.classList.add('no-valid');
    } else {
        interseccion.classList.remove('no-valid');
    }    
    
    // Retornar el resultado final de la validación
    return isValid;
}


// ==========================================
// FUNCIONES AUXILIARES (OPCIONALES)
// ==========================================
// Puedes crear funciones auxiliares para evitar repetir código
// Por ejemplo:

/**
 * Valida un campo de texto
 * @param {HTMLElement} campo - El elemento input a validar
 * @param {number} minLength - Longitud mínima requerida
 * @returns {boolean} - true si es válido, false si no
 */
function validarCampoTexto(campo, minLength) {
    const valor = campo.value.trim();
    
    if (valor === '' || valor.length < minLength) {
        campo.classList.add('no-valid');
        return false;
    } else {
        campo.classList.remove('no-valid');
        return true;
    }
}

// Ejemplo de uso de la función auxiliar:
// if (!validarCampoTexto(nombre, 2)) {
//     isValid = false;
// }
