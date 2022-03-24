import mongoose from "mongoose"; 

mongoose.connect("mongodb+srv://sa:21081999@alura-cluster.ikqc7.mongodb.net/alura-db"); // String de conexão com o banco
let db = mongoose.connection;

export default db; // Exporta a conexão