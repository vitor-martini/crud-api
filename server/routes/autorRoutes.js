import express from 'express';
import AutorController from '../controllers/autorController.js';

const router = express.Router(); 

router
    .get('/livro-cadastro', AutorController.listarAutorCombo)
    .get('/autor-listagem', AutorController.listarAutor) 
    .post('/autor-cadastro', AutorController.cadastrarAutor)
    .get('/autor-atualizacao', AutorController.listarAutorEspecifico) 
    .put('/autor-atualizacao', AutorController.atualizarAutor)
    .delete('/autor-exclusao/:id', AutorController.excluirAutor)

export default router;