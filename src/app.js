import express from "express"; // Importando express
const app = express(); 

const livros = [ // Definindo conteúdo
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
];

function buscarLivro(id){
    return livros.findIndex(livro => livro.id == id); //Procura dentro do array Livros o elemento com id igual ao que veio de parâmetro
}

app.use(express.json()); //Habilita a leitura de JSON

app.get('/', (req, res) =>{ // Definindo método GET da rota padrão '/'
    res.status(200).send('Ola mundo!');
});

app.get('/livros', (req, res) => { // Definindo método GET (select) da rota /livros, com resposta json
    res.status(200).json(livros)
});

app.get('/livros/:id', (req, res) =>{ // Definindo método GET (select) da rota /livros/id
    let indice = buscarLivro(req.params.id); 
    res.status(200).send(livros[indice]); // Retorna somente o livro daquele ID
})

app.put('/livros', (req, res) => { // Definindo método PUT (insert) da rota /livros. A resposta é incluída no array.
    livros.push(req.body);
    res.status(200).send("Livro cadastrado com sucesso");
})

app.post('/livros/:id', (req, res) => { // Definindo método POST (update) da rota /livros/id.
    let index = buscarLivro(req.params.id); // Busca o ID do livro no array
    livros[index].titulo = req.body.titulo; // Atualiza o titulo
    res.status(200).send(livros); // Envia a confirmação
})

app.delete('/livros/:id', (req, res) => { // Definindo método DELETE (insert) da rota /livros/id.
    let {id} = req.params; // Atribuição por descontrução. Atribui a variavel id o valor de req.params.id
    let index = buscarLivro(id);
    livros.splice(index, 1); // Remove o livro do array
    res.status(200).send(`Livro ${id} excluído com sucesso.`);
})

export default app; // Exportando o módulo