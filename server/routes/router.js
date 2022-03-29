import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import dotenv from 'dotenv';

dotenv.config({path:'config.env'})
const port = process.env.PORT || 8080;

const routes = (app) =>{ // Para  cada rota do app
                    
    app.use( // Encaminha para as outras rotas
        express.json(), //Habilita a leitura de JSON
        livros,
        autores
    )
}

export default routes

