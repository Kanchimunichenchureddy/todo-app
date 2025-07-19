# Simple Todo App - Learning Project

A full-stack todo application with **decoupled frontend and backend** architecture for learning web development fundamentals.

## 🏗️ Architecture Overview

This project demonstrates a **decoupled architecture** where frontend and backend run as independent services:

```
Frontend Server (Port 8080)  <---> Backend API (Port 3000)
        │                              │
    ┌───────────────┐               ┌──────────────┐
    │  Static Files │               │  REST API    │
    │  HTML/CSS/JS  │  <-- HTTP --> │  Express.js  │
    │  HTTP Server  │               │  In-Memory   │
    └───────────────┘               └──────────────┘
```

## ✅ **Key Features**

- **✅ Decoupled Services**: Frontend and backend run independently
- **✅ Cross-Origin Requests**: Proper CORS configuration
- **✅ REST API**: Clean API endpoints for CRUD operations
- **✅ Modern JavaScript**: Fetch API, async/await, error handling
- **✅ Independent Deployment**: Each service can be deployed separately

## 🚀 **Quick Start**

### Prerequisites
- Node.js installed on your system
- Two terminal windows/tabs

### 1. Start Backend API (Port 3000)
```bash
cd backend
npm install
npm start
```

### 2. Start Frontend Server (Port 8080)
```bash
# In a new terminal
cd frontend
npm install
npm start
```

### 3. Open Application
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000/api

## 📋 **API Endpoints**

The backend provides these REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/todos` | Get all todos |
| POST   | `/api/todos` | Create new todo |
| PUT    | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |
| GET    | `/health` | Health check |

## 🔧 **Development Setup**

### Option 1: Manual Start
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

### Option 2: Test API Directly
```bash
# Test backend API
curl http://localhost:3000/api/todos
curl -X POST http://localhost:3000/api/todos -H "Content-Type: application/json" -d '{"text": "Test todo"}'
```

## 📁 **Project Structure**

```
01-todo-app/
├── backend/                 # Backend API Server
│   ├── server-simple.js     # Express.js API server
│   ├── package.json         # Backend dependencies
│   └── README.md           # Backend documentation
├── frontend/                # Frontend Server
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Styling
│   ├── script.js           # Frontend logic + API calls
│   ├── server.js           # Static file server
│   ├── package.json        # Frontend dependencies
│   └── README.md          # Frontend documentation
└── README.md              # This file
```

## 🎯 **Learning Objectives**

This decoupled architecture teaches:

### **Frontend Skills**
- Static file serving with Node.js
- Fetch API for HTTP requests
- Async/await for handling promises
- Error handling and user feedback
- Cross-origin requests (CORS)

### **Backend Skills**
- REST API design principles
- Express.js server setup
- HTTP methods and status codes
- JSON request/response handling
- CORS configuration

### **Full-Stack Integration**
- Client-server communication
- API endpoint design
- Service separation and decoupling
- Independent deployment strategies

## 🔍 **Testing the Setup**

### 1. Backend Health Check
```bash
curl http://localhost:3000/health
# Should return: {"status":"OK","timestamp":"...","service":"todo-api"}
```

### 2. API Functionality
```bash
# Get todos
curl http://localhost:3000/api/todos

# Create todo
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"text": "Test from API"}'

# Update todo
curl -X PUT http://localhost:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# Delete todo
curl -X DELETE http://localhost:3000/api/todos/1
```

### 3. Frontend Integration
- Open http://localhost:8080 in browser
- Test all CRUD operations through UI
- Check browser console for any errors

## 🛠️ **Troubleshooting**

### **Common Issues**

**"Cannot GET /" error:**
- Make sure both servers are running on correct ports
- Frontend: http://localhost:8080
- Backend: http://localhost:3000

**CORS errors:**
- Check that backend CORS is configured for port 8080
- Verify frontend is making requests to port 3000

**Port conflicts:**
- Backend uses port 3000
- Frontend uses port 8080
- Make sure both ports are available

## 🚀 **Next Steps**

This decoupled architecture enables:

1. **Independent scaling**: Deploy services separately
2. **Technology flexibility**: Replace frontend with React, Vue, etc.
3. **Database integration**: Add PostgreSQL, MongoDB, etc.
4. **Authentication**: Implement JWT tokens
5. **Real-time features**: Add WebSockets
6. **Microservices**: Break backend into smaller services

## 📚 **Learning Resources**

- **Backend**: See `backend/README.md` for API details
- **Frontend**: See `frontend/README.md` for frontend setup
- **Architecture**: This README covers the overall system design

Perfect for learning full-stack development with proper separation of concerns! 