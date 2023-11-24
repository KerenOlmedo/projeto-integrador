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

_Node.js:_ Certifique-se de ter o Node.js instalado no seu sistema. Você pode baixá-lo em https://nodejs.org.
_Docker e Docker Compose:_ Instale o Docker e o Docker Compose no seu sistema. Você pode baixá-los em https://www.docker.com/.

- Clone o projeto do GitHub ou copie os arquivos do projeto para o seu ambiente local.
- Navegue até o local da pasta "api" pelo terminal ja no projeto.

```
cd api
```

- Inicie o Contêiner PostgreSQL:
  Já na pasta api, onde está o arquivo docker-compose.yml, execute:

```
docker-compose up -d
```

- Instale as Dependências do Projeto executando:

```
npm install
```

- Execute o Projeto com o comando:

```
node index.js
```

Isso iniciará o servidor Express e tentará conectar-se ao banco de dados PostgreSQL.

#### Acesso a aplicação

- Despois de realizar os passos anterioes, vá até a pasta local onde você clonou o repositorio do projeto, na pasta html estão todas as páginas. Abra a página incial para navegar na aplicação.
  exemplo de caminho:

```
Pasta local + /projeto-integrador/html/inicial.html
```

- Caso queira verificar se o Projeto está funcionando:
  Abra um navegador ou use uma ferramenta Insomnia para fazer solicitações ao servidor Express em http://localhost:4000 e veja se está respondendo corretamente.
- Encerre o Projeto e o Contêiner:
  Quando você terminar de usar o projeto, pare o servidor Node.js pressionando Ctrl + C no terminal. Em seguida, pare o contêiner PostgreSQL com:

```
docker-compose down
```

Isso encerrará o contêiner, mas os dados do banco de dados PostgreSQL serão preservados no volume criado.

<br>
