import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import TodoProvider from './context/TodoContext.jsx';
import App from './App.jsx';
import './utils/icons.js';
import './index.scss';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <TodoProvider>
                <App />
            </TodoProvider>
        </ThemeProvider>
    </StrictMode>,
);