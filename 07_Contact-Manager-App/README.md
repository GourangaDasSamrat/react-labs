## 🛠 Tech Stack

## Live preview
Click [here](https://contact-manager-pi-five.vercel.app) to see hosted version of this lab.

### Frontend (Client)

* React 18 + TypeScript
* Vite
* React Router DOM
* Tailwind CSS
* shadcn/ui (Radix UI)
* React Hook Form + Zod
* TanStack Query
* Lucide React
* Hosted on Vercel

### Backend (Server)

* JSON Server (Mock REST API)
* Node.js
* Hosted on Render

---

## 🚀 Getting Started (Local Development)

### Prerequisites

* **Node.js v18+**
* **Bun (optional, recommended for frontend)**

---

## 📦 Installation (IMPORTANT)

⚠️ **Client and Server dependencies must be installed separately**

---

###  Install Client Dependencies

```bash
cd client
bun install
# or
npm install
```

---

###  Install Server Dependencies

```bash
cd server
npm install
```

> ⚠️ Backend uses **Node.js (npm)** for better compatibility with Render.

---

## ▶ Running the Project Locally

### Start Backend (JSON Server)

```bash
cd server
npm start
```

Backend will run at:

```
http://localhost:3000
```

---

### Start Frontend (Vite)

Open a new terminal:

```bash
cd client
bun dev
# or
npm run dev
```

Frontend will run at:

```
http://localhost:8080
```

---

##  API Endpoints

```http
GET     /contacts
GET     /contacts/:id
POST    /contacts
PUT     /contacts/:id
PATCH   /contacts/:id
DELETE  /contacts/:id
```

---

## 🗄 Database

Contact data is stored in:

```
server/db/db.json
```

> ⚠️ Note:
> On Render (free plan), the database is **not persistent**.
> Data may reset on redeploy or service restart.

---

##  Build for Production (Frontend)

```bash
cd client
bun build
# or
npm run build
```

---

##  Notes & Limitations

* JSON Server is used for **mock / demo / assignment purposes**
* Not intended for production-grade backend
* Render free tier may have **cold start delay (15–30 seconds)**
