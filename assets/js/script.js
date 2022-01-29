const form = document.getElementById('form')
const email = document.getElementById('email')
const nomecompleto = document.getElementById('nomecompleto')
const idade = document.getElementById('idade')
const telefone = document.getElementById('telefone')
const usuario = document.getElementById('usuario')
const senha = document.getElementById('senha')
const senha2 = document.getElementById('senha2')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  chenckInputs();
});

function chenckInputs() {
  const emailValue = email.value.trim();
  const nomeValue = nomecompleto.value.trim();
  const idadeValue = idade.value.trim();
  const telefoneValue = telefone.value.trim();
  const usuarioValue = usuario.value.trim();
  const senhaValue = senha.value.trim();
  const senha2Value = senha2.value.trim();

  if (emailValue === '') {
    setErrorFor(email, "Email invalido");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input) {
  const formulario = input.parentElement;
}
