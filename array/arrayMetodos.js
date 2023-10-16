const pilotos = ['vettel', 'alonso','raikkonen', 'massa']

pilotos.pop() //Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2,0,'Botas','massa')
console.log(pilotos)
