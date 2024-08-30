//Levando os dados para o BD

document
  .getElementById("servicoForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      nome: document.getElementById("nome").value,
      imagem: document.getElementById("imagem").value,
      descricao: document.getElementById("descricao").value,
    };

    const response = await fetch("/criarservico", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);
    if (response.ok) {
      alert("Serviço criado com sucesso");
      window.location.href = "/servicos";
    } else {
      alert("Erro ao criar serviço.");
    }
  });

//LEVANDO OS DADOS DO USUARIO PARA O BD
document
  .getElementById("userForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      usuario: document.getElementById("usuario").value,
      senha: document.getElementById("senha").value,
    };

    const response = await fetch("/criarLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);
    if (response.ok) {
      alert("Conta criada com sucesso");
      if (typeof result.redirectTo === 'string') {  // Certifique-se de que é uma string
        window.location.href = result.redirectTo;
      } else {
        console.error("Redirecionamento inválido", result.redirectTo);
      }
    } else {
      alert(result.message || "Erro ao criar conta.");
    }
  });

  //DADOS DO USUARIO PARA LOGIN
  
  document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
      usuario: document.getElementById("usuario").value,
      senha: document.getElementById("senha").value,
    };

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);
    if (response.ok) {
      alert("Autenticado com sucesso");
      if (typeof result.redirectTo === 'string') {  // Certifique-se de que é uma string
        window.location.href = result.redirectTo;
      } else {
        console.error("Redirecionamento inválido", result.redirectTo);
      }
    } else {
      alert(result.message || "Erro ao autenticar.");
    }
  });

  
  window.onload = function() {
    fetch("/checkAuth")
      .then(response => response.json())
      .then(data => {
        if (data.isAuthenticated) {
          document.getElementById("loginLink").style.display = "none";
          document.getElementById("adminLink").style.display = "block";
        } else {
          document.getElementById("loginLink").style.display = "block";
          document.getElementById("adminLink").style.display = "none";
        }
      });
  };