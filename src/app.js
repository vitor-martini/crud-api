import express from "express"; // Importando express
import db from "./server/database/dbConnect.js" // Importando conexão com o banco
import routes from "./server/routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão')); // Liga o banco e trata caso dê erro
db.once("open", () =>{ // Se a conexão foi feita com sucesso, exibe a mensagem
    console.log('Conexão com o banco feita com sucesso.');
});

const app = express(); 
routes(app);

export default app; // Exportando o módulo