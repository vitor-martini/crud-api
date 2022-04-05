import express from 'express'; 
import db from './server/database/dbConnect.js'; 
import routes from './server/routes/router.js';
import bodyParser from 'body-parser';
import path from 'path';

db.on('error', console.log.bind(console, 'Erro de conexão.')); 
db.once('open', () =>{ 
    console.log('Conexão com o banco feita com sucesso.');
});

const app = express();
app.use(bodyParser.urlencoded({extended: false})); 
app.set('view engine', 'ejs'); 
app.use('/css', express.static(path.resolve(process.cwd(),'assets/css'))); 
app.use('/img', express.static(path.resolve(process.cwd(),'assets/img')));
app.use('/js', express.static(path.resolve(process.cwd(),'assets/js')));

routes(app);

export default app; 