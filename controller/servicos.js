const servico = require("../models/servicos");

//Criar um novo serviço
exports.createServico = async (req, res) => {
  let data = {};
  try {
    const { nome, descricao, imagem } = req.body;
    data = {
      nome_servico: nome,
      descricao: descricao,
      imagem_url: imagem,
    };
    const novoServico = new servico(data);
    const salvaServico = await novoServico.save();
    res.status(201).json(salvaServico);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar serviço", error });
    console.log(error);
  }
};

//Mostrar todos os serviços
exports.mostrarServicos = async (req, res) => {
    let dataServicos = await servico.find().lean();
    await dataServicos.forEach()
}