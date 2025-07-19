# Complete Todo App - Flask + React

A full-stack todo application with Flask backend and React frontend, featuring MySQL database integration.

## 🎯 Project Overview

This is a complete todo application that demonstrates modern web development practices:

**Backend (Flask):**
- RESTful API with full CRUD operations
- MySQL database with SQLAlchemy ORM
- Input validation with Marshmallow
- CORS enabled for frontend integration
- Proper error handling and HTTP status codes

**Frontend (React):**
- Modern React with hooks and functional components
- Beautiful, responsive UI with animations
- Real-time todo management (create, edit, delete, toggle)
- Filtering by status (All, Active, Completed)
- Statistics dashboard
- Error handling and loading states

## 🚀 Quick Start

### Prerequisites
- Python 3.7+ with pip
- Node.js 16+ with npm
- MySQL server running locally
- Git (to clone if needed)

### Automated Setup
Run the setup script to get everything configured automatically:

```bash
cd 01-todo-app
./setup.sh
```

### Manual Setup

#### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd todo-app-backend
   ```

2. Create and activate virtual environment:
   ```bash
   python -m venv todo_env
   source todo_env/bin/activate  # Windows: todo_env\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create MySQL database:
   ```sql
   CREATE DATABASE todo_app;
   ```

5. Start the Flask server:
   ```bash
   python app.py
   ```
   Backend runs on: `http://localhost:5000`

#### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd todo-app-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```
   Frontend runs on: `http://localhost:5173`

## 📁 Project Structure

```
01-todo-app/
├── todo-app-backend/          # Flask API backend
│   ├── app.py                 # Main Flask application
│   ├── models.py              # Database models and schemas
│   ├── config.py              # Database configuration
│   ├── requirements.txt       # Python dependencies
│   ├── todo_env/              # Virtual environment
│   └── README.md              # Backend documentation
├── todo-app-ui/               # React frontend
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── AddTodo.jsx    # Add todo form
│   │   │   ├── TodoItem.jsx   # Individual todo item
│   │   │   └── TodoList.jsx   # Todo list with filters
│   │   ├── services/
│   │   │   └── api.js         # API service layer
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   ├── package.json           # Node dependencies
│   └── README.md              # Frontend documentation
├── setup.sh                  # Automated setup script
└── README_COMPLETE_SETUP.md   # This file
```

## 🔌 API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `GET /api/todos/<id>` - Get a specific todo
- `PUT /api/todos/<id>` - Update a todo
- `DELETE /api/todos/<id>` - Delete a todo
- `PATCH /api/todos/<id>/toggle` - Toggle completion status

## ✨ Features

### Core Functionality
- ✅ Create new todos with title and description
- ✅ Edit todos inline
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos with confirmation
- ✅ Filter todos by status
- ✅ Real-time statistics

### Technical Features
- ✅ RESTful API design
- ✅ MySQL database with proper schema
- ✅ Input validation and error handling
- ✅ CORS configuration
- ✅ Responsive design
- ✅ Modern React patterns
- ✅ Component-based architecture

## 🎨 User Interface

The frontend features a modern, clean design with:
- Gradient background
- Card-based layout
- Smooth animations
- Responsive design for mobile/desktop
- Intuitive filter buttons
- Statistics dashboard
- Inline editing capabilities

## 🔧 Configuration

### Database Configuration
Update `todo-app-backend/config.py` to modify database settings:
```python
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://username:password@localhost/todo_app'
```

### API Configuration
Update `todo-app-ui/src/services/api.js` to change backend URL:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## 🧪 Testing the Application

1. Start both backend and frontend servers
2. Open `http://localhost:5173` in your browser
3. Try creating a few todos
4. Test editing, completing, and deleting todos
5. Use the filter buttons to view different todo states
6. Check the statistics update in real-time

## 🛠️ Development

### Backend Development
- Flask app with auto-reload in debug mode
- SQLAlchemy models in `models.py`
- Add new endpoints in `app.py`
- Database migrations: modify models and restart

### Frontend Development
- Vite provides hot module replacement
- Components are in `src/components/`
- API calls handled in `src/services/api.js`
- Styling with component-specific CSS files

## 📝 Notes

- The backend creates database tables automatically on first run
- Frontend includes error handling for API failures
- Both applications include comprehensive logging
- Production deployment would require additional security measures

## 🤝 Contributing

To extend this application:
1. Add new API endpoints in Flask backend
2. Create corresponding frontend components
3. Update the API service layer
4. Add appropriate styling and error handling

## 📞 Support

If you encounter issues:
1. Ensure MySQL is running and accessible
2. Check that both servers are running on correct ports
3. Verify database connection settings
4. Check browser console for frontend errors
5. Check Flask logs for backend errors

Happy coding! 🚀 