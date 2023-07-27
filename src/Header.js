import { useState, useRef } from 'react';

export function Header({ onAddItem }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const itemInput = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: crypto.randomUUID(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    onAddItem(newItem);
    setDescription('');
    setQuantity(1);
    itemInput.current.blur();
  }

  return (
    <header>
      <h1>Pack'n'go</h1>
      <div>
        <h2>What do you need for your trip?</h2>
        <form onSubmit={handleSubmit}>
          <select value={quantity} onChange={e => setQuantity(e.target.value)}>
            {Array.from({ length: 20 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item..."
            minLength={2}
            maxLength={32}
            value={description}
            onChange={e => setDescription(e.target.value)}
            ref={itemInput}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </header>
  );
}
