const fnReturnPayment = function(hours,valueHours){
    const imposto = 0.3
    const salarioBruto = hours * valueHours
    const salarioLiquido = salarioBruto - (salarioBruto * imposto)
    return `Salario igual a R$ ${salarioLiquido}`
}

console.log(fnReturnPayment(180,60))