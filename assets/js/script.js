document.addEventListener('DOMContentLoaded', () => {

    let boton = document.getElementById('boton');

    boton.addEventListener('click',() => {

        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let email = document.getElementById('email').value;
        let motivo = document.getElementById('motivo').value;
        let mensaje = document.getElementById('mensaje').value;

        if (motivo === "") {
            alert("Por favor, seleccione un motivo.");
            return; 
        }

        let alertMensaje = `
            DE: ${nombre} ${apellido} (${email})
                ASUNTO: ${motivo}
                MENSAJE:
                ${mensaje}`;

        alert(alertMensaje);
    });

});