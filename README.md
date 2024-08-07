# Sistema de Gerenciamento de Biblioteca

### Funcionalidades do Sistema de Gerenciamento de Biblioteca

### 1. Cadastro de Livros

- **CRUD de Livros**: Permita que os administradores adicionem, editem, visualizem e excluam livros. ✅
- **Upload de Capas de Livros**: Upload de imagens para um bucket S3, leitura das imagens e possibilidade de deletar imagens. ✅

### 2. Cadastro de Autores

- **CRUD de Autores**: Permita que os administradores gerenciem os autores dos livros. ✅

### 3. Gerenciamento de Categorias

- **CRUD de Categorias**: Permita que os administradores gerenciem categorias de livros. ✅

### 4. Sistema de Empréstimo de Livros

- **Registro de Empréstimos**: Usuários podem pegar livros emprestados e devolvê-los. ✅
- **Histórico de Empréstimos**: Mantenha um registro dos empréstimos passados. (User - Book) ✅

### 5. Autenticação e Autorização

- **Cadastro e Login de Usuários**: Implemente o registro e login de usuários utilizando OAuth2. ✅
- **Papéis de Usuário**: Diferencie entre administradores e usuários regulares, com permissões distintas. ✅

### 6. Sistema de Notificações

- **Notificações por Email**: Notifique usuários sobre prazos de devolução e novas adições à biblioteca utilizando Nodemailer. ✅

### 7. Pesquisa e Filtros

- **Pesquisa de Livros**: Permita que os usuários busquem livros por título, autor ou categoria. ✅

Tecnologias e ferramentas

- NodeJS - Fastify
- Login com Google - (Live JStack)
- Docker → Docker-compose
- Postgres (Prisma ORM)
- Nodemailer
- Autenticação JWT - (jsonwebtoken)
- Validações - (Zod)
- Multer OU S3 - (Live JStack)

<!-- FIXES -->
