import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TodoList from './effect/pt2/challenge_2/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <TodoList />
  </StrictMode>
)
