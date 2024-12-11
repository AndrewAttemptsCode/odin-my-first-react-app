import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClassInput from './class-based/classInput';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <ClassInput />
  </StrictMode>
)
