import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import './AnimatedTodo.css';

const AnimatedTodo = () => {
  const [todos, setTodos] = useState([
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    
    setTodos(prev => [{
      id: Date.now(),
      text: newTodo,
      completed: false,
      isNew: true
    }, ...prev]);
    
    setNewTodo("");
    
    setTimeout(() => {
      setTodos(prev => prev.map(todo => ({
        ...todo,
        isNew: false
      })));
    }, 500);
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Tasks</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          <Plus size={18} />
        </button>
      </form>
      
      <ul className="todo-list">
        {todos.map((todo) => (
          <li 
            key={todo.id} 
            className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.isNew ? 'new-item' : ''}`}
          >
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="checkbox">
                <Check 
                  className="check-icon" 
                  size={16}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </span>
              <span className="todo-text">{todo.text}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedTodo; 