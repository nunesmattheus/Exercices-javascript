function cria(nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = cria('Luiz', 'Otavio')
console.log(p1)

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala = falaFrase('Ola')
const resto = fala('mundo')

console.log(resto)

function criaMulti(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

const duplica = criaMulti(2)
const triplica = criaMulti(3)
const num = duplica(2)
const num2 = triplica(6)

console.log(num)
console.log(num2)

