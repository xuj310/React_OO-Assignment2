import Button from 'react-bootstrap/Button';
import React from 'react';
import { useState, useEffect } from 'react';

// Button for changing themes. We change the Bootstrap theme for Light/Dark theme
export default function ThemeChangeButton() {

    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

    const setCurrentTheme = (theme) => {
        localStorage.setItem("theme", theme);
        setTheme(theme);
    }
    const getCurrentTheme = () => {
        return localStorage.getItem("theme") || [];
    }


    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", getCurrentTheme());
    }, [theme]);

    // Button that swaps the theme
    return (
        <Button className="headerItem" 
            variant="outline-light" 
            onClick={() => setCurrentTheme(theme == "dark" ? "light" : "dark")}> 
            {getCurrentTheme() == "dark" ? "☀️ Theme" : "🌙 Theme"}
        </Button>
    );
  }