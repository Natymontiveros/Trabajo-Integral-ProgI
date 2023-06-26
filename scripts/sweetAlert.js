(async() =>{
    const link = '<a href="./pages/encuesta.html" target="_black"> Mis Redes </a>';
    Swal.fire({
        html: `Para conocer un poco mas nuestros proyectos has click en el enlace:   `,
        width:'40%',
        icon:'warning',
        padding: '1rem',
        confirmButtonText:'Acepto',
        backdrop: true,
        toast: true,
        position: 'bottom',
        showConfirmButton: true,
        showCancelButton: false,
        showCloseButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        stopKeydownPropagation: false,
        closeButtonAriaLabel: 'Cerrar alerta',
});
})();












