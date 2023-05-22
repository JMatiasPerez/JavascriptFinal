var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('mail');
var numero = document.getElementById('numero');

function validardatos() {
    nombre.addEventListener('input', validarnombre)

    apellido.addEventListener('input', validarnapellido)

    email.addEventListener('input', validaremail)

    numero.addEventListener('input', validarnumero)

    validarnombre()
    validarnapellido()
    validaremail()
    validarnumero()

}

function validarnombre() {
    if (nombre.value == '') {
        nombre.style.BackgroundColor = '#660000'
        nombre.setCustomValidity('Ingrese su nombre con caracteres de letra no números.')

    } else {
        nombre.style.BackgroundColor = '#78B060'
        nombre.setCustomValidity('')
    }
}

function validarnapellido() {
    if (apellido.value == '') {
        apellido.style.BackgroundColor = '#660000'
        apellido.setCustomValidity('Ingrese su apellido con caracteres de letra no números.')
    } else {
        apellido.style.BackgroundColor = '#78B060'
        apellido.setCustomValidity('')
    }
}

function validaremail() {
    if (email.value == '') {
        email.style.BackgroundColor = '#660000'
        email.setCustomValidity('Ingrese su Email.')
    } else {
        apellido.style.BackgroundColor = '#78B060'
        apellido.setCustomValidity('')
    }
}

function validarnumero() {
    if (numero.value == '') {
        numero.style.BackgroundColor = '#660000'
        numero.setCustomValidity('Ingrese su apellido con caracteres de letra no números.')
    } else {
        numero.style.BackgroundColor = '#78B060'
        numero.setCustomValidity('')
    }
}
window.addEventListener('load', validardatos);