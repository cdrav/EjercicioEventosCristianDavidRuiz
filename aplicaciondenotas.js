let notas = [
    { id: 1, titulo: 'Sacar la basura', texto: 'mi mama me va a retar si no lo hago', realizada: false }
];

let idGlobal = 2; 

let tituloInput = document.getElementById('titulo');
let textoInput = document.getElementById('texto');
let guardarBtn = document.getElementById('guardar');
let contenedorNotas = document.getElementById('contenedor-notas');
let buscarInput = document.getElementById('buscar');
let realizadasCheckbox = document.getElementById('realizadas');


// Función para pintar notas
function pintarNotas() {
    if (notas.length === 0) {
        contenedorNotas.innerHTML = '<p>No hay notas para mostrar</p>';
    } else {
        let html = '';
        for (let i = 0; i < notas.length; i++) {
            let nota = notas[i];
            html += '<div class="nota ' + (nota.realizada ? 'marcarRealizada' : '') + '">' +
                        '<h3>' + nota.titulo + '</h3>' +
                        '<p>' + nota.texto + '</p>' +
                        '<button onclick="borrarNota(' + nota.id + ')">Borrar nota</button>' +
                        '<label>' +
                            '<input type="checkbox" onclick="marcarRealizada(' + nota.id + ')"' + (nota.realizada ? 'checked' : '') + '> Realizada' +
                        '</label>' +
                    '</div>';
        }
        contenedorNotas.innerHTML = html;
    }
}

pintarNotas();

// Función para agregar una nueva nota
function agregarNota() {
    let titulo = tituloInput.value.trim();
    let texto = textoInput.value.trim();

    if (titulo !== "" && texto !== "") {
        let nuevaNota = {
            id: idGlobal,
            titulo: titulo,
            texto: texto,
            realizada: false
        };

        notas.push(nuevaNota);
        idGlobal++; 

        // Limpiar los campos
        tituloInput.value = "";
        textoInput.value = "";

        // Mostrar las notas
        pintarNotas();
    }
}

// Función para borrar una nota
function borrarNota(id) {
    notas = notas.filter(function(nota) {
        return nota.id !== id;
    });
    pintarNotas();
}

// Función para marcar una nota como realizada
function marcarRealizada(id) {
    let nota = notas.find(function(nota) {
        return nota.id === id;
    });
    if (nota) {
        nota.realizada = !nota.realizada;
        pintarNotas();
    }
}

// Función para filtrar notas
function filtrarNotas() {
    let texto = buscarInput.value.toLowerCase();
    let realizadas = realizadasCheckbox.checked;
    let notasFiltradas = notas.filter(function(nota) {
        let coincideTexto = nota.titulo.toLowerCase().includes(texto) || nota.texto.toLowerCase().includes(texto);
        let coincideRealizadas = realizadas ? nota.realizada : true;
        return coincideTexto && coincideRealizadas;
    });
    pintarNotasFiltradas(notasFiltradas);
}

// Función para pintar notas filtradas
function pintarNotasFiltradas(notasFiltradas) {
    if (notasFiltradas.length === 0) {
        contenedorNotas.innerHTML = '<p>No hay notas para mostrar</p>';
    } else {
        let html = '';
        for (let i = 0; i < notasFiltradas.length; i++) {
            let nota = notasFiltradas[i];
            html += '<div class="nota ' + (nota.realizada ? 'marcarRealizada' : '') + '">' +
                        '<h3>' + nota.titulo + '</h3>' +
                        '<p>' + nota.texto + '</p>' +
                        '<button onclick="borrarNota(' + nota.id + ')">Borrar nota</button>' +
                        '<label>' +
                            '<input type="checkbox" onclick="marcarRealizada(' + nota.id + ')"' + (nota.realizada ? 'checked' : '') + '> Realizada' +
                        '</label>' +
                    '</div>';
        }
        contenedorNotas.innerHTML = html;
    }
}

// Eventos para el filtro de búsqueda y checkbox
buscarInput.addEventListener('input', filtrarNotas);
realizadasCheckbox.addEventListener('change', filtrarNotas);
guardarBtn.addEventListener('click', agregarNota);
