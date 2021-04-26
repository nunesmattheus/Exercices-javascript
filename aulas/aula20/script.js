function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
funcao({nome: 'Luiz', sobrenome: 'Otavio', idade: 34})

function funcao2([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}
funcao2(['Luiz', 'Otavio', '34'])

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador == '+') acumulador += numero
        if(operador == '-') acumulador -= numero
        if(operador == '/') acumulador /= numero
        if(operador == '*') acumulador *= numero
              
    }
    console.log(acumulador)
}
conta('-', 0, 20, 30, 40, 50)