import mongoose from "mongoose";

// Define o Schema (estrutura da "tabela") de livros
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true}, // Incluindo a referencia ao esquema de autores
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
);

const livros = mongoose.model('livros', livroSchema); // Cria o Schema
export default livros; // Exporta