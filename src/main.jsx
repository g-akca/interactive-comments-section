import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CommentsProvider } from './context/CommentsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommentsProvider>
      <App />
    </CommentsProvider>
  </StrictMode>,
)
