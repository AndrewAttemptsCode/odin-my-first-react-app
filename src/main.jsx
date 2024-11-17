import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MailClient from './state-structure/challenge_3/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <MailClient />
  </StrictMode>
)
