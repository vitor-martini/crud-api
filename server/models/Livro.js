import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autor', required: true}, 
        editora: {type: String, required: true},
        numeroPaginas: {type: Number},
        status: {type: Boolean, required: true},
    }
);

const livro = mongoose.model('livro', livroSchema); 
export default livro; 