import app from './src/app.js'; // Importanto arquivo app.js
const port = process.env.PORT || 3000; // Definindo a porta como variável de ambiente (producao) ou 3000 (dev)

app.listen(port, () =>{ //Sobe o servidor
    console.log(`Servidor rodando em http://localhost:${port}`);
})

