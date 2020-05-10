import React from 'react';
import { render } from '@testing-library/react';
import { App } from '.';

test('renders home page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Relocata/i);
  expect(linkElement).toBeInTheDocument();
});
