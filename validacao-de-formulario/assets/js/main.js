class validaFormulario {
    constructor(nome, sobrenome, cpf, usuario, senha, confirmarSenha) {
        this.nome = nome.value
        this.sobrenome = sobrenome.value
        this.cpf = cpf.value
        this.usuario = usuario.value
        this.senha = senha.value
        this.confirmarSenha = confirmarSenha.value
    }
    
    validaCampos(campo) {
        if (campo === '') return 'Nenhum campo pode estar vazio'
        return ''
    }

    validaNome() {
        for (let i in this['nome']) {
            if (this['nome'][i].match(/[0-9]/g) !== null) return 'Nome deve conter apenas letras'
        }
        return ''
    }

    validaSobrenome() {
        for (let i in this['sobrenome']) {
            if (this['sobrenome'][i].match(/[0-9]/g) !== null) return 'Sobrenome deve conter apenas letras'
        }
        return ''
    }

    validaCpf() {
        this['cpf'] = String(this['cpf']).replaceAll('.', '').replace('-', '')
        let cpfCorreto = this['cpf'].slice(0,-2)
        let mult = 10
        let somatorio = 0
        let digito10
        let digito11
        for (let i in cpfCorreto) {
            somatorio += Number(cpfCorreto[i]) * mult
            mult--
        }
        digito10 = 11 - somatorio % 11 >= 10 ? 0 : 11 - somatorio % 11
        cpfCorreto += digito10
        mult = 11
        somatorio = 0
        for (let i in cpfCorreto) {
            somatorio += Number(cpfCorreto[i]) * mult
            mult--
        }
        digito11 = 11 - somatorio % 11 >= 10 ? 0 : 11 - somatorio % 11
        cpfCorreto += digito11

        if(this['cpf'] === '') return this.innerHTML = ''
        return this['cpf'] === cpfCorreto ? '' : 'CPF inválido!'
    }

    validaUsuario() {
        if (this['usuario'] === '') return ''
        for (let i in this['usuario']) {
            if (this['usuario'][i].match(/[a-zA-Z0-9]/g) === null) return 'Usuário não pode conter caracteres especiais'
        }
        if (this['usuario'].length < 3 || this['usuario'].length > 12) return 'Usuário deve conter entre 3 e 12 caracteres'
        return ''
    }

    validaSenha() {
        if (this['senha'] === '') return ''
        if (this['senha'].length < 6 || this['senha'].length > 12) return 'Senha deve conter entre 6 e 12 caracteres'
        return ''
    }

    validaConfirmarSenha() {
        if (this['confirmarSenha'] === '') return ''
        if (this['confirmarSenha'].length < 6 || this['confirmarSenha'].length > 12) return 'Senha deve conter entre 6 e 12 caracteres'
        if (this['confirmarSenha'] !== this['senha']) return 'Senha informada não bate'
        return ''
    }

}

document.querySelector('.button').onclick = () => {
    const form = []
    const p = []
    
    for (let i = 0; i <= 5; i++) {
        form[i] = document.querySelectorAll('input')[i]
        p[i] = document.querySelectorAll('p')[i+2]
    }

    const formulario = new validaFormulario(...form)

    let i = 0
    for (let chave in formulario) {
        p[i].innerText = formulario.validaCampos(formulario[chave])
        i++
    }

    p[0].innerHTML += `${formulario.validaNome()}`
    p[1].innerHTML += `${formulario.validaSobrenome()}`
    p[2].innerHTML += `${formulario.validaCpf()}`
    p[3].innerHTML += `${formulario.validaUsuario()}`
    p[4].innerHTML += `${formulario.validaSenha()}`
    p[5].innerHTML += `${formulario.validaConfirmarSenha()}`

    if (!(p[0].innerText || p[1].innerText || p[2].innerText || p[3].innerText || p[4].innerText || p[5].innerText))
    setTimeout(() => alert('Formulário validado e usuário criado!'), 10)
}
