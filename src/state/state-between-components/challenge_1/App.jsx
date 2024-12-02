import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  return (
    <>
      <Input
        label="First input"
        value={text}
        handleChange={(event) => setText(event.target.value)}
      />
      <Input
        label="Second input"
        value={text}
        handleChange={(event) => setText(event.target.value)}
      />
    </>
  );
}

function Input({ label, value, handleChange }) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

// Challenge 1 of 2: Synced inputs 

// These two inputs are independent. Make them stay in sync: 
// editing one input should update the other input with the same 
// text, and vice versa.