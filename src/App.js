import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export default function App() {
  const storedItems = JSON.parse(localStorage.getItem('items')) || [];
  const [items, setItems] = useState(storedItems);
  const numberOfItems = items.length;
  const packedItems = items.filter(item => item.packed).length;

  function addItem(item) {
    setItems(items => [...items, item]);
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Header onAddItem={addItem} />
      <Main items={items} setItems={setItems} />
      <Footer numberOfItems={numberOfItems} packedItems={packedItems} />
    </>
  );
}
