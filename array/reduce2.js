const alunos = [
    {nome:'joão', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: false},
    {nome:'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: false},
]

//Desafio 1: Todos os alunos são bolsistas ?

const todosOsAlunosBolsistas = (resultado,bolsista)=> resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosOsAlunosBolsistas))


//Desafio 2 algum aluno é bolsista? 

const algumBolsista = ( resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a =>a.bolsista).reduce(algumBolsista))

