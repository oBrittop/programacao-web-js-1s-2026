function imc(peso, altura){
    let categoria
    num_imc = peso / (altura*altura)
    if(num_imc < 18.5){let categoria = "baixo do peso"}
    else if(num_imc >= 18.5 && num_imc < 24.9){categoria = "Peso normal"}
    else if(num_imc >= 24.9 && num_imc < 29.9){categoria = "Ecesso de peso"}
    else if(num_imc >= 29.9 && num_imc < 35){categoria = "Obesidade"}
    else{categoria = " Obesidade Extrema"}
    console.log(`Peso = ${peso}, Altura = ${altura}, IMC valor = ${num_imc}, IMC Categoria = ${categoria}`)

}
imc(70, 1.83)