import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TravelPlan from './state-structure/challenge_2/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <TravelPlan />
  </StrictMode>
)
