
export const tablaResultados = document.querySelector('#resultado');
const tabla = document.querySelector('#tabla-body');


export const llenarTablaResultados = (tablaItems) => {

    limpiarTablaResultados();

    tablaItems.forEach((elemento) => {
        const fila = document.createElement('tr');
        const col1 = document.createElement('td');
        const texto1 = document.createTextNode(elemento.item);
        const texto2 = document.createTextNode(elemento.tipo);
        const col2 = document.createElement('td');
        col1.appendChild(texto1);
        col2.appendChild(texto2);
        fila.appendChild(col1);
        fila.appendChild(col2);
        tabla.appendChild(fila);
    });
  
}

const limpiarTablaResultados = () => {
    while(tabla.hasChildNodes()){
        console.log("hijo -------",tabla.firstChild);
        tabla.removeChild(tabla.firstChild);
    }
}