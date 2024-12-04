import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactManager from './effect/pt2/challenge_3/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <ContactManager />
  </StrictMode>
)
