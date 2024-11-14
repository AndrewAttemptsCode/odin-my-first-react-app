import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ColorApp from './bg-color-change/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <ColorApp />
  </StrictMode>
)
