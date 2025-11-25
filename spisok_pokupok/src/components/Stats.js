import React from 'react';

function Stats({ items }) {
  const totalItems = items.length;
  const completedItems = items.filter(item => item.completed).length;
  
  return (
    <div className="stats">
      <h3>📊 Статистика:</h3>
      <p>Всего товаров: {totalItems}</p>
      <p>Куплено: {completedItems}</p>
      <p>Осталось: {totalItems - completedItems}</p>
    </div>
  );
}

export default Stats;   