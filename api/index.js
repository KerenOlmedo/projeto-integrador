const express = require("express");
const { Client } = require('pg');
const sequelize = require('./banco/database');
const Usuario = require("./banco/tabela");
const app = express();

app.use(express.json());


(async () => {
  const database = require('./banco/database');
  const Usuario = require('./banco/tabela');

  try {
    const resultado = await database.sync();
    console.log('mensagem que deu certo!!!');
  } catch (error) {
    console.log(error);
  }
})();


app.get('/user/:id', async (req, res) => {
  const { id } = req.params
  const usuarioEncontrado = await Usuario.findByPk(id)
  if (!usuarioEncontrado) {
    res.json({ message: 'Usuário não encontrado!' }).status(404)
  } else {
    res.json(usuarioEncontrado).status(200)
  }

});

app.post('/login', async (req, res) => {
  const login = req.body
  const usuarioEncontrado = await Usuario.findOne({
    where: {
      email: login.email
    }
  })
  if (!usuarioEncontrado) {
    res.json({ message: 'Usuário não encontrado!' }).status(404)
  }
  if (usuarioEncontrado.senha != login.senha) {
    res.json({ message: 'Senha inválida!!' }).status(404)
  }
  res.json({ id: usuarioEncontrado.id }).status(200)

});

app.post('/cadastro', async (req, res) => {
  const usuario = req.body
  const usuarioEncontrado = await Usuario.findOne({
    where: {
      email: login.email
    }
  })
  if (usuarioEncontrado) {
    res.json({ message: 'Email já cadastrado!' }).status(400)
  } else {
    await Usuario.create(usuario)
    res.json({ message: 'Usuário criado!' }).status(201);
  }

});

const port = 4000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} com sucesso!`);
});
