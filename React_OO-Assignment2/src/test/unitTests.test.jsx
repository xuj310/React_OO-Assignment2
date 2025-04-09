import { describe, test, expect, beforeEach} from 'vitest';
import { validateQuery } from '../App.jsx';
import ThemeChangeButton from '../components/layout/ThemeChangeButton.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';


describe('Function Unit Tests', () => {

  beforeEach(() => {
    let storage = { theme: "dark" }; 
    // Setup mock localStorage
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: (key) => storage[key] || null,
        setItem: (key, value) => {storage[key] = value; },
      },
      writable: true,
    });
  });

  // Test to see if it successfully rejects empty queries
  test('validateQuery should be false if empty query', async () => { 
    const query = '  ';
    const isValid = validateQuery(query);
    
    expect(isValid).toBe(false);
  });

  // Test to see if changing the dark/light theme works
  test('Check if changing the theme works', async () => { 

    render(<ThemeChangeButton />);
    const button = screen.getByRole("button");

    // Initial theme should be the dark theme
    expect(button.textContent).toBe("☀️ Theme");

    // Simulate a click to change theme
    fireEvent.click(button);

    // Verify localStorage now contains the updated theme
    expect(localStorage.getItem("theme")).toBe("light");

    // Check button text updates correctly
    expect(button.textContent).toBe("🌙 Theme");
  });
});