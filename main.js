let botao = document.getElementById('button')
let tarefa = document.getElementById('input-tarefa')
let lista  = document.getElementById('list')

botao.addEventListener('click', function() {
    let paragrafo = document.createElement('p')
    lista.appendChild(paragrafo)
    paragrafo.innerHTML = tarefa.value
    paragrafo.classList.add('estilo-paragrafo')
   paragrafo.addEventListener('click', function() {
       paragrafo.style.textDecoration = 'line-through'
   })

paragrafo.addEventListener('dblclick', function() {
    lista.removeChild(paragrafo)
}
)
    




   })
