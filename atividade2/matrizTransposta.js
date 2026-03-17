let array1 = [1, 3, 5];
let array2 = [2, 4, 6];
let matriz = [array1, array2];

console.log("Matriz Original:", matriz);

function transporMatriz(matriz) {
    let matrizTransposta = [];
    for (let c = 0; c < matriz[0].length; c++) {
        let novaLinha = [];
        for (let l = 0; l < matriz.length; l++) {
            
          
            novaLinha.push(matriz[l][c]);
        }

        matrizTransposta.push(novaLinha);
    }


    return matrizTransposta;
}

console.log("Matriz Transposta:", transporMatriz(matriz));