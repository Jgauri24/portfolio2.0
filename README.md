# Gauri Jindal - Portfolio

A unique, "Code Editor" themed portfolio website built with React, Node.js, and MongoDB.

## Features

- **Code Editor Theme**: Looks and feels like a modern IDE with syntax highlighting, tabs, and file explorer.
- **Full Stack**: Express backend with MongoDB for storing projects and contact from submissions.
- **Dynamic Content**: Skills and projects are rendered from data/backend.
- **Contact Form**: Functional contact form with email notifications.

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (optional, for persistent data)

### Installation

1. **Clone the repository** (if not already local)

2. **Install dependencies**

   ```bash
   # Root (Frontend)
   npm install

   # Backend
   cd backend
   npm install
   cd ..
   ```

3. **Configuration**

   Create a `.env` file in `backend/` based on `.env.example`.
   ```bash
   cp backend/.env.example backend/.env
   ```

### Running the App

You need to run both the frontend and backend servers.

1. **Start Backend**
   ```bash
   cd backend
   npm run dev
   ```
   Runs on `http://localhost:5001`.

2. **Start Frontend** (in a new terminal)
   ```bash
   npm run dev
   ```
   Runs on `http://localhost:5173`.

## Deployment

### Frontend (Vercel)
1. Push your code to GitHub.
2. Connect your repository to [Vercel](https://vercel.com).
3. Set the build command to `npm run build` and the output directory to `dist`.

### Backend (Render)
1. Connect your repository to [Render](https://render.com).
2. Create a "Web Service".
3. Add the environment variables from `.env.example` to the Render dashboard.

## Structure

- `src/`: Frontend React application
  - `components/`: Core components (Hero, About, Projects, etc.)
  - `index.css`: The heart of the design system (CSS Variables, Animations)
- `backend/`: Node.js Express server
  - `models/`: Mongoose schemas
  - `routes/`: API endpoints
  - `server.js`: Entry point
# portfolio2.0
# portfolio2.0
