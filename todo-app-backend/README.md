# Todo App Backend (Flask)

A RESTful API backend for the Todo application built with Flask, SQLAlchemy, and MySQL.

## Features

- Complete CRUD operations for todos
- MySQL database integration
- RESTful API endpoints
- Input validation with Marshmallow
- CORS support for frontend integration
- Error handling and proper HTTP status codes

## API Endpoints

- `GET /` - API status
- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `GET /api/todos/<id>` - Get a specific todo
- `PUT /api/todos/<id>` - Update a todo
- `DELETE /api/todos/<id>` - Delete a todo
- `PATCH /api/todos/<id>/toggle` - Toggle todo completion

## Setup Instructions

### Prerequisites

- Python 3.7+
- MySQL server running locally
- MySQL database named `todo_app`

### Installation

1. Navigate to the backend directory:
   ```bash
   cd 01-todo-app/todo-app-backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv todo_env
   source todo_env/bin/activate  # On Windows: todo_env\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create the MySQL database:
   ```sql
   CREATE DATABASE todo_app;
   ```

5. Update database configuration in `config.py` if needed (default is root user with no password on localhost)

6. Run the application:
   ```bash
   python app.py
   ```

The API will be available at `http://localhost:5000`

## Database Schema

The `todos` table includes:
- `id` - Primary key
- `title` - Todo title (required)
- `description` - Optional description
- `completed` - Boolean completion status
- `created_at` - Timestamp
- `updated_at` - Timestamp

## Example API Usage

### Create a todo:
```bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Flask", "description": "Build a todo API"}'
```

### Get all todos:
```bash
curl http://localhost:5000/api/todos
```

### Toggle completion:
```bash
curl -X PATCH http://localhost:5000/api/todos/1/toggle
``` 