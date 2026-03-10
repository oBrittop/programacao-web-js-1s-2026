//Strings
let nome = "Gustavo"
let sobrenome = "Brito"
let templateString = `O meu nome e ${nome} ${sobrenome}`
console.log(templateString)

// Number
let a = 2
let b = 5.14
let c = -3.14
const PI = 3.14
let potencia = a **c

console.log(typeof a)
console.log(typeof c)
console.log(potencia)
// console.log(typeof )
// console.log(typeof )

//Bolean
let verdadeiro = true
let falso = false
console.log(typeof verdadeiro)

//Operadores Logicos
let e = verdadeiro && falso
let ou = verdadeiro || falso
console.log(e)
console.log(ou)
let maior_que = b > a
console.log(`${b} > ${a} = ${maior_que}`)

//Arrays
let numeros = [1, 3.14, 99, -7, 505.67]
console.log(`Numero[2] : ${numeros[2]}`)

//Object

// Atributos podem ser de todos os tipos
let pessoa = {
    nome: 'João',
    cpf: 123,
    telefones: [61994038269, 61984268332]
};

console.log(pessoa.telefones[1])