function funcao(){
    let total = 0
    for(let i in arguments){
        total += arguments[i]
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6)