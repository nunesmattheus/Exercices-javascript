let num  = prompt('Digite um número:')
num = Number(num)
document.body.innerHTML += `<h1>Seu número é: ${num}<h1/>`
document.body.innerHTML += `Raiz quadrada: ${num ** 0.5}<br/>`
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br/>`
document.body.innerHTML += `É NaN: ${Number.isNaN(num)}<br/>`
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(num)}<br/>`
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(num)}<br/>`
document.body.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br/>`

