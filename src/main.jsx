import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FilterableList from './state-between-components/challenge_2/App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <FilterableList />
  </StrictMode>
)
