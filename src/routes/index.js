import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"

const routes = (app) =>{ // Para  cada rota do app
    app.route('/').get((req, res) => { // Se for o localhost padrão, envia a mensagem definida
        res.status(200).send({titulo: "Ola mundo!"})
    });

    app.use( // Encaminha para as outras rotas
        express.json(), //Habilita a leitura de JSON
        livros,
        autores
    )
}

export default routes

