document.querySelectorAll('.inicio1').forEach((inicio1) => inicio1.innerHTML = '⨷')
document.querySelectorAll('.inicio2').forEach((inicio2) => inicio2.innerHTML = '⊛')

let elementos = document.querySelectorAll('.branco')
let peca = ''

elementos.forEach((espaco) => {
    espaco.setAttribute('style', 'background-color: white')
    espaco.addEventListener('click', function() {
        this.style.backgroundColor = 'rgba(255, 0, 0, 0.151)'
        
        if (this.innerHTML !== '') {
            if (peca === '') peca = this.innerHTML
        }
        if (this.innerHTML === '') {
            if (peca !== '') this.innerHTML = peca
        }

        peca = this.innerHTML
        // if (this.innerHTML === peca) this.innerHTML = ''
        setTimeout(() => {
            this.style.backgroundColor = 'white'
            peca = ''
        }, 800)
    })
})
