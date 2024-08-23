// Función para validar el texto
function validarTexto(texto) {
    // Expresión regular para solo permitir letras minúsculas y espacios
    const regex = /^[a-z\s]+$/;

    if (!regex.test(texto)) {
        alert("Solo se aceptan letras minúsculas y espacios.");
        return false;
    }
    return true;
}

// Función para encriptar el texto
function encriptarTexto(texto) {
    
    //REMPLAZAR LAS LETRAS//
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    // Reemplazar las cadenas según las reglas
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para manejar el evento del botón Encriptar
document.querySelector('.botones-encriptacion-encriptar').addEventListener('click', function() {
    let textoEntrada = document.querySelector('.encriptacion-texto-entrada').value;

    if (validarTexto(textoEntrada)) {
        let textoEncriptado = encriptarTexto(textoEntrada.toLowerCase());
        document.querySelector('.encriptacion-texto-salida textarea').value = textoEncriptado;
        document.querySelector('.encriptacion-contenido').style.display = 'block'; // Mostrar el cuadro de salida
    }
});

// Función para manejar el evento del botón Desencriptar
document.querySelector('.botones-encriptacion-desencriptar').addEventListener('click', function() {
    let textoEntrada = document.querySelector('.encriptacion-texto-entrada').value;

    if (validarTexto(textoEntrada)) {
        let textoDesencriptado = desencriptarTexto(textoEntrada.toLowerCase());
        document.querySelector('.encriptacion-texto-salida textarea').value = textoDesencriptado;
        document.querySelector('.encriptacion-contenido').style.display = 'block'; // Mostrar el cuadro de salida
    }
});
