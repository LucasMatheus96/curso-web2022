function getPreco(imposto =0 , moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto) }`
}

const produto = {
    nome:'notebook',
    preco: 4589,
    desc:0.15,
    getPreco

}