const fs = require('fs')
let dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'))

function menorValor(){
	var menor = "";
	var dia = ""
	for(var indice = 0; indice < dados.length; indice++){
		if(dados[indice].faturamento != 0){
			if(dados[indice-1].faturamento < dados[indice].faturamento){
				menor = dados[indice-1].faturamento
				dia = dados[indice-1].dia
			}else{
				menor = dados[indice].faturamento
				dia = dados[indice].dia
			}
		}
	}
	console.log(`O menor faturamento do mês foi de R$ ${menor} no dia ${dia}`)
}

function maiorValor(){
	var maior = "";
	var dia = ""
	for(var indice = 0; indice < dados.length; indice++){
		if(dados[indice].faturamento != 0){
			if(dados[indice-1].faturamento > dados[indice].faturamento){
				maior = dados[indice-1].faturamento
				dia = dados[indice-1].dia
			}else{
				maior = dados[indice].faturamento
				dia = dados[indice].dia
			}
		}
	}
	console.log(`O maior faturamento do mês foi de R$ ${maior} no dia ${dia}`)
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