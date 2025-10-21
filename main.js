const boton = document.getElementById('modo-boton');
const body = document.body;

boton.addEventListener('click', () =>  {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        boton.textContent = 'Desactivar Modo Oscuro';
    }
    else {
        boton.textContent = 'Activar Modo Oscuro';
    }
});


const register_mail = Document.getElementById("mail-register")
