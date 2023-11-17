const express = require("express");
const { Client } = require('pg');
const app = express();

app.use(express.json());

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'postgres',
  password: '123456',
  port: 5432
});

client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 com sucesso!");
});
