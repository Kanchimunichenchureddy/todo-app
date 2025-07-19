import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onToggle, onUpdate, onDelete }) => {
  const [filter, setFilter] = useState('all'); // all, active, completed

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="todo-list">
      <div className="todo-stats">
        <div className="stats-item">
          <span className="stats-number">{totalTodos}</span>
          <span className="stats-label">Total</span>
        </div>
        <div className="stats-item">
          <span className="stats-number">{activeTodos}</span>
          <span className="stats-label">Active</span>
        </div>
        <div className="stats-item">
          <span className="stats-number">{completedTodos}</span>
          <span className="stats-label">Completed</span>
        </div>
      </div>

      <div className="todo-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div className="todos-container">
        {filteredTodos.length === 0 ? (
          <div className="empty-state">
            {filter === 'all' && (
              <p>No todos yet. Add one above to get started!</p>
            )}
            {filter === 'active' && (
              <p>No active todos. Great job!</p>
            )}
            {filter === 'completed' && (
              <p>No completed todos yet.</p>
            )}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList; 