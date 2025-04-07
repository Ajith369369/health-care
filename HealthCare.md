https://github.com/Ajith369369/health-care.git

# **🔹 Full Folder Structure** │ ├── └──

📦 health-care/
│── 📂 backend/                          # 🎨 Backend (TypeScript + Express + MongoDB)
│   ├── 📂 src/
│   │   ├── 📂 config/                   # ✅ Environment Configs
│   │   │   └── 📄 Config.tsx       
│   │   │── 📂 domain/                   # ✅ Entities & Repository Interfaces
│   │   │   ├── 📂 models/               # ✅ Entities (Business Objects)
│   │   │   └── 📂 repositories/         # ✅ Repository Interfaces (Port)
│   │   │── 📂 infrastructure/           # ✅ MongoDB & Auth
│   │   │   ├── 📂 database/             # ✅ Database Connection & ORM
│   │   │   │   └── 📄 mongoConnection.ts
│   │   │   └── 📂 repositories/         # ✅ Implementation of Repositories (MongoDB, etc.)
│   │   │── 📂 interfaces/               # ✅ Adapters (controllers, middleware, routes)
│   │   │   ├── 📂 controllers/          # ✅ API Controllers (Express, GraphQL, etc.)
│   │   │   ├── 📂 middleware/           # ✅ Middleware (Auth, Logging, Error Handling)
│   │   │   └── 📂 routes/               # ✅ Routing Layer
│   │   │── 📂 use-cases/                # ✅ Business Logic/Application Services (Use Case Interactors)
│   │   └── 📄 server.ts                 # ✅ Express Server entry point
│   ├── 📄 .env                          # ✅ Environment Variables (Secrets, API Keys)
│   ├── 📄 .gitignore                    # ✅ Git ignore file
│   ├── 📄 package-lock.json             # ✅ Locks the exact versions of dependencies
│   ├── 📄 package.json                  # ✅ NPM Dependencies & Scripts
│   └── 📄 tsconfig.json                 
│── 📂 docs/                             # ✅ Additional architecture docs, diagrams
│── 📂 frontend/                         # 🎨 Frontend (React/Next.js + TypeScript)
│   ├── 📂 src/
│   │   ├── 📂 app/                      # ✅ Application Wrapper (for Next.js)
│   │   ├── 📂 config/                   # ✅ Environment Configs
│   │   │   └── 📄 Config.tsx            
│   │   ├── 📂 context/                  # ✅ Global Context
│   │   │   └── 📄 SocketContext.tsx     # ✅ Socket.io
│   │   ├── 📂 components/               # ✅ Shared UI Components
│   │   ├── 📂 modules/                  # ✅ Feature Modules (Hexagonal Approach)
│   │   │   ├── 📂 auth/                 # 🔹 User Authentication Module
│   │   │   │   ├── 📂 components/       # ✅ Reusable UI Components
│   │   │   │   ├── 📂 hooks/            # ✅ Custom Hooks
│   │   │   │   ├── 📂 routes/           # ✅ API Routes
│   │   │   │   ├── 📂 services/         # ✅ API Calls
│   │   │   │   ├── 📂 store/            # ✅ State Management (Redux/Context)
│   │   │   │   │   └── 📄 AuthSlice.ts  # ✅ Redux Slice
│   │   │   │   ├── 📂 pages/            # ✅ Pages
│   │   │   │   └── 📄 index.ts          # ✅ Exports everything
│   │   │   ├── 📂 admin/                # 🔹 Admin Module
│   │   │   │   ├── 📂 components/       # ✅ Reusable UI Components
│   │   │   │   ├── 📂 hooks/            # ✅ Custom Hooks
│   │   │   │   ├── 📂 routes/           # ✅ API Routes
│   │   │   │   ├── 📂 services/         # ✅ API Calls
│   │   │   │   ├── 📂 store/            # ✅ State Management (Redux/Context)
│   │   │   │   │   └── 📄 AdminSlice.ts # ✅ Redux Slice
│   │   │   │   ├── 📂 pages/            # ✅ Pages
│   │   │   │   └── 📄 index.ts          # ✅ Exports everything
│   │   │   ├── 📂 doctors/              # 🔹 Doctors Module
│   │   │   │   ├── 📂 components/       # ✅ Reusable UI Components
│   │   │   │   ├── 📂 hooks/            # ✅ Custom Hooks
│   │   │   │   ├── 📂 routes/           # ✅ API Routes
│   │   │   │   ├── 📂 services/         # ✅ API Calls
│   │   │   │   ├── 📂 store/            # ✅ State Management (Redux/Context)
│   │   │   │   │   └── 📄 DoctorSlice.ts # ✅ Redux Slice
│   │   │   │   ├── 📂 pages/            # ✅ Pages
│   │   │   │   └── 📄 index.ts          # ✅ Exports everything
│   │   │   └── 📂 users/                # 🔹 Users Module
│   │   │   │   ├── 📂 components/       # ✅ Reusable UI Components
│   │   │   │   ├── 📂 hooks/            # ✅ Custom Hooks
│   │   │   │   ├── 📂 routes/           # ✅ API Routes
│   │   │   │   ├── 📂 services/         # ✅ API Calls
│   │   │   │   ├── 📂 store/            # ✅ State Management (Redux/Context)
│   │   │   │   │   └── 📄 UserSlice.ts  # ✅ Redux Slice
│   │   │   │   ├── 📂 pages/            # ✅ Pages
│   │   │   │   └── 📄 index.ts          # ✅ Exports everything
│   │   ├── 📂 pages/                    # ✅ Route-based Pages
│   │   ├── 📂 routes/                   # ✅ App-level routing config
│   │   │   └── 📄 MainRouter.tsx        # ✅ Main Router
│   │   ├── 📂 services/                 # ✅ API Clients (REST/GraphQL)
│   │   │   ├── 📄 allAPI.ts             # ✅ Calls commonAPI.ts
│   │   │   └── 📄 commonAPI.ts          # ✅ Common logic used for calling APIs
│   │   ├── 📂 store/                    # ✅ State Management (Redux/Context)
│   │   │   ├── 📄 rootReducer.ts        # ✅ Root Reducer
│   │   │   └── 📄 store.ts              # ✅ Store
│   │   ├── 📂 styles/                   # ✅ Global Styles (CSS/SASS)
│   │   ├── 📂 utils/                    # ✅ Helper Functions
│   │   ├── 📄 App.css                   # ✅ Styles the App component and its child elements
│   │   ├── 📄 App.tsx                   # ✅ Main application file
│   │   ├── 📄 index.css                 # ✅ Defines global styles that apply across the entire app
│   │   ├── 📄 main.tsx                  
│   │   └── 📄 vite.config.ts           
│   ├── 📄 .gitignore                    # ✅ Git ignore file
│   ├── 📄 index.html                    # ✅ Entry point of the React app
│   ├── 📄 package-lock.json             # ✅ Locks the exact versions of dependencies
│   ├── 📄 package.json                  # ✅ NPM Dependencies & Scripts
│   ├── 📄 next.config.js                # ✅ Next.js Config
│   └── 📄 vite.config.js                # ✅ Vite Config (if using Vite)
├── 📂 k8s/                              # ✅ Kubernetes Manifests
│   ├── 📂 backend/
│   │   ├── user-deployment.yaml
│   │   └── booking-deployment.yaml
│   ├── 📂 frontend/
│   │   └── frontend-deployment.yaml
│   └── 📂 ingress/
│       └── ingress.yaml
│── 📄 docker-compose.yml                # ✅ Docker compose for orchestration
└── 📄 README.md                         # ✅ Project documentation

