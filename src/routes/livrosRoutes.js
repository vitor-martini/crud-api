import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router(); // Utilizando roteamento do express

router
    .get("/livros", LivroController.listarLivro) // Método chamado quando for uma requisição GET em /livros
    .get("/livros/busca", LivroController.listarLivroPorEditora) // Método chamado quando for uma requisição GET no formato 'http://localhost:3000/livros/busca?editora=<editora>'
    .get("/livros/:id", LivroController.listarLivroPorID) // Método chamado quando for uma requisição GET em /livros/<id>
    .post("/livros", LivroController.cadastrarLivro) // Método chamado quando for uma requisição POST (insert) em /livros
    .put("/livros/:id", LivroController.atualizarLivro) // Método chamado quando for uma requisição PUT (update) em /livros/<id>
    .delete("/livros/:id", LivroController.excluirLivro) // Método chamado quando for uma requisição DELETE em /livros/<id>

export default router;