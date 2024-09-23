 var distribuicao = [
    {
        "estado": "SP",
        "valor": 67836.43,
    },
    {
        "estado":"RJ",
        "valor": 36678.66,
    },
    { 
        "estado": "MG",
        "valor": 29229.88,
    },
    {
        "estado": "ES",
        "valor": 27165.48,
    },
    { 
        "estado": "OUTROS",
        "valor": 19849.53,
     }
]
 // console.log(distribuicao[1].valor)
function soma() {
    var calculo = 0
    for (var indice = 0; indice < distribuicao.length; indice++){
        calculo = distribuicao[indice].valor + calculo;
    }
     console.log(`O valor total faturamento da distribuidora é de R$ ` + calculo)
    return calculo
}

var valorTotal = soma()

function percentual(){
    for (var i = 0; i < distribuicao.length ; i ++){
       var calculoFinal = distribuicao[i].valor * 100 / valorTotal;
        console.log(`O estado de  ${distribuicao[i].estado} possui o percentual de ${calculoFinal.toFixed(2)}%`)
    }
    return 
}

percentual()