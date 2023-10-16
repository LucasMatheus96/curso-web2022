Array.prototype.filter2 = function (callback){
    const newArray =[]
    for(let i=0; i < this.length; i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: true}
]

console.log(produtos.filter(function(p){
    return 
}))

const filterOfPrice = p => p.preco >= 500 
const FilterIsFragil = p => p.fragil 

console.log(produtos.filter2(filterOfPrice).filter2(FilterIsFragil))