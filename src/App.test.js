import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Board from './board/Board';

test('renders Stockholm', () => {
  render(<App />);
  const linkElement = screen.getByText(/Stockholm/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Paris', () => {
  render(<App />);
  const linkElement = screen.getByText(/Paris/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders length', () => {
  console.log(shallow(<Board />).children.length)
  expect(shallow(<Board />).children.length)
});