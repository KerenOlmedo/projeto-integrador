function login() {
  const senha = document.getElementById('senha').value
  const email = document.getElementById('email').value

  axios.post('http://localhost:4000/login', {
    senha,
    email
  })
    .then(function (response) {
      console.log(response);
      localStorage.setItem("userId", response.data.id)

      window.location.assign("/html/home.html")
    })
    .catch(function (error) {
      console.log(error);
      alert(error.response.data.message)
    });
}