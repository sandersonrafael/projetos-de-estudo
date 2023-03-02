let palavraDesafio = window.prompt('Informe somente uma palavra desejada:').toLowerCase()
while (palavraDesafio.match(/[0-9]/g) !== null || palavraDesafio.match(' ') !== null) {
    palavraDesafio = window.prompt('Informe somente uma palavra desejada:').toLowerCase()
}
let tentativas = 0
let palavraSecreta = ''
for (let i in palavraDesafio) palavraSecreta += '*'

let secreto = document.querySelector('#secreto')
secreto.innerText = palavraSecreta

let letra = document.querySelector('#letra')
let botao = document.querySelector('#verifica')

letra.onkeyup = () => {
    if (letra.value === '') return
    letra.setAttribute('disabled', '')
}
botao.onclick = () => {
    if (letra.value === '') return
    testa(letra.value.toLowerCase())
    letra.removeAttribute('disabled')
    letra.value = ''
}

function testa(letra) {
    tentativas++
    let teste = palavraSecreta.split('')
    palavraSecreta = ''
    for (let i in teste) {
        if (palavraDesafio[i] === letra) {
            palavraSecreta += letra
            continue
        }
        palavraSecreta += teste[i]
    }
    secreto.innerText = palavraSecreta
    setTimeout(() => {
        if (palavraSecreta.indexOf('*') === -1) alert(`Jogo encerrado! Você conseguiu vencer em ${tentativas} tentativas!`)
    }, 10)
    return palavraSecreta
}
