import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}

// Challenge 1 of 5: Fix reconnecting on every keystroke 
// In this example, the ChatRoom component connects to the 
// chat room when the component mounts, disconnects when it 
// unmounts, and reconnects when you select a different chat 
// room. This behavior is correct, so you need to keep it working.

// However, there is a problem. Whenever you type into the 
// message box input at the bottom, ChatRoom also reconnects 
// to the chat. (You can notice this by clearing the console 
//   and typing into the input.) Fix the issue so that this 
//   doesn’t happen.

// There was no dependency array.
// Added array and passed the roomId prop as it is reactive.
// serverUrl is a variable outside the component, so is not reactive.
// Even if serverUrl was inside the component, it would not need to
// be a dependency as its value does not change, aka const.
// serverUrl would only need to be added to the dependency array if
// it was managed through a state or passsed as a prop.