const moduloA = require('../../moduloA')
console.log(moduloA.ola);


const http = require('http')
http.createServer((req,resp) =>{
    resp.write('bomDia!')
    resp.end()
}).listen(8080)