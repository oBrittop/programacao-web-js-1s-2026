
function verificarPariedade(){
numero = 9
if(numero < 0){console.log("Digite um numero valido")}
else if(numero % 2 == 0 ){v = true}
else{v = false}
return numero, v
}

function apresentarMensagemPariedade(numero, v){
    if(v == true){
        console.log(`${numero} e par`)
    }
    else{console.log(`${numero} e impar`)}
}
apresentarMensagemPariedade(numero, v)