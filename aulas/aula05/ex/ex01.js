const nome = prompt('Digite seu nome completo:')
document.body.innerHTML += `O seu nome é ${nome}<br />`
document.body.innerHTML += `O seu nome tem ${nome.length} letras <br />`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(4, 7)} <br/>`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}`