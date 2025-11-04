import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        {isEditing ? (
          <form onSubmit={handleSubmit} className="edit-form">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="edit-input"
              autoFocus
            />
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="todo-actions">
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          ✒️
        </button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoItem;