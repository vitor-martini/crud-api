import mongoose from 'mongoose'; 
import dotenv from 'dotenv';

dotenv.config({path:'config.env'});
mongoose.connect(process.env.MONGO_URI); 
let db = mongoose.connection;

export default db; 