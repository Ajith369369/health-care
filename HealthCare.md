https://github.com/Ajith369369/health-care.git

# **🔹 Full Folder Structure** │ ├── └──

```
📦 health-care/                         
│── 📂 backend/
└── 📂 frontend/  

📦 health-care/
├── 📂 .github/                           # ✅ CI/CD workflows
│── 📂 backend/                           # 🎨 Backend (TypeScript + Express + MongoDB)
│   ├── 📂 booking-service/               # 🔹 Microservice 1 (Clean + Hexagonal)
│   │   ├── 📂 src/
│   │   │   ├── 📂 application/           # ✅ Use Cases & Business Logic
│   │   │   │   └── 📂 use-cases/         # ✅ Business Logic/Application Services (Use Case Interactors)
│   │   │   ├── 📂 domain/                # ✅ Entities, Repository Interfaces & Value Objects
│   │   │   │   ├── 📂 models/            # ✅ Entities (Business Objects)
│   │   │   │   └── 📂 repositories/      # ✅ Repository Interfaces (Port)
│   │   │   ├── 📂 infrastructure/        # ✅ Adapters & External Services
│   │   │   │   ├── 📂 config/            # ✅ Environment configuration
│   │   │   │   │   └── 📄 Config.ts       
│   │   │   │   ├── 📂 database/          # ✅ MongoDB implementation
│   │   │   │   │   └── 📄 mongoConnection.ts
│   │   │   │   ├── 📂 http/              # ✅ Express controllers/routes
│   │   │   │   └── 📂 repositories/      # ✅ MongoDB repository implementations
│   │   │   │── 📂 adapters/              # ✅ Ports & Adapters (controllers, middleware, routes)
│   │   │   │   ├── 📂 controllers/       # ✅ API Controllers (Express, GraphQL, etc.)
│   │   │   │   ├── 📂 middleware/        # ✅ Middleware (Auth, Logging, Error Handling)
│   │   │   │   └── 📂 routes/            # ✅ Routing Layer
│   │   │   └── 📄 index.ts               # ✅ Service entry point
│   │   └── 📄 Dockerfile
│   ├── 📂 user-service/                  # 🔹 Microservice 2 (Clean + Hexagonal)
│   │   ├── 📂 src/
│   │   │   ├── 📂 application/           # ✅ Use Cases & Business Logic
│   │   │   │   └── 📂 use-cases/         # ✅ Business Logic/Application Services (Use Case Interactors)
│   │   │   ├── 📂 domain/                # ✅ Entities, Repository Interfaces & Value Objects
│   │   │   │   ├── 📂 models/            # ✅ Entities (Business Objects)
│   │   │   │   └── 📂 repositories/      # ✅ Repository Interfaces (Port)
│   │   │   ├── 📂 infrastructure/        # ✅ Adapters & External Services
│   │   │   │   ├── 📂 config/            # ✅ Environment configuration
│   │   │   │   │   └── 📄 Config.ts      
│   │   │   │   ├── 📂 database/          # ✅ MongoDB implementation
│   │   │   │   │   └── 📄 mongoConnection.ts
│   │   │   │   ├── 📂 http/              # ✅ Express controllers/routes
│   │   │   │   └── 📂 repositories/      # ✅ MongoDB repository implementations
│   │   │   │── 📂 adapters/              # ✅ Ports & Adapters (controllers, middleware, routes)
│   │   │   │   ├── 📂 controllers/       # ✅ API Controllers (Express, GraphQL, etc.)
│   │   │   │   ├── 📂 middleware/        # ✅ Middleware (Auth, Logging, Error Handling)
│   │   │   │   └── 📂 routes/            # ✅ Routing Layer
│   │   │   └── 📄 index.ts               # ✅ Service entry point
│   │   └── 📄 Dockerfile
│   ├── 📂 appointment-service/           # 🔹 Microservice 3 (Clean + Hexagonal)
│   ├── 📂 auth-service/                  # 🔹 Microservice 4 (Clean + Hexagonal)
│   ├── 📂 doctor-service/                # 🔹 Microservice 5 (Clean + Hexagonal)
│   ├── 📄 .env                           # ✅ Environment Variables (Secrets, API Keys)
│   ├── 📄 .gitignore                     # ✅ Git ignore file
│   ├── 📄 package-lock.json              # ✅ Locks the exact versions of dependencies
│   ├── 📄 package.json                   # ✅ NPM Dependencies & Scripts
│   └── 📄 tsconfig.json                 
│── 📂 docs/                              # ✅ Additional architecture docs, diagrams
│   ├── 📄 ADRs/                          # ✅ Architecture Decision Records
│   └── 📄 diagrams/                      # ✅ Architecture diagrams
│── 📂 frontend/                          # 🎨 Frontend (React/Next.js + TypeScript)
│   ├── 📂 src/ 
│   │   ├── 📂 app/                       # ✅ Application Wrapper (for Next.js)
│   │   ├── 📂 config/                    # ✅ Environment Configs
│   │   │   └── 📄 Config.tsx             
│   │   ├── 📂 context/                   # ✅ Global Context
│   │   │   └── 📄 SocketContext.tsx      # ✅ Socket.io
│   │   ├── 📂 components/                # ✅ Shared UI Components
│   │   ├── 📂 modules/                   # ✅ Feature Modules (Hexagonal Approach)
│   │   │   ├── 📂 auth/                  # 🔹 User Authentication Module
│   │   │   │   ├── 📂 components/        # ✅ Reusable UI Components
│   │   │   │   ├── 📂 hooks/             # ✅ Custom Hooks
│   │   │   │   ├── 📂 routes/            # ✅ API Routes
│   │   │   │   ├── 📂 services/          # ✅ API Calls
│   │   │   │   ├── 📂 store/             # ✅ State Management (Redux/Context)
│   │   │   │   │   └── 📄 AuthSlice.ts   # ✅ Redux Slice
│   │   │   │   ├── 📂 pages/             # ✅ Pages
│   │   │   │   └── 📄 index.ts           # ✅ Exports everything
│   │   │   ├── 📂 admin/                 # 🔹 Admin Module
│   │   │   │   ├── 📂 components/        # ✅ Reusable UI Components
│   │   │   │   ├── 📂 hooks/             # ✅ Custom Hooks
│   │   │   │   ├── 📂 routes/            # ✅ API Routes
│   │   │   │   ├── 📂 services/          # ✅ API Calls
│   │   │   │   ├── 📂 store/             # ✅ State Management (Redux/Context)
│   │   │   │   │   └── 📄 AdminSlice.ts  # ✅ Redux Slice
│   │   │   │   ├── 📂 pages/             # ✅ Pages
│   │   │   │   └── 📄 index.ts           # ✅ Exports everything
│   │   │   ├── 📂 doctors/               # 🔹 Doctors Module
│   │   │   │   ├── 📂 components/        # ✅ Reusable UI Components
│   │   │   │   ├── 📂 hooks/             # ✅ Custom Hooks
│   │   │   │   ├── 📂 routes/            # ✅ API Routes
│   │   │   │   ├── 📂 services/          # ✅ API Calls
│   │   │   │   ├── 📂 store/             # ✅ State Management (Redux/Context)
│   │   │   │   │   └── 📄 DoctorSlice.ts # ✅ Redux Slice
│   │   │   │   ├── 📂 pages/             # ✅ Pages
│   │   │   │   └── 📄 index.ts           # ✅ Exports everything
│   │   │   └── 📂 users/                 # 🔹 Users Module
│   │   │   │   ├── 📂 components/        # ✅ Reusable UI Components
│   │   │   │   ├── 📂 hooks/             # ✅ Custom Hooks
│   │   │   │   ├── 📂 routes/            # ✅ API Routes
│   │   │   │   ├── 📂 services/          # ✅ API Calls
│   │   │   │   ├── 📂 store/             # ✅ State Management (Redux/Context)
│   │   │   │   │   └── 📄 UserSlice.ts   # ✅ Redux Slice
│   │   │   │   ├── 📂 pages/             # ✅ Pages
│   │   │   │   └── 📄 index.ts           # ✅ Exports everything
│   │   ├── 📂 pages/                     # ✅ Route-based Pages
│   │   ├── 📂 routes/                    # ✅ App-level routing config
│   │   │   └── 📄 MainRouter.tsx         # ✅ Main Router
│   │   ├── 📂 services/                  # ✅ API Clients (REST/GraphQL)
│   │   │   ├── 📄 allAPI.ts              # ✅ Calls commonAPI.ts
│   │   │   └── 📄 commonAPI.ts           # ✅ Common logic used for calling APIs
│   │   ├── 📂 store/                     # ✅ State Management (Redux/Context)
│   │   │   ├── 📄 rootReducer.ts         # ✅ Root Reducer
│   │   │   └── 📄 store.ts               # ✅ Store
│   │   ├── 📂 styles/                    # ✅ Global Styles (CSS/SASS)
│   │   ├── 📄 App.css                    # ✅ Styles the App component and its child elements
│   │   ├── 📄 App.tsx                    # ✅ Main application file
│   │   ├── 📄 index.css                  # ✅ Defines global styles that apply across the entire app
│   │   ├── 📄 main.tsx                  
│   │   └── 📄 vite.config.ts           
│   ├── 📄 .gitignore                     # ✅ Git ignore file
│   ├── 📄 index.html                     # ✅ Entry point of the React app
│   ├── 📄 package-lock.json              # ✅ Locks the exact versions of dependencies
│   ├── 📄 package.json                   # ✅ NPM Dependencies & Scripts
│   ├── 📄 next.config.js                 # ✅ Next.js Config
│   └── 📄 vite.config.js                 # ✅ Vite Config (if using Vite)
├── 📂 k8s/                               # ✅ Kubernetes Manifests
│   ├── 📂 user-service/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   └── 📂 booking-service/
│       ├── deployment.yaml
│       └── service.yaml
├── 📂 shared/                           # ✅ Shared code between services
│   ├── 📂 contracts/                    # ✅ DTOs and API schemas
│   └── 📂 lib/                          # ✅ Common utilities
│── 📄 docker-compose.yml                # ✅ Docker compose for orchestration
└── 📄 README.md                         # ✅ Project documentation
```
