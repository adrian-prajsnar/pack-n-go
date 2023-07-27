export function Footer({ numberOfItems, packedItems }) {
  return (
    <footer>
      <p>
        {(numberOfItems === 0 &&
          'Start by adding some items to your packing list!') ||
          (numberOfItems === packedItems &&
            `You got everything! You're ready to go.`) ||
          (numberOfItems > 0 &&
            `You have ${numberOfItems} items on your list, and
        you already packed ${packedItems} (
          ${Math.round((packedItems / numberOfItems) * 100)}%)`)}
      </p>
    </footer>
  );
}
