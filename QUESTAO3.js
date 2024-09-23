const fs = require('fs')
let dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'))

function menorValor(){
	var menor = "";
	for(var indice = 0; indice < dados.length; indice++){
		if(dados[indice].faturamento != 0){
			if(dados[indice-1].faturamento < dados[indice].faturamento){
				menor = dados[indice-1].faturamento
			}else{
				menor = dados[indice].faturamento
			}
		}
	}
	console.log(`O menor faturamento do mês foi: R$ ${menor}`)
}

function maiorValor(){
	var maior = "";
	for(var indice = 0; indice < dados.length; indice++){
		if(dados[indice].faturamento != 0){
			if(dados[indice-1].faturamento > dados[indice].faturamento){
				maior = dados[indice-1].faturamento
			}else{
				maior = dados[indice].faturamento
			}
		}
	}
	console.log(`O maior faturamento do mês foi: R$ ${maior}`)
}

function media() {
    var calculo = 0
   	var segundoIndice = 0
	for (var indice = 0; indice < dados.length; indice++){
	    calculo = dados[indice].faturamento + calculo;
	    if(dados[indice].faturamento != 0){
	    	segundoIndice ++
	    }
	}
    var mediaFinal = (calculo/segundoIndice).toFixed(2)

    for(indice = 0; indice < dados.length; indice++){
    	if(dados[indice].faturamento > mediaFinal){
    		console.log(`O faturamento do dia ${dados[indice].dia} é de R$ ${dados[indice].faturamento} superior a média mensal no valor de R$ ${mediaFinal}`)
    	}
    }
}

menorValor()
maiorValor()
media()