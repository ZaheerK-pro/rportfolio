# Personal Portfolio

## Description
A simple Personal porfolio web application

## Instructions to Run Locally

### Frontend
1. Clone the repository:
   ```bash
   git clone https://github.com/ZaheerK-pro/My-Portfolio.git
   cd rportfolio
   ```
2. Install and run:
   ```bash
   npm install
   npm run dev
   ```
3. (Optional) Create `.env` from `.env.example` and set `VITE_API_BASE_URL` if the API runs on a different URL.

### Backend (Node.js + Fastify + TypeORM + PostgreSQL)
1. Install PostgreSQL and create a database (e.g. `portfolio`).
2. In the project root:
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
   npm install
   npm run dev
   ```
3. API base URL: `http://localhost:3001/api`. Contact form sends messages to `POST /api/messages`.

## Hosted Version
You can access the live version of the app [here](https://zaheerk.vercel.app/).

## Author
Zaheer Khan <br>
Developer - Zaheer Khan <br>
LinkedIn - www.linkedin.com/in/zaheerk1 <br>
Portfolio - https://zaheerkhan.netlify.app <br>
Instagram - www.instagram.com/im__zaheerk <br>

