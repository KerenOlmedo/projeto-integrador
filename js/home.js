async function home() {
  const id = localStorage.getItem("userId")
  await axios.get(`http://localhost:4000/user/${id}`)
    .then(function (response) {
      const {
        nome,
        sobrenome,
        email,
        endereco,
        telefone,
        dataNascimento,

      } = response.data
      document.getElementById('usuario').innerHTML = `
      <p>${nome} ${sobrenome}</p>
      <p>${email}</p>
      <p>${endereco}</p>
      <p>${telefone}</p>
      <p>${dataNascimento}</p>`

    })
    .catch(function (error) {
      console.log(error);
      alert(error.response.data.message)
    });
}