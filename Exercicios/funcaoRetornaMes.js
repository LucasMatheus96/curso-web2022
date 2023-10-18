//MODO 1
const fnReturnMesDoAno = function(mes){
    switch(mes){
        case 1: 
        return "Janeiro"
        case 3:
        return "março";
        case 4:
        return "abril";
        case 5:
        return "maio";
        case 6:
        return "junho";
        case 7:
        return "julho";
        case 8:
        return "agosto";
        case 9:
        return "setembro";
        case 10:
        return "outubro";
        case 11:
        return "novembro";
        case 12:
        return "dezembro";
    }
}

//MODO 2

const fnRetornarMesArray = function(mes){
    const meses = ['Janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']

    return meses[--mes]
}


console.log(fnRetornarMesArray(1))