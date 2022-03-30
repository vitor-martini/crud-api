import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router(); // Utilizando roteamento do express

router
    .get("/livro-listagem", LivroController.listarLivro) // Método chamado quando for uma requisição GET em /api/livros
    .get("/livro-atualizacao", LivroController.listarLivroEspecifico) // Método chamado quando for uma requisição PUT (update) em /api/livros/<id>
    .put("/livro-atualizacao", LivroController.atualizarLivro) // Método chamado quando for uma requisição PUT (update) em /api/livros/<id>
    .post("/livro-cadastro", LivroController.cadastrarLivro) // Método chamado quando for uma requisição POST (insert) em /api/livros
    .delete("/livro-exclusao/:id", LivroController.excluirLivro) // Método chamado quando for uma requisição DELETE em /api/livros/<id>

export default router;