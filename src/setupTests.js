// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders learn react link', () => {
    render(<App />);
    const learnReactLink = screen.getByText(/learn react/i);
    expect(learnReactLink).toBeInTheDocument();
  });

  test('renders App logo', () => {
    render(<App />);
    const appLogo = screen.getByAltText('logo');
    expect(appLogo).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

});
