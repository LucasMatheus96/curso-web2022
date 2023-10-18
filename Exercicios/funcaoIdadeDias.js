const idade = 70; 

const converteAnosEmDias = function(idade){
    const diasDoAno= 365
    return idade * diasDoAno
}

console.log(`A idade em dias é ${converteAnosEmDias(idade)}`)