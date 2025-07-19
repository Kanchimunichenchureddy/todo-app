# 🚀 Todo API Quick Reference

**Base URL:** `http://127.0.0.1:5001`

## 📋 Endpoints Overview

| Method | Endpoint | Description | Body Required |
|--------|----------|-------------|---------------|
| `GET` | `/` | API status | ❌ No |
| `GET` | `/api/todos` | Get all todos | ❌ No |
| `POST` | `/api/todos` | Create todo | ✅ Yes |
| `GET` | `/api/todos/{id}` | Get todo by ID | ❌ No |
| `PUT` | `/api/todos/{id}` | Update todo | ✅ Yes |
| `PATCH` | `/api/todos/{id}/toggle` | Toggle completion | ❌ No |
| `DELETE` | `/api/todos/{id}` | Delete todo | ❌ No |

## 🔧 Request Examples

### Create Todo
```bash
curl -X POST http://127.0.0.1:5001/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "My Todo", "description": "Optional desc"}'
```

### Get All Todos
```bash
curl http://127.0.0.1:5001/api/todos
```

### Update Todo
```bash
curl -X PUT http://127.0.0.1:5001/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated", "completed": true}'
```

### Toggle Completion
```bash
curl -X PATCH http://127.0.0.1:5001/api/todos/1/toggle
```

### Delete Todo
```bash
curl -X DELETE http://127.0.0.1:5001/api/todos/1
```

## 📊 Response Codes

| Code | Status | When |
|------|--------|------|
| `200` | OK | Success (GET, PUT, PATCH, DELETE) |
| `201` | Created | Resource created (POST) |
| `400` | Bad Request | Validation error |
| `404` | Not Found | Resource not found |
| `500` | Server Error | Internal server error |

## 🏗️ Data Structure

```json
{
  "id": 1,
  "title": "Required string",
  "description": "Optional string",
  "completed": false,
  "created_at": "2025-07-14T11:27:54",
  "updated_at": "2025-07-14T11:27:54"
}
```

## ⚡ JavaScript/Axios Examples

```javascript
// Create todo
await axios.post('/api/todos', { title: 'My Todo' });

// Get all todos
const todos = await axios.get('/api/todos');

// Update todo
await axios.put(`/api/todos/${id}`, { title: 'Updated' });

// Toggle completion
await axios.patch(`/api/todos/${id}/toggle`);

// Delete todo
await axios.delete(`/api/todos/${id}`);
```

## 🚨 Common Errors

```json
// Missing title
{
  "error": "Validation error",
  "messages": { "title": ["Missing data for required field."] }
}

// Todo not found
{
  "error": "404 Not Found: The requested URL was not found..."
}

// Empty title
{
  "error": "Validation error",
  "messages": { "title": ["Invalid value."] }
}
```

---

**💡 Tip:** Always include `Content-Type: application/json` header for POST/PUT requests! 