let elementos = document.querySelectorAll('.branco')
console.log(elementos)
document.querySelectorAll('.inicio1').forEach((inicio1) => inicio1.innerHTML = '⊜')
document.querySelectorAll('.inicio2').forEach((inicio2) => inicio2.innerHTML = '⊗')

elementos.forEach((espaco) => {
    espaco.addEventListener('click', function() {
        // this.innerHTML === '◎' ? this.innerHTML = '' : this.innerHTML = '◯'
    })
})