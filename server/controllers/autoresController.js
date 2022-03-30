import autores from "../models/Autor.js";
import livros from "../models/Livro.js"; // Importando o Schema de livros

class AutorController{ 

    static listarAutor = (req, res) => { 
        autores.find() // Busca os dados
        .exec((err, autores) => { 
            if(err)
                res.status(500).send({message: `${err.message} - falha ao listar autores.`})
            else{
                res.render('lista-autor', {
                    listaDeAutores: autores
                })
            }
        });       
    }

    static loadComboAutor = (req, res) => { 
        autores.find() // Busca os dados
        .exec((err, autores) => { 
            if(err)
                res.status(500).send({message: `${err.message} - falha ao listar livros.`})
            else{
                res.render('cadastrar-livro', {
                    listaDeAutores: autores
                })
            }
        });       
    }

    static listarAutorPorID = (req, res) => { 
        const id = req.query.id;

        autores.findById(id, (err, autor) => { 
            if(err)
                res.json(0).status(400);
            else
                res.render('atualizar-autor', {autor})   
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        
        autor.save(err => {
            if(err)
                res.json(0).status(500);
            else
                res.json(1).status(201);
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.query.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, err =>{
            if(err)
                res.json(0).status(500);
            else
                res.json(1).status(201);
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        livros.count({autor: id}, (err, resultado) => {
            if(err)
                res.json(0).status(500);
            else if(resultado > 0){
                res.json(3).status(500);   
            } else {
                autores.findByIdAndDelete(id, err => { //Procura o registro pelo ID e o exclui
                    if(err)
                        res.json(1).status(500);
                    else
                        res.json(2).status(201);
                })
            }
        })
    }

}

export default AutorController;