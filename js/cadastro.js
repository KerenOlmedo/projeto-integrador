function cadastrar() {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const endereco = document.getElementById('endereço').value;
  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarsenha').value;
  const dataNascimento = document.getElementById('dia').value;

  axios.post('http://localhost:4000/cadastro', {
    nome,
    sobrenome,
    email,
    endereco,
    telefone,
    senha,
    confirmarSenha,
    dataNascimento,
  })
    .then(function (response) {
      console.log(response);
      window.location.assign("/html/login.html");
      alert('Cadastro realizado com sucesso!');
    })
    .catch(function (error) {
      console.log(error);
      alert(error.response.data.message);
    });
}
