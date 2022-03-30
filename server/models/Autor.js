import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String},
    }
);

const autor = mongoose.model('autor', autorSchema); 
export default autor;