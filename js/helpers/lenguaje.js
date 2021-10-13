
const selectorLenguaje = document.querySelector('#lenguaje');
export let lenguaje = '1';

const manejadorCambioLenguaje = (e) => {
    lenguaje = e.target.value;
    console.log(lenguaje);
 }

selectorLenguaje.addEventListener('change', manejadorCambioLenguaje);
