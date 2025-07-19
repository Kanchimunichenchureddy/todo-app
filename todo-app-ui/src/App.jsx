import { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { todoAPI } from './services/api';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load todos when component mounts
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await todoAPI.getAllTodos();
      setTodos(response.data);
    } catch (err) {
      console.error('Error loading todos:', err);
      setError('Failed to load todos. Please make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (todoData) => {
    try {
      setError(null);
      const response = await todoAPI.createTodo(todoData);
      setTodos(prevTodos => [response.data, ...prevTodos]);
    } catch (err) {
      console.error('Error creating todo:', err);
      setError('Failed to create todo. Please try again.');
    }
  };

  const handleToggleTodo = async (todoId) => {
    try {
      setError(null);
      const response = await todoAPI.toggleTodo(todoId);
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === todoId ? response.data : todo
        )
      );
    } catch (err) {
      console.error('Error toggling todo:', err);
      setError('Failed to update todo. Please try again.');
    }
  };

  const handleUpdateTodo = async (todoId, todoData) => {
    try {
      setError(null);
      const response = await todoAPI.updateTodo(todoId, todoData);
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === todoId ? response.data : todo
        )
      );
    } catch (err) {
      console.error('Error updating todo:', err);
      setError('Failed to update todo. Please try again.');
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      setError(null);
      await todoAPI.deleteTodo(todoId);
      setTodos(prevTodos =>
        prevTodos.filter(todo => todo.id !== todoId)
      );
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Failed to delete todo. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="app">
        <div className="container">
          <div className="loading">Loading todos...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Todo App</h1>
          <p>Organize your tasks and boost your productivity</p>
        </header>

        {error && (
          <div className="error-banner">
            <p>{error}</p>
            <button onClick={loadTodos} className="retry-btn">
              Retry
            </button>
          </div>
        )}

        <AddTodo onAdd={handleAddTodo} />
        
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onUpdate={handleUpdateTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
