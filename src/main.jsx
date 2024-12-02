import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './effect/challenge_1/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <App />
  </StrictMode>
)
