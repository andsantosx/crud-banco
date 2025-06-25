# Sistema de Gerenciamento Hoteleiro

Este é um sistema de gerenciamento hoteleiro desenvolvido com React (frontend) e Node.js (backend) com o Framework Express.js, utilizando PostgreSQL como banco de dados.

## Alunos:
- Anderson da Silva dos Santos
- Gabriel Pagnam
- Gabriel Minatto

## Funcionalidades

- Gerenciamento de Clientes (CRUD)
- Gerenciamento de Quartos (CRUD)
- Gerenciamento de Reservas (CRUD)
- Interface responsiva com Material-UI
- API RESTful com Express.js

## Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)
- NPM ou Yarn

## Configuração do Banco de Dados PostgreSQL Localmente

Para que o backend possa se conectar ao banco de dados e as operações de CRUD funcionem, é essencial configurar o PostgreSQL localmente:

1.  **Instale o PostgreSQL:** Certifique-se de ter o PostgreSQL instalado e rodando em sua máquina local. Você pode baixá-lo do site oficial do PostgreSQL.
2.  **Crie o Banco de Dados `hotel`:** Abra uma ferramenta de gerenciamento de PostgreSQL (como `pgAdmin` ou use o terminal `psql`) e crie um novo banco de dados com o nome `hotel`.
3.  **Execute o `database.sql`:** Este arquivo contém os comandos SQL para criar as tabelas necessárias (`clientes`, `quartos`, `reservas`). No `pgAdmin`, você pode abrir uma Query Tool e executar o conteúdo do arquivo `database.sql`. No `psql`, você pode fazer:
    ```bash
    psql -U seu_usuario_postgres -d hotel -f database.sql
    ```
    Substitua `seu_usuario_postgres` pelo seu usuário do PostgreSQL (geralmente `postgres`) e certifique-se de estar no diretório raiz do projeto onde `database.sql` está localizado.
4.  **Crie e Configure o arquivo `.env` no Backend:** Na pasta `backend` do projeto (`crud-banco/backend/`), crie um arquivo chamado `.env`. Este arquivo **NÃO DEVE** ser enviado para o controle de versão (Git) por conter informações sensíveis. Adicione as seguintes variáveis, substituindo os valores com suas credenciais do PostgreSQL:

    ```env
    PORT=5432
    DB_USER=seu_usuario_postgres
    DB_HOST=localhost
    DB_NAME=nome_do_banco
    DB_PASSWORD=sua_senha_do_postgres
    DB_PORT=5432
    ```

## Instalação do Projeto

1.  Clone o repositório (se ainda não o fez):
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd crud-banco # Ou o nome da sua pasta raiz do projeto
    ```
2.  Instale as dependências do backend:
    ```bash
    cd backend
    npm install
    ```
3.  Instale as dependências do frontend:
    ```bash
    cd ../frontend
    npm install
    ```

## Executando o Projeto

1.  **Inicie o backend:**
    Abra um terminal, navegue até a pasta `backend` e execute:
    ```bash
    npm run dev
    ```
    Você deverá ver a mensagem "Conectado ao banco de dados com sucesso!" e "Servidor rodando na porta 3001".

2.  **Inicie o frontend:**
    Abra **outro terminal**, navegue até a pasta `frontend` e execute:
    ```bash
    npm run dev
    ```
    Você deverá ver a mensagem "VITE [...] ready in [...] ms" e o endereço `http://localhost:5173/`.

3.  Acesse o sistema no seu navegador: `http://localhost:5173`
