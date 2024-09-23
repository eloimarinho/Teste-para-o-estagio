let numeroTestado = 21;

let segundoNumero = 1;
let terceiroNumero = 2;

if(numeroTestado>1){
    while (segundoNumero<numeroTestado) {
        terceiroNumero = terceiroNumero + segundoNumero;
        segundoNumero = terceiroNumero - segundoNumero;
    }
}

if(segundoNumero == numeroTestado || numeroTestado == 0 || numeroTestado == 1){
    console.log(numeroTestado + ` pertence a Sequencia de Fibonacci`)
}else {
    console.log(numeroTestado + ` não pertence a Sequencia de Fibonacci`)
}