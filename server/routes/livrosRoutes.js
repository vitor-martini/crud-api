import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router(); // Utilizando roteamento do express

router
    .get("/api/livros", LivroController.listarLivro) // Método chamado quando for uma requisição GET em /api/livros
    .get("/api/livros/busca", LivroController.listarLivroPorEditora) // Método chamado quando for uma requisição GET no formato 'http://localhost:3000/api/livros/busca?editora=<editora>'
    .post("/api/livros", LivroController.cadastrarLivro) // Método chamado quando for uma requisição POST (insert) em /api/livros
    .put("/api/livros/:id", LivroController.atualizarLivro) // Método chamado quando for uma requisição PUT (update) em /api/livros/<id>
    .delete("/api/livros/:id", LivroController.excluirLivro) // Método chamado quando for uma requisição DELETE em /api/livros/<id>

export default router;