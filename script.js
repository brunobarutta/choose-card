let paus = document.getElementById('carta-mim')
let copas = document.getElementById('carta-de-habilidades')
let espadas = document.getElementById('carta-de-projetos')
let ouros = document.getElementById('carta-de-contato')


function mostrarMim() {
    paus.classList.remove('hidden')
}
function mostrarHabilidades() {
    copas.classList.remove('hidden')
}
function mostrarProjetos() {
    espadas.classList.remove('hidden')
}
function mostrarContato() {
    ouros.classList.remove('hidden')
}

function removerCarta() {
    paus.classList.add('hidden')
    copas.classList.add('hidden')
    espadas.classList.add('hidden')
    ouros.classList.add('hidden')
}
