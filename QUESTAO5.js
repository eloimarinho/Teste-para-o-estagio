var palavra = "A amizade é tudo!"
var palavraFinal = ""
var totalDeCaracteres = palavra.length;

for(var indice = totalDeCaracteres - 1; indice >= 0; indice--){
    palavraFinal = palavraFinal + palavra[indice]
}

console.log(`Sua palavra invertida é: ${palavraFinal}`)