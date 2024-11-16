import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TrafficLight from './state-snapshot/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <TrafficLight />
  </StrictMode>
)
