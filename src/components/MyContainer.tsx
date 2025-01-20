import React, { useState } from 'react';
import MyList from './MyList';

type TItem = { id: string; text: string; clicked: boolean };

const MyContainer: React.FC = () => {
  const [items, setItems] = useState<TItem[]>([
    { id: '1', text: 'First item', clicked: false },
    { id: '2', text: 'Second item', clicked: false },
  ]);
  const [newItemText, setNewItemText] = useState('');

  const addItem = () => {
    if (newItemText.trim()) {
      setItems([
        ...items,
        { id: Date.now().toString(), text: newItemText, clicked: false },
      ]);
      setNewItemText('');
    }
  };

  const updateList = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, clicked: !item.clicked } : item
      )
    );
  };

  return (
    <div>
      <textarea
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add Item</button>
      <MyList header="My List" items={items} updateList={updateList} />
    </div>
  );
};

export default MyContainer;
