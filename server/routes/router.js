import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config({path:'config.env'})
const port = process.env.PORT || 8080;

const routes = (app) =>{ // Para  cada rota do app
    
    app.route('/cadastrar-livro').get((req, res) => { // Se for o localhost padrão, envia a mensagem definida
        res.render('cadastrar-livro');
    });
                
    app.use( // Encaminha para as outras rotas
        express.json(), //Habilita a leitura de JSON
        livros,
        autores
    )
}

export default routes

