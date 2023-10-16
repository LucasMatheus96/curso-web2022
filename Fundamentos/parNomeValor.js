const saudacao = 'Opa' //Contexto Léxico 1 

function exec(){
    const saudacao = 'falaaa' //Contexto Léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome:'pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro:'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)