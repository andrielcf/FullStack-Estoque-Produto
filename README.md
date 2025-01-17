# Sistema de Cadastro de Estoque

Este repositório contém uma aplicação para gerenciamento de estoque de produtos. O sistema permite que os usuários consultem, adicionem, atualizem e excluam produtos do estoque. Ele é dividido em duas partes principais: um backend em **Django** (com **Django REST Framework** para a criação de uma API) e um frontend em **React**.

## Funcionalidades
- **Consulta de produtos**: Exibe uma lista com todos os produtos cadastrados no estoque.
- **Cadastro de produtos**: Permite adicionar novos produtos, com os seguintes campos:
  - Nome
  - Descrição
  - Quantidade em estoque
  - Preço
- **Edição de produtos**: Permite atualizar as informações de produtos já cadastrados.
- **Exclusão de produtos**: Permite excluir produtos do estoque.

## Tecnologias
- **Backend**:
  - Django
  - Django REST Framework
  - MySQL
- **Frontend**:
  - React
  - Axios (para comunicação com a API)

## Como Rodar a Aplicação

### Backend (Django)

1. Clone o repositório:
    ```bash
    git clone https://github.com/andrielcf/FullStack-Estoque-Produto.git
    cd FULLSTACK-ESTOQUE-PRODUTOS
    ```

2. Configure o banco de dados (MySQL):
   - Crie um banco de dados no MySQL para o projeto.
   - Atualize as configurações de banco de dados no arquivo `/estoque/estoque/settings.py`.

5. Rode as migrações para criar as tabelas no banco de dados:
    ```bash
    python manage.py migrate
    ```

6. Inicie o servidor do Django:
    ```bash
    python BACKEND-ESTOQUE-PRODUTOS/estoque/manage.py runserver
    ```
   A API estará disponível em `http://127.0.0.1:8000`.

### Frontend (React)

1. Navegue até o diretório do frontend:
    ```bash
    cd FRONT-ESTOQUE-PRODUTOS/estoque-frontend
    ```

2. Instale as dependências do frontend:
    ```bash
    npm install
    ```

3. Inicie o servidor do React:
    ```bash
    npm run dev
    ```

   O frontend estará disponível em `http://localhost:5173`.

### Interação Entre Frontend e Backend

O frontend React se comunica com o backend Django através de uma API RESTful. As requisições feitas pelo React (usando Axios) para adicionar, editar, excluir e consultar produtos são tratadas pelo Django REST Framework, que manipula os dados no banco MySQL.

### Endpoints da API
- **GET /api/produtos/**: Retorna a lista de produtos.
- **POST /api/produtos/**: Adiciona um novo produto.
- **PUT /api/produtos/{id}/**: Atualiza um produto existente.
- **DELETE /api/produtos/{id}/**: Exclui um produto.
