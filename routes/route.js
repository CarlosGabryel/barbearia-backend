const express = require('express');
const router = express.Router();
const path = require('path');
const servicoControler = require('../controller/servicos');

// Rota para servir o index.html
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
});

// Rota para a página de contato
router.get('/contato', function(req, res) {
    res.sendFile(path.join(__dirname,'../public/html/contato.html'));
});

//rota para a página de planos
router.get('/planos', function(req, res){
    res.sendFile(path.join(__dirname, '../public/html/planos.html'));
});

//rota para a página de serviços
router.get('/servicos', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/html/servicos.html'));
});

//rota para a página de sobre
router.get('/sobre', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/html/sobre.html'));
})

//Rota para criar servico
router.post('/criarservico', servicoControler.createServico);

module.exports = router;