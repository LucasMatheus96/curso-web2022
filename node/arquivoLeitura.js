const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

//sincrona
const conteudo = fs.readFileSync(caminho , 'utf-8');

console.log(conteudo)

//Assicrono
fs.readFile(caminho, 'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

fs.readdir(__dirname, (err,arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})