const resetar = () => {
    document.querySelectorAll('.jogador1').forEach(jogador1 => jogador1.innerHTML = '&#10050;')
    document.querySelectorAll('.jogador2').forEach(jogador2 => jogador2.innerHTML = '&#9055;')
    document.querySelectorAll('.meio').forEach(meio => meio.innerHTML = '')
}
let elementos = document.querySelectorAll('.branco')
let pecaAnterior = ''

elementos.forEach((espaco) => {
    espaco.setAttribute('style', 'background-color: white')
    espaco.addEventListener('click', function() {
        this.style.backgroundColor = 'rgba(255, 0, 0, 0.151)'
        
        if (this.innerHTML === '') {
            if (pecaAnterior !== '') {
               this.innerHTML = pecaAnterior.innerHTML
               pecaAnterior.innerHTML = ''
               pecaAnterior.style.backgroundColor = 'white'
            }
        }

        if (this === pecaAnterior) {
            this.innerHTML = ''
        }

        pecaAnterior = this
        setTimeout(() => {
            this.style.backgroundColor = 'white'
            pecaAtual = ''
            pecaAnterior = ''
        }, 700)
    })
})
resetar()