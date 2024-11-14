import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FeedbackForm from './state-memory/challenge_4/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <FeedbackForm />
  </StrictMode>
)
