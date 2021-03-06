import express from 'express';
import livro from './livroRoutes.js';
import autor from './autorRoutes.js';

const routes = (app) =>{ 

    app.route('/').get((req, res) => { 
        res.render('index');
    });

    app.route('/autor-cadastro').get((req, res) => { 
        res.render('autor-cadastro');
    });

    app.use(
        express.json(), 
        livro,
        autor
    );
}

export default routes;

