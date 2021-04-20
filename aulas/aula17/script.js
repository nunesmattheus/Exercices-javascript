function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date')
    }

    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

try{
    const hora = retornaHora(11)
    console.log(hora)   
}catch(e){

}finally{
    console.log('Tenha um bom dia')
}
