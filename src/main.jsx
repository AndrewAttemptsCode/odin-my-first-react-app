import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { FavFood } from './FavFood.jsx'
import Bio from './challenge1.jsx'
import TodoList from './challenge4.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoList />
  </StrictMode>
)
