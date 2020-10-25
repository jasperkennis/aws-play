import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('has a friendly hello', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Welcome dear user!/i);
  expect(textElement).toBeInTheDocument();
});
