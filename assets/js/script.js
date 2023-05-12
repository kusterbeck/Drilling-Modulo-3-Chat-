
const seleccionarContacto = (id) => {
    let contacto = document.getElementById(`${id}`).outerHTML;
    let contactoActivo = document.getElementById('contacto-activo');
    contactoActivo.innerHTML = `${contacto}`;

}

const quitarNegrita = (id) => {
    let negrita = document.getElementById(`${id}`);
    negrita.classList.remove('fw-bold');
}

const seleccionarContactoDesktop = (id) => {
    
    let contacto = document.getElementById(`${id}`).outerHTML;
    let contactoActivo = document.getElementById('contacto-activo-desktop');
    contactoActivo.innerHTML = `${contacto}`;
}