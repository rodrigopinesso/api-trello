
# 📋 Task API — API REST de Gerenciamento de Tarefas

Uma API completa para gerenciamento de tarefas (estilo Trello simplificado), com autenticação JWT, roles (`user`, `admin`, `moderator`), estrutura em camadas, DTOs e MongoDB.

---
## Aluno
- Rodrigo Yaedu Pinesso RA:22014201-2
---

---
## Link do vídeo no YouTube
- https://www.youtube.com/watch?v=DqoHH65bEgg&ab_channel=RodrigoPinesso
---

## 🚀 Tecnologias

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT (JSON Web Tokens)**
- **Bcrypt**
- **Dotenv**
- **Estrutura MVC + Camadas**

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/trello-api.git
cd trello-api
npm install
```

Crie um arquivo `.env`:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/task-api
JWT_SECRET=sua_chave_super_secreta
```

Inicie o servidor:

```bash
npm run dev
```

---

## 📌 Funcionalidades

- Registro e login com JWT
- CRUD de tarefas por usuário autenticado
- Proteção de rotas por token
- Perfis com roles (`user`, `admin`, `moderator`)
- Acesso administrativo para listar, editar e remover usuários
- Atualização de perfil pessoal

---

## 🔐 Autenticação

### 📍 POST /auth/register

Cria um novo usuário.

**Body:**

```json
{
  "username": "admin1",
  "password": "123456",
  "role": "admin" // opcional (user | admin | moderator)
}
```

### 📍 POST /auth/login

Gera um token JWT.

**Body:**

```json
{
  "username": "admin1",
  "password": "123456"
}
```

**Resposta:**

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "...",
    "username": "admin1",
    "role": "admin"
  }
}
```

---

## 📝 Tarefas (Autenticado)

**Header obrigatório:**  
`Authorization: Bearer JWT_TOKEN`

### 📍 POST /tasks

Cria uma nova tarefa.

```json
{
  "title": "Estudar Node.js",
  "description": "Compreender autenticação JWT"
}
```

### 📍 GET /tasks

Lista todas as tarefas do usuário autenticado.

### 📍 PATCH /tasks/:id/status

Atualiza o status da tarefa.

```json
{
  "status": "em andamento" // pendente | em andamento | concluída
}
```

### 📍 DELETE /tasks/:id

Deleta a tarefa informada.

---

## 👤 Usuário (Autenticado)

### 📍 GET /users/me

Retorna o perfil do usuário logado.

### 📍 PUT /users/me

Atualiza seu próprio perfil.

```json
{
  "username": "novonome",
  "password": "novasenha"
}
```

---

## 🔐 Admin/Moderador

**Header obrigatório:**  
`Authorization: Bearer JWT_TOKEN_ADMIN`

### 📍 GET /users

Lista todos os usuários (admin e moderator).

### 📍 GET /users/:id

Retorna dados de um usuário pelo ID (somente admin).

### 📍 PUT /users/:id

Atualiza qualquer usuário (somente admin).

```json
{
  "username": "usuarioEditado",
  "role": "moderator"
}
```

### 📍 DELETE /users/:id

Deleta qualquer usuário (somente admin).

---

## 🧪 Teste com Token

Use o token retornado pelo login em todos os endpoints protegidos:

```
Authorization: Bearer SEU_TOKEN_JWT
```

---

## ✅ Estrutura de Pastas

```
src/
├── controllers/
├── dtos/
├── middlewares/
├── models/
├── routes/
├── services/
├── config/
└── server.js
```

---

## 🛡️ Roles

| Role       | Permissões                              |
|------------|------------------------------------------|
| user       | Gerencia suas tarefas e perfil           |
| moderator  | Pode ver todos os usuários               |
| admin      | Pode ver, editar e deletar qualquer user |

---
