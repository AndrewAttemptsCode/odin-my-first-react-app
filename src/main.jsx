import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Clock from './state-structure/challenge_1/Clock';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Clock />
  </StrictMode>
)
