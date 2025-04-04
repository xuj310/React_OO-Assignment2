import Button from 'react-bootstrap/Button';
import React from 'react';
import { useState, useEffect } from 'react';

// Button for changing themes. We change the Bootstrap theme for Light/Dark theme
export default function ThemeChangeButton() {

    const [theme, setTheme] = useState("dark"); // Default theme

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    return (
        <Button className="headerItem" 
            variant="outline-light" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> 
            {theme == "dark" ? "⚪ Theme" : "⚫ Theme"}
        </Button>
    );
  }