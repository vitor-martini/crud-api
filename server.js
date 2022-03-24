import app from './app.js'; // Importanto arquivo app.js
import dotenv from 'dotenv';

dotenv.config({path:'config.env'})
const port = process.env.PORT || 8080; // Definindo a porta como variável de ambiente (producao) ou 3000 (dev)

app.listen(port, () =>{ //Sobe o servidor
    console.log(`Servidor rodando em http://localhost:${port}`);
})

