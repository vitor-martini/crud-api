import livros from "../models/Livro.js"; // Importando o Schema de livros
import autores from "../models/Autor.js";
import dotenv from 'dotenv';
import async from 'async';

dotenv.config({path:'config.env'})
const port = process.env.PORT || 8080;

class LivroController{

    // Método "select")"
    static listarLivro = (req, res) => { 
        livros.find() // Busca os dados
            .populate('autor', 'nome') // Traz somente o nome do autor, não todos os dados como o método listarLivros
            .exec((err, livros) => { 
                if(err)
                    res.status(500).send({message: `${err.message} - falha ao listar livros.`})
                else{
                    res.render('index', {
                        listaDeLivros: livros
                    })
                }
            });        
    }

    // Método "select")"
    static listarLivroPorID = (req, res) => { 
        var locals = {};
        const id = req.query.id
        async.parallel([
            //Load posts Data
            function(callback) {
                autores.find() // Procura pelo ID
                    .exec((err, autores) => {
                        if (err) return callback(err);
                        locals.autores = autores;
                        callback();
                    });
            },
            //Load user Data
            function(callback) {
                livros.findById(id) // Procura pelo ID
                    .exec((err, livro) => {
                        if (err) return callback(err);
                        locals.livro = livro;
                        callback();
                    });
            }
        ], function(err) { //This function gets called after the two tasks have called their "task callbacks"
            if (err) return next(err); //If an error occurred, we let express handle it by calling the `next` function
            //Here `locals` will be an object with `user` and `posts` keys
            //Example: `locals = {user: ..., posts: [...]}`
    
            res.render('atualizar-livro', {livro: locals.livro,listaDeAutores: locals.autores})   
    })};



    // // Método "select")"
    // static listarLivroPorID = (req, res) => { 
    //     const id = req.query.id
    //     let testeLivro;
    //     livros.findById(id) // Procura pelo ID
    //     .exec((err, livro) => {
    //         if(err)
    //             res.json(0).status(400)
    //         else{
    //             testeLivro = livro;
    //         }
    //     });
        
    //     autores.find() // Busca os dados
    //     .exec((err, autores) => { 
    //         if(err)
    //             res.status(500).send({message: `${err.message} - falha ao listar livros.`})
    //         else{
    //             res.render('atualizar-livro', {
    //                 listaDeAutores: autores,
    //                 testeLivro
    //             })
    //         }
    //     });       

    // }

    // // Método "select where editora = <editora>"
    // static listarLivroPorEditora = (req, res) => {
    //     const editora = req.query.editora

    //     livros.find({'editora': editora}, {}, (err, livros) => { // Procura onde o atributo 'editora' for igual ao retorno da query da requisição
    //         if(err)
    //             res.status(500).send({message: `${err.message} - falha ao listar livros.`})
    //         else            
    //             res.status(200).send(livros) 
    //     })
    // }

    // Método "insert"
    static cadastrarLivro = (req, res) => {       
        let livro = new livros({
            titulo: req.body.titulo,
            autor: req.body.autor,
            editora: req.body.editora,
            numeroPaginas: req.body.numeroPaginas
        }); // Recebe o json do corpo da requisição

        livro.save(err => { // Salva no banco
            if(err)
                res.json(0).status(500);
            else   
                res.json(1).status(201); 
        })
    }
 
    // Método "update"
    static atualizarLivro = (req, res) => {
        const id = req.query.id;    
  
        livros.findByIdAndUpdate(id, {$set: req.body}, err =>{ //Procura o registro pelo ID e o atualiza conforme o json enviado
            if(err)
                res.json(0).status(500);
            else
                res.json(1).status(201);
        })
    }

    // Método delete
    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, err => { //Procura o registro pelo ID e o exclui
            if(err)
                res.json(0).status(500);
            else
                res.json(1).status(201);
        })
    }
}

export default LivroController;