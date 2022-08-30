import React from 'react';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

test('Renders main page correctly', () => {
    expect(true).toBeTruthy();
  });

test('renders sidebar item Dashboard', () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>);
  expect(screen.getAllByRole("link")).toHaveTextContent(/Dashboard/);
});

test('renders h1 text at Dashboard', () => {
  render(<Dashboard />);
  const h1Element = screen.getByText(/Hello, I'm Isa/i);
  expect(h1Element).toBeInTheDocument();
});

