function criarProduto(nome,preco){
    return {
        nome: nome,
        preco: preco,
        desconto: 5
    }
}

console.log(criarProduto('lucas',10))
console.log(criarProduto('MAtheus',10))