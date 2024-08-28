const servico = require('../models/servicos');

//Criar um novo serviço
exports.createServico = async (req, res) =>{
    try{
        const novoServico = new servico(req.body);
        const salvaServico = await novoServico.save();
        res.status(201).json(salvaServico);
    }catch(error){
        res.status(500).json({message: 'Erro ao criar serviço', error});
        console.log(error)
    }
};