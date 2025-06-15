# EstOkay 🌟

Repositório monorepo contendo a **API (backend)** em NestJS e o **front-end** em React + TypeScript para a plataforma EstOkay: um sistema de autenticação e relatórios para voluntariado.

---

## 📁 Estrutura do projeto

```plaintext
EstOkay/
├── backend/             # API NestJS
│   ├── src/
│   ├── test/
│   ├── .env.example
│   ├── nest-cli.json
│   ├── tsconfig.json
│   └── package.json
├── frontend/            # Cliente React/TypeScript
│   ├── src/
│   ├── public/
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
└── README.md            # Você está aqui ;)
```

## Visão geral

### Backend:
- NestJS + TypeORM + JWT + bcrypt + Mailer
- Funcionalidades: login/logout via cookies, sessão, reset de senha, CRUD de relatórios

### Frontend:
- React + TypeScript + React Router
- Hooks para sessão (sessionLogin, sessionLogout)
- Componente de layout com sidebar, header
- Comunicação com API via fetch, incluindo credenciais (cookies)

## Tecnologias

Parte	Tecnologias principais
- Backend	NestJS · TypeScript · TypeORM · PostgreSQL/MySQL · JWT · bcrypt · nodemailer
- Frontend	React · TypeScript · React Router v6 · CSS (Tailwind ou similar)

## Como executar o projeto

### Backend (API)
cd backend
cp .env.example .env
### Ajuste variáveis: DB_URL, JWT_SECRET, MAIL_HOST, etc.
npm install          # ou yarn install
npm run start:dev    # modo desenvolvimento (hot-reload)

### Frontend (cliente)
cd frontend
cp .env.example .env
### Ajuste: REACT_APP_API_URL=http://localhost:3000/api
npm install
npm start

## Scripts úteis

### Backend
- npm run start:dev – inicia em dev com ts-node-dev
- npm run build – gera dist/
- npm run test – executa testes (se houver)

### Frontend
- npm start – inicia dev server
- npm run build – gera build otimizado
- npm run lint – executa ESLint
- npm run format – executa Prettier
