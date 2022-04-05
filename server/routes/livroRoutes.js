import express from 'express';
import LivroController from '../controllers/livroController.js';

const router = express.Router(); 

router
    .get('/livro-listagem', LivroController.listarLivro) 
    .get('/livro-atualizacao', LivroController.listarLivroEspecifico) 
    .put('/livro-atualizacao', LivroController.atualizarLivro) 
    .post('/livro-cadastro', LivroController.cadastrarLivro) 
    .delete('/livro-exclusao/:id', LivroController.excluirLivro) 
 
export default router;