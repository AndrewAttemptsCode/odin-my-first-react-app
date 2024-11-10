import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DrinkList from './challenge7';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <DrinkList />
  </StrictMode>
)
