<h1 align="center"> Projeto Integrador parte II </h1>
<h3 align="center"> POC baseada em uma jornada do projeto</h3>

## 👥 Integrantes do grupo

- Camila Zambanini Diniz
- Felipe Santos de Araújo
- João Lázaro Oliveira dos Santos
- Kéren dos Santos Olmedo
- Matheus Augusto Soares
  <br>

## 💻 Proposta

- Revisitar o projeto apresentado e definir qual será a
  prova de conceito que precisa ser desenvolvida.
- Preparação do ambiente de desenvolvimento do
  projeto (seleção de tecnologias de frontend, backend e
  banco de dados).
- Desenvolvimento do frontend do projeto.
- Desenvolvimento do backend do projeto (com
  repositório de dados associado).
- Vídeo de no máximo 1 minuto apresentando o projeto
  concluído.
  <br>

## 📝 Instruções de Execução

#### Pré-requisitos:

Node.js: Certifique-se de ter o Node.js instalado no seu sistema. Você pode baixá-lo em https://nodejs.org.
Docker e Docker Compose: Instale o Docker e o Docker Compose no seu sistema. Você pode baixá-los em https://www.docker.com/.

- Clone o projeto do GitHub ou copie os arquivos do seu projeto para o seu ambiente local.
- Navegue até o local da pasta "api".

```
cd api
```

- Inicie o Contêiner PostgreSQL:
  No terminal, navegue até o diretório onde você criou o arquivo docker-compose.yml e execute:

```
docker-compose up -d
```

- Instale as Dependências do Projeto:
  No diretório do seu projeto Node.js, execute:

```
npm install
```

- Execute o Projeto:
  No mesmo diretório do seu projeto Node.js, execute:

```
node index.js
```

Isso iniciará o servidor Express e tentará conectar-se ao banco de dados PostgreSQL.

- Verifique se o Projeto está Funcionando:
  Abra um navegador ou use uma ferramenta como Postman para fazer solicitações ao seu servidor Express em http://localhost:4000 e veja se está respondendo corretamente.
- Encerre o Projeto e o Contêiner:
  Quando você terminar de usar o projeto, pare o servidor Node.js pressionando Ctrl + C no terminal. Em seguida, pare o contêiner PostgreSQL com:

```
docker-compose down
```

Isso encerrará o contêiner, mas os dados do banco de dados PostgreSQL serão preservados no volume criado.

<br>
