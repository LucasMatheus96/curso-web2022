const alunos = [
    {nome:'joão', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: false},
    {nome:'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: false},
]

const resultado = alunos.map(a=>a.not).reduce(function(acumulaodor,atual){
    console.log(acumulaodor,atual)
    return acumulaodor + atual
})

