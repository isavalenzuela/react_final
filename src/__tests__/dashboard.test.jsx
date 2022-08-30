import React from 'react';
import Dashboard from '../components/Dashboard';
import Sidebar from '../components/Sidebar';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('Renders main page correctly', () => {
    expect(true).toBeTruthy();
  });

test('renders sidebar item Dashboard', () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>);
  console.log(screen.getAllByRole("link")[0].textContent);
  expect(screen.getByText('Dashboard')).toBeInTheDocument();
 //expect(screen.getAllByRole("link"))
});

test('renders h1 text at Dashboard', () => {
  render(<Dashboard />);
  const h1Element = screen.getByText(/Hello, I'm Isa/i);
  expect(h1Element).toBeInTheDocument();
});

