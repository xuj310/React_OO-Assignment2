import { describe, test, expect} from 'vitest';
import { validateQuery } from '../App.jsx';
import ThemeChangeButton from '../components/layout/ThemeChangeButton.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';


describe('Function Unit Tests', () => {
  // Test to see if it successfully rejects empty queries
  test('validateQuery should be false if empty query', async () => { 
    const query = '  ';
    const isValid = validateQuery(query);
    
    expect(isValid).toBe(false);
  });

  // Test to see if changing the dark/light theme works
  test('Check if changing the theme works', async () => { 

    render(<ThemeChangeButton />);
    const button = screen.getByRole('button');
    // Initial state
    expect(button.textContent).to.equal("☀️ Theme");
    // Simulate a click
    fireEvent.click(button);
    // After clicking, theme should change
    expect(button.textContent).to.equal("🌙 Theme");
  });
});