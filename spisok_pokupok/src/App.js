import React, { useState } from 'react';
import AddItemForm from './components/AddItemForm';
import ShoppingList from './components/ShoppingList';
import Stats from './components/Stats';
import './styles.css';

function App() {
  const [items, setItems] = useState([]);

  // Добавление нового товара
  const addItem = (itemName) => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      completed: false
    };
    setItems([...items, newItem]);
  };

  // Переключение статуса покупки
  const toggleItem = (itemId) => {
    setItems(items.map(item =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    ));
  };

  // Удаление товара
  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div className="app">
      <h1>📝 Мой список покупок</h1>
      <AddItemForm onAddItem={addItem} />
      <Stats items={items} />
      <ShoppingList 
        items={items} 
        onToggleItem={toggleItem}
        onDeleteItem={deleteItem}
      />
    </div>
  );
}

export default App;