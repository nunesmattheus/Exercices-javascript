function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        // getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },
        fala(assunto){
            return `${this.nome} está ${assunto}`
        },
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80)
p1.nomeCompleto = 'Luiz Otavio Miranda'
console.log(p1.nome)
console.log(p1.sobrenome)
