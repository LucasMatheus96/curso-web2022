const fabricantes = ["Mercedes", "Audi","BMW"]

function imprimr(nome,indice){
    console.log(`${indice + 1}. ${nome}`)
}

imprimr(fabricantes)

fabricantes.forEach(imprimr)
fabricantes.forEach(fabricante => console.log(fabricante))