# Contact Management App

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form + Zod
- **State Management**: React Context API + TanStack Query
- **Backend**: JSON Server (mock REST API)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- **Bun** (recommended) OR
- **Node.js** (v16 or higher) with npm/pnpm/yarn

### Installation & Setup

1. **Install dependencies:**

```bash
bun install
# npm install
# pnpm install
# yarn install
```

2. **Start development server:**

```bash
bun dev
# npm run dev
# pnpm run dev
# yarn dev
```

This will start two servers concurrently:

- **Vite Dev Server**: `http://localhost:8080` (Frontend)
- **JSON Server**: `http://localhost:5000` (Mock API)

3. **Build for production:**

```bash
bun build
# npm run build
# pnpm run build
# yarn build
```

4. **Preview production build:**

```bash
bun preview
# npm run preview
# pnpm run preview
# yarn preview
```

### Additional Commands

- **Run only Vite server**: `bun dev:vite` (or npm/pnpm/yarn)
- **Run only JSON server**: `bun dev:db` (or npm/pnpm/yarn)
- **Run linting**: `bun lint` (or npm/pnpm/yarn)
- **Run formatting**: `bun format` (or npm/pnpm/yarn)

### Database

Contact data is stored in `data/db.json` file.
