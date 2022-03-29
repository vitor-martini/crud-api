import livros from "../models/Livro.js"; // Importando o Schema de livros

class LivroController{

    // Método "select")"
    static listarLivro = (req, res) => { 
        livros.find() // Busca os dados
            .populate('autor') // Popula o autor com base na ligação do arquivo models
            .exec((err, livros) => { 
                if(err)
                    res.status(500).send({message: `${err.message} - falha ao listar livros.`})
                else
                    res.status(200).send(livros) // Devolve os livros encontrados
            });
    }

    // Método "select where editora = <editora>"
    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora

        livros.find({'editora': editora}, {}, (err, livros) => { // Procura onde o atributo 'editora' for igual ao retorno da query da requisição
            if(err)
                res.status(500).send({message: `${err.message} - falha ao listar livros.`})
            else            
                res.status(200).send(livros) 
        })
    }

    // Método "select where id = <id>"
    static listarLivroPorID = (req, res) => { 
        const id = req.params.id;

        livros.findById(id) // Procura pelo ID
            .populate('autor', 'nome') // Traz somente o nome do autor, não todos os dados como o método listarLivros
            .exec((err, livros) => {
                if(err)
                    res.status(400).send({message: `${err.message} - livro não encontrado.`})
                else
                    res.status(200).send(livros) 
            });
    }

    // Método "insert"
    static cadastrarLivro = (req, res) => {
        console.log(req.body);

        let livro = new livros({
            titulo: req.body.titulo,
            autor: req.body.autor,
            editora: req.body.editora,
            numeroPaginas: req.body.numeroPaginas
        }); // Recebe o json do corpo da requisição
   
        livro.save(err => { // Salva no banco
            if(err)
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`});
            else   
                res.status(201).send(livro.toJSON());
        })
    }

    // Método "update"
    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, err =>{ //Procura o registro pelo ID e o atualiza conforme o json enviado
            if(err)
                res.status(500).send({message: `${err.message} - falha ao atualizar livro.`});
            else
                res.status(200).send({message: 'Livro atualizado com sucesso.'});
        })
    }

    // Método delete
    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, err => { //Procura o registro pelo ID e o exclui
            if(err)
                res.status(500).send({message: `${err.message} - falha ao excluir livro.`});
            else
                res.status(200).send({message: 'Livro excluído com sucesso.'});
        })
    }
}

export default LivroController;