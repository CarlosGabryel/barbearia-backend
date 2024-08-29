const botao = document.getElementById('menu--toggle')
const menu = document.querySelector('.nav--responsivo')
const img = document.getElementById('img')

botao.addEventListener('click', () => {
  if(botao.name === 'abrir') {
    img.setAttribute("src", "/img/fechar.png");
    menu.style.display = "block";
    botao.name = "fechar"
  } else if(botao.name === "fechar") {
    img.setAttribute("src", "/img/menu.png");
    menu.style.display = "none";
    botao.name = "abrir"
  }
})

window.addEventListener('resize', () => {
  var larguraDaTela = window.innerWidth;

  if(larguraDaTela > 950) {
    menu.style.display = "flex";
    botao.name = "fechar"
    img.setAttribute("src", "/img/fechar.png");
  } else {
    menu.style.display = "none";
    botao.name = "abrir"
    img.setAttribute("src", "/img/menu.png");
  }
});

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

//Adicionando os elementos para o html
document.addEventListener('DOMContentLoaded', async()=>{
  const listaServico = document.getElementById()
})

