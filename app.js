const express = require('express');
const app = express();
const path = require('path');

// Importar as rotas
const routerRoute = require('./routes/route');

app.use(express.json());
app.use(express.static('public'));

// Usar as rotas importadas
app.use(routerRoute);

app.listen(3000, () => console.log("Servidor executando na porta 3000"));