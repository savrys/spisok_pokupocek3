import React from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingList({ items, onToggleItem, onDeleteItem }) {
  return (
    <div className="shopping-list">
      <h2>Список товаров:</h2>
      {items.length === 0 ? (
        <p className="empty-message">Список пуст. Добавьте товары!</p>
      ) : (
        items.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={onToggleItem}
            onDelete={onDeleteItem}
          />
        ))
      )}
    </div>
  );
}

export default ShoppingList;