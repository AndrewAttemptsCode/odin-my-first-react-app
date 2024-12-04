import { useState } from 'react';
import { initialTodos, createTodo, getVisibleTodos } from './todos.js';

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const visibleTodos = getVisibleTodos(todos, showActive);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newToDo => setTodos([...todos, newToDo])}  />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
    </>
  );
}

// Challenge 2 of 4: Cache a calculation without Effects 
// In this example, filtering the todos was extracted 
// into a separate function called getVisibleTodos(). 
// This function contains a console.log() call inside 
// of it which helps you notice when it’s being called. 
// Toggle “Show only active todos” and notice that it 
// causes getVisibleTodos() to re-run. This is expected 
// because visible todos change when you toggle which 
// ones to display.

// Your task is to remove the Effect that recomputes 
// the visibleTodos list in the TodoList component. 
// However, you need to make sure that getVisibleTodos() 
// does not re-run (and so does not print any logs) when 
// you type into the input.
