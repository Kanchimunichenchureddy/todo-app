import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const todoAPI = {
  // Get all todos
  getAllTodos: () => api.get('/todos'),
  
  // Get a specific todo
  getTodo: (id) => api.get(`/todos/${id}`),
  
  // Create a new todo
  createTodo: (todoData) => api.post('/todos', todoData),
  
  // Update a todo
  updateTodo: (id, todoData) => api.put(`/todos/${id}`, todoData),
  
  // Delete a todo
  deleteTodo: (id) => api.delete(`/todos/${id}`),
  
  // Toggle todo completion
  toggleTodo: (id) => api.patch(`/todos/${id}/toggle`),
};

export default api; 