const express = require('express');
const router = express.Router()

app.use(express.json());
app.use(express.static('public'));


app.listen(3000, () => console.log("Servidor executando na porta 3000"));