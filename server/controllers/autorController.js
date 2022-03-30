import Autor from '../models/Autor.js';
import Livro from '../models/Livro.js'; 

class AutorController{ 

    static listarAutor = (req, res) => { 
        Autor.find()
        .exec((err, Autor) => { 
            if(err)
                res.status(500);
            else{
                res.render('autor-listagem', {
                    listaDeAutores: Autor
                });
            }
        });       
    }

    static listarAutorCombo = (req, res) => { 
        Autor.find() 
        .exec((err, Autor) => { 
            if(err)
                res.status(500);
            else{
                res.render('livro-cadastro', {
                    listaDeAutores: Autor
                });
            }
        });       
    }

    static listarAutorEspecifico = (req, res) => { 
        const id = req.query.id;

        Autor.findById(id, (err, autor) => { 
            if(err)
                res.json(0).status(400);
            else
                res.render('autor-atualizacao', {autor})   
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new Autor(req.body);
        
        autor.save(err => {
            if(err)
                res.json(0).status(500);
            else
                res.json(1).status(201);
        });
    }

    static atualizarAutor = (req, res) => {
        const id = req.query.id;

        Autor.findByIdAndUpdate(id, {$set: req.body}, err =>{
            if(err)
                res.json(0).status(500);
            else
                res.json(1).status(201);
        });
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        Livro.count({autor: id}, (err, resultado) => {
            if(err)
                res.json(0).status(500);
            else if(resultado > 0){
                res.json(3).status(500);   
            } else {
                Autor.findByIdAndDelete(id, err => { 
                    if(err)
                        res.json(1).status(500);
                    else
                        res.json(2).status(201);
                });
            }
        });
    }

}

export default AutorController;