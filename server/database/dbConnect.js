import mongoose from "mongoose"; 
import dotenv from 'dotenv';

dotenv.config({path:'config.env'})
mongoose.connect(process.env.MONGO_URI); // String de conexão com o banco
let db = mongoose.connection;

export default db; // Exporta a conexão