// Importa as bibliotecas necessárias
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env (opcional)
const express = require('express'); // Framework para criar o servidor
const mysql = require('mysql2'); // Biblioteca para conectar ao MySQL
const cors = require('cors'); // Middleware para permitir requisições de diferentes origens

// Cria uma instância do Express
const app = express();

// Permite que o servidor entenda JSON no corpo das requisições
app.use(express.json());

// Habilita o CORS para permitir que o frontend se comunique com o backend
app.use(cors());

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'mapa_interativo' 
});

// Conecta ao banco de dados
db.connect(err => {
    if (err) { 
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL'); 
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000'); 
});
