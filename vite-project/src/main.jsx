import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoProvider from './context/TodoContext.jsx';
import App from './App.jsx'
import './utils/icons.js';
import './index.scss'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TodoProvider>
            <App />
        </TodoProvider>
    </StrictMode>,
)
