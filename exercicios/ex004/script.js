function compara(num1, num2){
    if(num1 > num2){
        return num1
    }
    return num2
    
}

console.log(compara(15, 7))

function max(x, y){
    return x > y ? x : y
}

console.log(max(1, 5))

const max2 = (x, y) => x > y ? x : y

console.log(max2(100, 16))