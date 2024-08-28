const express = require('express');
const app = express();
const path = require('path');

// Importar a conexão com o banco de dados
require('./database/db.js'); // Conexão com o MongoDB

// Importar as rotas
const routerRoute = require('./routes/route');

// Configurar middlewares
app.use(express.json());
app.use(express.static('public'));

// Usar as rotas importadas
app.use(routerRoute);

// Iniciar o servidor
app.listen(3000, () => console.log("Servidor executando na porta 3000"));
