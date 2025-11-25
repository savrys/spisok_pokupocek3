import React from 'react';

function ShoppingItem({ item, onToggle, onDelete }) {
  return (
    <div className={`shopping-item ${item.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
        className="item-checkbox"
      />
      <span className="item-name">{item.name}</span>
      <button 
        onClick={() => onDelete(item.id)}
        className="delete-btn"
      >
        ❌
      </button>
    </div>
  );
}

export default ShoppingItem;