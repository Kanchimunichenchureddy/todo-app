# Todo App API Documentation

## 🚀 Base URL
```
http://127.0.0.1:5001
```

## 📋 API Overview

This RESTful API provides complete CRUD operations for managing todos. Built with Flask, SQLAlchemy, and MySQL.

### Features
- ✅ Full CRUD operations
- ✅ Input validation with Marshmallow
- ✅ CORS support for frontend integration
- ✅ Proper HTTP status codes
- ✅ Error handling and validation
- ✅ Auto-generated timestamps

---

## 📡 Endpoints

### 1. API Status
**Get API information and health check**

```http
GET /
```

#### Response
```json
{
    "message": "Todo API is running!",
    "version": "1.0"
}
```

**Status Code:** `200 OK`

---

### 2. Get All Todos
**Retrieve all todos ordered by creation date (newest first)**

```http
GET /api/todos
```

#### Response (Empty)
```json
[]
```

#### Response (With Data)
```json
[
    {
        "completed": true,
        "created_at": "2025-07-14T11:27:56",
        "description": "Create a beautiful frontend",
        "id": 2,
        "title": "Build React App",
        "updated_at": "2025-07-14T11:28:21"
    },
    {
        "completed": true,
        "created_at": "2025-07-14T11:27:54",
        "description": "Master Flask and database integration",
        "id": 1,
        "title": "Learn Flask & SQLAlchemy",
        "updated_at": "2025-07-14T11:28:19"
    }
]
```

**Status Code:** `200 OK`

---

### 3. Create Todo
**Create a new todo item**

```http
POST /api/todos
Content-Type: application/json
```

#### Request Body
```json
{
    "title": "Learn Flask",
    "description": "Master Flask development",
    "completed": false
}
```

#### Required Fields
- `title` (string): Todo title - cannot be empty

#### Optional Fields
- `description` (string): Optional description
- `completed` (boolean): Completion status (default: false)

#### Response
```json
{
    "completed": false,
    "created_at": "2025-07-14T11:27:54",
    "description": "Master Flask development",
    "id": 1,
    "title": "Learn Flask",
    "updated_at": "2025-07-14T11:27:54"
}
```

**Status Code:** `201 Created`

#### Error Response (Validation)
```json
{
    "error": "Validation error",
    "messages": {
        "title": [
            "Missing data for required field."
        ]
    }
}
```

**Status Code:** `400 Bad Request`

---

### 4. Get Todo by ID
**Retrieve a specific todo by its ID**

```http
GET /api/todos/{id}
```

#### Path Parameters
- `id` (integer): Todo ID

#### Response
```json
{
    "completed": false,
    "created_at": "2025-07-14T11:27:54",
    "description": "Master Flask development",
    "id": 1,
    "title": "Learn Flask",
    "updated_at": "2025-07-14T11:27:54"
}
```

**Status Code:** `200 OK`

#### Error Response (Not Found)
```json
{
    "error": "404 Not Found: The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again."
}
```

**Status Code:** `404 Not Found`

---

### 5. Update Todo
**Update an existing todo (partial or complete update)**

```http
PUT /api/todos/{id}
Content-Type: application/json
```

#### Path Parameters
- `id` (integer): Todo ID

#### Request Body
```json
{
    "title": "Learn Flask & SQLAlchemy",
    "description": "Master Flask and database integration",
    "completed": false
}
```

#### Updateable Fields
- `title` (string): Todo title
- `description` (string): Todo description
- `completed` (boolean): Completion status

#### Response
```json
{
    "completed": false,
    "created_at": "2025-07-14T11:27:54",
    "description": "Master Flask and database integration",
    "id": 1,
    "title": "Learn Flask & SQLAlchemy",
    "updated_at": "2025-07-14T11:28:17"
}
```

**Status Code:** `200 OK`

#### Error Response (Validation)
```json
{
    "error": "Validation error",
    "messages": {
        "title": [
            "Invalid value."
        ]
    }
}
```

**Status Code:** `400 Bad Request`

---

### 6. Toggle Todo Completion
**Toggle the completion status of a todo**

```http
PATCH /api/todos/{id}/toggle
```

#### Path Parameters
- `id` (integer): Todo ID

#### Response
```json
{
    "completed": true,
    "created_at": "2025-07-14T11:27:54",
    "description": "Master Flask and database integration",
    "id": 1,
    "title": "Learn Flask & SQLAlchemy",
    "updated_at": "2025-07-14T11:28:19"
}
```

**Status Code:** `200 OK`

---

### 7. Delete Todo
**Delete a todo by its ID**

```http
DELETE /api/todos/{id}
```

#### Path Parameters
- `id` (integer): Todo ID

#### Response
```json
{
    "message": "Todo 2 deleted successfully"
}
```

**Status Code:** `200 OK`

#### Error Response (Not Found)
```json
{
    "error": "404 Not Found: The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again."
}
```

**Status Code:** `404 Not Found`

---

## 🔧 Data Model

### Todo Object Schema
```json
{
    "id": 1,                                    // Auto-generated primary key
    "title": "Learn Flask",                     // Required string (max 200 chars)
    "description": "Master Flask development",  // Optional text
    "completed": false,                         // Boolean (default: false)
    "created_at": "2025-07-14T11:27:54",       // ISO 8601 timestamp (auto-generated)
    "updated_at": "2025-07-14T11:27:54"        // ISO 8601 timestamp (auto-updated)
}
```

### Field Specifications
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | Integer | Auto | Primary key, auto-incrementing |
| `title` | String(200) | ✅ Yes | Todo title, cannot be empty |
| `description` | Text | ❌ No | Optional description |
| `completed` | Boolean | ❌ No | Completion status (default: false) |
| `created_at` | DateTime | Auto | Creation timestamp |
| `updated_at` | DateTime | Auto | Last update timestamp |

---

## 🚨 Error Responses

### Validation Errors (400 Bad Request)
```json
{
    "error": "Validation error",
    "messages": {
        "title": [
            "Missing data for required field."
        ]
    }
}
```

### Not Found Errors (404 Not Found)
```json
{
    "error": "Resource not found"
}
```

### Server Errors (500 Internal Server Error)
```json
{
    "error": "Internal server error"
}
```

---

## 🌐 CORS Configuration

The API supports Cross-Origin Resource Sharing (CORS) for the following origins:
- `http://localhost:5173` (React development server)
- `http://127.0.0.1:5173`

### Allowed Methods
- `GET`
- `POST`
- `PUT`
- `DELETE`
- `PATCH`
- `OPTIONS`

### Allowed Headers
- `Content-Type`
- `Authorization`

---

## 📝 Usage Examples

### cURL Examples

#### Create a Todo
```bash
curl -X POST http://127.0.0.1:5001/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Flask", "description": "Master Flask development"}'
```

#### Get All Todos
```bash
curl http://127.0.0.1:5001/api/todos
```

#### Update a Todo
```bash
curl -X PUT http://127.0.0.1:5001/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "completed": true}'
```

#### Toggle Completion
```bash
curl -X PATCH http://127.0.0.1:5001/api/todos/1/toggle
```

#### Delete a Todo
```bash
curl -X DELETE http://127.0.0.1:5001/api/todos/1
```

### JavaScript/Axios Examples

#### Create Todo
```javascript
const response = await axios.post('http://127.0.0.1:5001/api/todos', {
  title: 'Learn React',
  description: 'Build amazing frontends',
  completed: false
});
```

#### Get All Todos
```javascript
const response = await axios.get('http://127.0.0.1:5001/api/todos');
const todos = response.data;
```

#### Update Todo
```javascript
const response = await axios.put(`http://127.0.0.1:5001/api/todos/${id}`, {
  title: 'Updated title',
  completed: true
});
```

#### Toggle Todo
```javascript
const response = await axios.patch(`http://127.0.0.1:5001/api/todos/${id}/toggle`);
```

#### Delete Todo
```javascript
await axios.delete(`http://127.0.0.1:5001/api/todos/${id}`);
```

---

## 🔍 HTTP Status Codes

| Status Code | Description | When Used |
|-------------|-------------|-----------|
| `200 OK` | Success | GET, PUT, PATCH, DELETE operations |
| `201 Created` | Resource created | POST operations |
| `400 Bad Request` | Validation error | Invalid input data |
| `404 Not Found` | Resource not found | Invalid todo ID |
| `500 Internal Server Error` | Server error | Database or server issues |

---

## 🛠️ Technical Details

### Database
- **Engine**: MySQL with PyMySQL driver
- **ORM**: SQLAlchemy
- **Database**: `todo_app`
- **Table**: `todos`

### Validation
- **Library**: Marshmallow
- **Features**: Required field validation, data type validation, custom validators

### Framework
- **Backend**: Flask 3.0.0
- **Extensions**: Flask-SQLAlchemy, Flask-CORS, Marshmallow
- **Environment**: Development mode with debug enabled

---

## 🚀 Getting Started

1. **Start the API Server**
   ```bash
   cd 01-todo-app/todo-app-backend
   source todo_env/bin/activate
   python3 app.py
   ```

2. **Base URL**: `http://127.0.0.1:5001`

3. **Health Check**: `GET /` should return API status

4. **Start Creating Todos**: Use `POST /api/todos` with required `title` field

---

This API is fully tested and ready for production use with proper error handling, validation, and CORS support for frontend integration. 