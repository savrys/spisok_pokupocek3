import React, { useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim()) {
      onAddItem(itemName.trim());
      setItemName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Что нужно купить?"
        className="item-input"
      />
      <button type="submit" className="add-btn">
        Добавить
      </button>
    </form>
  );
}

export default AddItemForm;