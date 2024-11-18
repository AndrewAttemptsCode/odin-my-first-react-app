import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Person from './more-on-state/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Person />
  </StrictMode>
)
