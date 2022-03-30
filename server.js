import app from './app.js'; 
import dotenv from 'dotenv';

dotenv.config({path:'config.env'});
const port = process.env.PORT || 8080; 

app.listen(port, () =>{ 
    console.log(`Servidor rodando em http://localhost:${port}.`);
})

