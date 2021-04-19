function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function recebeEventoForm(evento){
        evento.preventDefault()

        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        const p = document.createElement('p')

        if(peso.value === "" || altura.value === ""){    
            p.classList.add('campos')      
            p.innerHTML += `Informe todos os campos`             
            resultado.appendChild(p)      
        }else if(!Number(peso.value) || !Number(altura.value)){
            p.classList.add('dados')
            p.innerHTML += `Dados inválidos` 
            resultado.appendChild(p)
        }else{
            const weigth = Number(peso.value)
            const heigth = Number(altura.value)

            const imc = weigth / (heigth**2)

            const nivelImc = getNivelImc(imc)
           
                p.classList.add('result')
                p.innerHTML += `Resultado: ${imc.toFixed(2)} (${nivelImc})`
                resultado.appendChild(p)           

            function getNivelImc(imc){
                const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade garu 3']

                if(imc < 18.5){              
                    return nivel[0]             
                } else if(imc >= 18.5 && imc <= 24.9){              
                    return nivel[1]
                } else if(imc >= 25 && imc <= 29.9){              
                    return nivel[2]
                } else if(imc >= 30 && imc <= 34.9){
                    return nivel[3]
                } else if(imc >=35 && imc <= 39.9){
                    return nivel[4]
                } else if(imc >= 40){
                    return nivel[5]
                }
            }
            
        }

    }    

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()