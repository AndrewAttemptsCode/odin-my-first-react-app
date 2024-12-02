export default function PackingList( { items, onChangeItem, onDeleteItem } ) {
  
  function handleCheckboxChange(item) {
    onChangeItem({
      ...item,
      packed: !item.packed
    });
  }
  
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => handleCheckboxChange(item)}
            />
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}