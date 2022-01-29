const form = document.getElementById("meuFormulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("meu event:", event);

  chenckInputs();
});

function chenckInputs() {
  const email = document.getElementById("email");
  const nome = document.getElementById("nome");
  const idade = document.getElementById("idade");
  const telefone = document.getElementById("telefone");
  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");
  const confirmacao_senha = document.getElementById("confirmacao_senha");

  const emailValue = email.value.trim();
  const nomeValue = nome.value.trim();
  const idadeValue = idade.value.trim();
  const telefoneValue = telefone.value.trim();
  const usuarioValue = usuario.value.trim();
  const senhaValue = senha.value.trim();
  const confirmacaoSenhaValue = confirmacao_senha.value.trim();

  if (emailValue === "") {
    alert('Email é obrigatório!');
    return false;
  }

  if (nomeValue === "") {
    alert('Nome é obrigatório!');
    return false;
  }

  if (idadeValue === "") {
    alert('Idade é obrigatório!')
  }

  if (telefoneValue === "") {
    alert('Idade é obrigatório!')
  }

  if (usuarioValue === "") {
    alert('Idade é obrigatório!')
  }

  if (senhaValue === "") {
    alert('Idade é obrigatório!')
  }

  if (confirmacaoSenhaValue === "") {
    alert('Idade é obrigatório!')
  }

  // Caso sucesso (Todos campos preenchidos)
  alert('Dados enviados com sucesso! Parabéns amigo!');
  console.log(
    'Dados enviados com sucesso:',
    'Email:', emailValue,
    'Nome:', nomeValue,
    'Idade:', idadeValue,
    'Telefone:', telefoneValue,
    'Usuario:', usuarioValue,
    'Senha:', senhaValue,
    'Confirmação Senha:', confirmacaoSenhaValue,
  );
  return true;
}
