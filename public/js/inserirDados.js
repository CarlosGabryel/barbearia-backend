//Levando os dados para o BD
document.getElementById('servicoForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = {
      nome: document.getElementById('nome').value,
      imagem: document.getElementById('imagem').value,
      descricao: document.getElementById('descricao').value
  };

  const response = await fetch('/criarservico', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  });

  const result = await response.json();
  console.log(result);
  if(response.ok){
    alert('Serviço criado com sucesso');
    window.location.href = '/servicos';
  }else{
    alert('Erro ao criar serviço.')
  }
});