const express = require("express");
const { Client } = require('pg');
const sequelize = require('./banco/database');
const Usuario = require("./banco/tabela");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*'
}));


(async () => {
  const database = require('./banco/database');
  const Usuario = require('./banco/tabela');

  try {
    const resultado = await database.sync();
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
  const { email, senha } = req.body
  console.log(email, senha);
  if (!email || !senha) {
    return res.status(404).json({ message: 'Preencha os campos!' })
  }
  const usuarioEncontrado = await Usuario.findOne({
    where: {
      email
    }
  })
  if (!usuarioEncontrado) {
    return res.status(404).json({ message: 'Usuário não encontrado!' })
  }
  if (usuarioEncontrado.senha != senha) {
    return res.status(404).json({ message: 'Senha inválida!' })
  }
  return res.status(200).json({ id: usuarioEncontrado.id })

});


app.post('/cadastro', async (req, res) => {
  const usuario = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({
      where: {
        email: usuario.email
      }
    });

    if (usuarioExistente) {
      return res.status(400).json({ message: 'Email já cadastrado!' });
    }

    const novoUsuario = await Usuario.create(usuario);
    return res.status(201).json({ message: 'Usuário criado com sucesso!', id: novoUsuario.id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port} com sucesso!`);
});
