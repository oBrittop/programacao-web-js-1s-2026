const express = require('express');
const app = express();

// Nosso "banco de dados" em memória
let estoque = [];

// (As rotas vão entrar aqui)

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000! Acesse: http://localhost:3000');
});
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    // Pegando os dados da URL
    const id = req.params.id;
    const nome = req.params.nome;
    const qtd = req.params.qtd;

    // Criando o objeto do produto
    const novoProduto = {
        id: id,
        nome: nome,
        qtd: Number(qtd) // Convertendo para número
    };

    estoque.push(novoProduto);
    res.send(`Produto ${nome} adicionado com sucesso!`);
});
app.get('/listar', (req, res) => {
    res.json(estoque);
});
app.get('/editar/:id/:qtd', (req, res) => {
    const idPassado = req.params.id;
    const novaQtd = req.params.qtd;

    // Procura o produto no array
    const produto = estoque.find(p => p.id === idPassado);

    if (produto) {
        produto.qtd = Number(novaQtd);
        res.send(`Quantidade do produto ID ${idPassado} atualizada para ${novaQtd}.`);
    } else {
        res.status(404).send('Produto não encontrado!');
    }
});
app.get('/remover/:id', (req, res) => {
    const idParaRemover = req.params.id;

    // Atualiza o estoque mantendo apenas os produtos que NÃO têm esse ID
    estoque = estoque.filter(p => p.id !== idParaRemover);

    res.send(`Produto ID ${idParaRemover} removido (se existia).`);
});