import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router(); // Utilizando roteamento do express

router
    .get("/", LivroController.listarLivro) // Método chamado quando for uma requisição GET em /api/livros
    .get("/atualizar-livro", LivroController.listarLivroPorID) // Método chamado quando for uma requisição PUT (update) em /api/livros/<id>
  //  .get("/listar-livro/busca", LivroController.listarLivroPorEditora) // Método chamado quando for uma requisição GET no formato 'http://localhost:3000/api/livros/busca?editora=<editora>'
    .post("/cadastrar-livro", LivroController.cadastrarLivro) // Método chamado quando for uma requisição POST (insert) em /api/livros
    .put("/atualizar-livro", LivroController.atualizarLivro) // Método chamado quando for uma requisição PUT (update) em /api/livros/<id>
    .delete("/excluir-livro/:id", LivroController.excluirLivro) // Método chamado quando for uma requisição DELETE em /api/livros/<id>

export default router;