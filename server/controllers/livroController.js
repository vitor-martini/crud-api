import Livro from '../models/Livro.js'; 
import Autor from '../models/Autor.js';
import async from 'async';

class LivroController{

    static listarLivro = (req, res) => { 
        Livro.find() 
            .populate('autor', 'nome') 
            .exec((err, livro) => { 
                if(err)
                    res.status(500).send({message: `${err.message} - Não foi possível carregar os livros.`});
                else{
                    res.render('livro-listagem', {
                        listaDeLivros: livro
                    });
                }
            });        
    }

    static listarLivroEspecifico = (req, res) => { 
        let locals = {};
        async.parallel({
            autor: 
                function(callback) {
                    Autor.find() 
                        .exec((err, autor) => {
                            if (err) return callback(err);
                            locals.autor = autor;
                            callback();
                        });
                },
            livro: 
                function(callback) {
                    const id = req.query.id;  
                    Livro.findById(id) 
                        .exec((err, livro) => {
                            if (err) return callback(err);
                            locals.livro = livro;
                            callback();
                        });
                }
        }, function(err) { 
                if (err)
                    res.status(500).send({message: `${err.message} - Não foi possível carregar o livro.`});
                else   
                    res.render('livro-atualizacao', {
                        livro: locals.livro,
                        listaDeAutores: locals.autor,
                    });  
            }
        );
    };

    static cadastrarLivro = (req, res) => {       
        const livro = new Livro({
            titulo: req.body.titulo,
            autor: req.body.autor,
            editora: req.body.editora,
            numeroPaginas: req.body.numeroPaginas,
            status: req.body.status,
        }); 

        livro.save(err => { 
            if(err)
                res.json(0).status(500);
            else   
                res.json(1).status(201); 
        });
    }
 
    static atualizarLivro = (req, res) => {
        const id = req.query.id;   
  
        Livro.findByIdAndUpdate(id, {$set: req.body}, err =>{ 
            if(err)
                res.json(0).status(500);
            else
                res.json(1).status(201);
        });
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        Livro.findByIdAndDelete(id, err => { 
            if(err)
                res.json(0).status(500);
            else
                res.json(1).status(201);
        });
    }
}

export default LivroController;