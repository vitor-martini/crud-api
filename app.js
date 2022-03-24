import express from "express"; // Importando express
import db from "./server/database/dbConnect.js"; // Importando conexão com o banco
import routes from "./server/routes/router.js";
import bodyParser from "body-parser";
import path from "path";

db.on("error", console.log.bind(console, 'Erro de conexão')); // Liga o banco e trata caso dê erro
db.once("open", () =>{ // Se a conexão foi feita com sucesso, exibe a mensagem
    console.log('Conexão com o banco feita com sucesso.');
});

const app = express(); 
app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs"); // Setando a view engine
app.use("/css", express.static(path.resolve(process.cwd(),"assets/css")));
app.use("/img", express.static(path.resolve(process.cwd(),"assets/img")));
app.use("/js", express.static(path.resolve(process.cwd(),"assets/js")));

routes(app);

export default app; // Exportando o módulo