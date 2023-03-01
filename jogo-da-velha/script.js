let vez = 'X'
const botao =  [
        document.querySelector('#linha1Coluna1'),
        document.querySelector('#linha1Coluna2'),
        document.querySelector('#linha1Coluna3'),
        document.querySelector('#linha2Coluna1'),
        document.querySelector('#linha2Coluna2'),
        document.querySelector('#linha2Coluna3'),
        document.querySelector('#linha3Coluna1'),
        document.querySelector('#linha3Coluna2'),
        document.querySelector('#linha3Coluna3')
    ]
function clicar0() {
    if (botao[0].value === ' ') {
        botao[0].value = vez
        testaResultado()
    }
}
function clicar1() {
    if (botao[1].value === ' ') {
        botao[1].value = vez
        testaResultado()
    }
}
function clicar2() {
    if (botao[2].value === ' ') {
        botao[2].value = vez
        testaResultado()
    }
}
function clicar3() {
    if (botao[3].value === ' ') {
        botao[3].value = vez
        testaResultado()
    }
}
function clicar4() {
    if (botao[4].value === ' ') {
        botao[4].value = vez
        testaResultado()
    }
}
function clicar5() {
    if (botao[5].value === ' ') {
        botao[5].value = vez
        testaResultado()
    }
}
function clicar6() {
    if (botao[6].value === ' ') {
        botao[6].value = vez
        testaResultado()
    }
}
function clicar7() {
    if (botao[7].value === ' ') {
        botao[7].value = vez
        testaResultado()
    }
}
function clicar8() {
    if (botao[8].value === ' ') {
        botao[8].value = vez
        testaResultado()
    }
}
function testaResultado() {
    if (
        botao[0].value === vez && botao[1].value === vez && botao[2].value === vez ||
        botao[3].value === vez && botao[4].value === vez && botao[5].value === vez ||
        botao[6].value === vez && botao[7].value === vez && botao[8].value === vez ||
        botao[0].value === vez && botao[4].value === vez && botao[8].value === vez ||
        botao[2].value === vez && botao[4].value === vez && botao[6].value === vez ||
        botao[0].value === vez && botao[3].value === vez && botao[6].value === vez ||
        botao[1].value === vez && botao[4].value === vez && botao[7].value === vez ||
        botao[2].value === vez && botao[5].value === vez && botao[8].value === vez
    ) {
        setTimeout(() => {
            alert(`O jogador ${vez === 'X' ? 'O' : 'X'} é o vencedor`) 
            reseta()
        }, 50)
    } else if (
        botao[0].value !== ' ' &&
        botao[1].value !== ' ' &&
        botao[2].value !== ' ' &&
        botao[3].value !== ' ' &&
        botao[4].value !== ' ' &&
        botao[5].value !== ' ' &&
        botao[6].value !== ' ' &&
        botao[7].value !== ' ' &&
        botao[8].value !== ' '
    ) {
        setTimeout(() => {
            alert('Sem vencedor! Reiniciando o jogo...') 
            reseta()
        }, 50)
    }
    vez === 'X' ? vez = 'O' : vez = 'X'
}
function reseta() {
    for (let i in botao) {
        botao[i].value = ' '
    }
}
