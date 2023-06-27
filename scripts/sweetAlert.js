(async () => {
    // const link = <a href="./pages/encuesta.html" target="_black"> Mis Redes </a>;
    Swal.fire({
        text: `¡Completa esta encuesta! `,
        width: "30%",
        icon: "info",
        grow: "row",
        padding: "1rem",
        confirmButtonText: "Ir",
        toast: true,
        position: "bottom-end",
        showConfirmButton: true,
        showCloseButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            // Crear el contenido de la encuesta
            let encuestaHTML = `
          <form id="encuesta" class='swal2-content'>
            <label for="interes1"> ¿Quedaste conforme con el servicio? </label><br>
            <label for="interes1"> Si </label>
            <input type="checkbox" id="interes1" name="interes" value="Interés 1">
            <label for="interes1"> No </label>
            <input type="checkbox" id="interes1" name="interes" value="Interés 1"><br><br>
              
            <label for="interes2"> ¿Volverías a contratar el servicio? </label><br>
            <label for="interes1"> Si </label>
            <input type="checkbox" id="interes2" name="interes" value="Interés 1">
            <label for="interes1"> No </label>
            <input type="checkbox" id="interes2" name="interes" value="Interés 1"><br><br>
            
            <label for="interes2"> ¿Recomendarías TechTrek a un amigo/colega?</label><br>
            <label for="interes1"> Si </label>
            <input type="checkbox" id="interes3" name="interes" value="Interés 1">
            <label for="interes1"> No </label>
            <input type="checkbox" id="interes3" name="interes" value="Interés 1"><br>
          </form>
          `;
            // Mostrar la alerta con SweetAlert2
            Swal.fire({
                title: "Encuesta",
                icon: "question",
                grow: "row",
                padding: "1rem",
                html: encuestaHTML,
                showCancelButton: true,
                width: "30%",
                cancelButtonText: "Cancelar",
                confirmButtonText: "Enviar",
                preConfirm: function () {
                    // Obtener los checkboxes seleccionados
                    var checkboxes = document.querySelectorAll(
                        'input[name="interes"]:checked'
                    );
                    var interesesSeleccionados = Array.from(checkboxes).map(function (
                        checkbox
                    ) {
                        return checkbox.value;
                    });

                    // Validar que se haya seleccionado al menos un interés
                    if (interesesSeleccionados.length === 0) {
                        Swal.showValidationMessage(
                            "Por favor, selecciona al menos una opción."
                        );
                    } else {
                        console.log(interesesSeleccionados);
                    }
                },
            }).then(function (result) {
                if (result.isConfirmed) {
                    Swal.fire("¡Encuesta enviada!", "Gracias por participar.", "success");
                }
            });
        }
    });
})();

// envio de formulario contacto
document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();
    Swal.fire({
        title: "¡Enviado!",
        text: "El formulario se ha enviado correctamente.",
        icon: "success",
        confirmButtonText: "Aceptar",
    }).then(function (result) {
        document.getElementById("miFormulario").submit();
    });
});


