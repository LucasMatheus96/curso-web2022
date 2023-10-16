//Criar de forma literal
function fun1(){}

//Armazenar em uma variavel
const fun2 = function () { }

//Armazenar em um Array

const array = [function(a,b){return a+b},fun1,fun2]
console.log(array[0](2,3))

//Armazenar em um objeto
const obj = {}

obj.falar = function() {return 'Opa'}

console.log(obj.falar())

//Passar funcao como parametro

function run(fun){
    fun()
}