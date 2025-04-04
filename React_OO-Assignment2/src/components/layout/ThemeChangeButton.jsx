import Button from 'react-bootstrap/Button';
import React from 'react';
import { useState, useEffect } from 'react';

export default function ThemeChangeButton({fetchAnime}) {

    const [theme, setTheme] = useState("dark"); // Default theme

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]); // Updates HTML tag when theme changes

    return (
        <Button className="headerItem" variant="outline-light" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> {theme == "dark" ? "⚪ Theme" : "⚫ Theme"}</Button>
    );
  }