import autores from "../models/Autor.js";

class AutorController{ 

    static listarAutor = (req, res) => { 
        autores.find((err, autores) => { 
            if(err)
                res.status(500).send({message: `${err.message} - falha ao listar autores.`})
            else
                res.status(200).send(autores) 
        });
    }

    static listarAutorPorID = (req, res) => { 
        const id = req.params.id;

        autores.findById(id, (err, autores) => { 
            if(err)
                res.status(400).send({message: `${err.message} - Autor não encontrado.`})
            else
                res.status(200).send(autores) 
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save(err => {
            if(err)
                res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`});
            else   
                res.status(201).send(autor.toJSON());
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, err =>{
            if(err)
                res.status(500).send({message: `${err.message} - falha ao atualizar Autor.`});
            else
                res.status(200).send({message: 'Autor atualizado com sucesso.'});
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, err => {
            if(err)
                res.status(500).send({message: `${err.message} - falha ao excluir Autor.`});
            else
                res.status(200).send({message: 'Autor excluído com sucesso.'});
        })
    }
}

export default AutorController;