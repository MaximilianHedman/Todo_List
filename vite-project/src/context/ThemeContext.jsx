import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(storedTheme);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const themes = ['light', 'dark', 'pride'];
        const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
        setTheme(nextTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };