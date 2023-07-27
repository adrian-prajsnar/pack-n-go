import { useState } from 'react';

export function Main({ items, setItems }) {
  const [sortedBy, setSortedBy] = useState('input');

  let sortedItems;

  if (sortedBy === 'input') sortedItems = items;

  if (sortedBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortedBy === 'packed')
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure that you want to delete all items?'
    );

    confirmed && setItems([]);
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handlePackedItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <main>
      <ul>
        {sortedItems.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => handlePackedItem(item.id)}
            />
            <span className={item.packed ? 'packed' : ''}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => handleDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div>
        <select value={sortedBy} onChange={e => setSortedBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </main>
  );
}
