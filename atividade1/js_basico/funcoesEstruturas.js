//Funçoes
function somar(a, b){
    let soma = a + b
    console.log(soma)
}
function multipicacao(a, b){
    let mult = a * b
    console.log(mult)
}

// Estruturas de Repetição
let i
for(i=0; i<=10; i++){
    multipicacao(i, 7)
}

i = 0
while(i<5){
    somar(i, 10)
    i++
}
// Estrutura condicional
let idade = 18
if(idade > 18){
    console.log("E maior de idade.")
}
else if(idade == 18){console.log("Tem exatamente 18 anos")}
else{
    console.log("E menor de idade.")
}