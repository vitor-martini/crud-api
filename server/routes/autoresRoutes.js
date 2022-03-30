import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router(); 

router
    .get("/lista-autor", AutorController.listarAutor) 
    .get("/cadastrar-livro", AutorController.loadComboAutor) 
    .post("/cadastrar-autor", AutorController.cadastrarAutor)
    .get("/atualizar-autor", AutorController.listarAutorPorID) 
    .put("/atualizar-autor", AutorController.atualizarAutor)
    .delete("/excluir-autor/:id", AutorController.excluirAutor)

export default router;