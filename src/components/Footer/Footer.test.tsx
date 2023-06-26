// src/components/Footer/Footer.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from './';

test('renders footer with copyright', () => {
  render(<Footer copyright="Test Copyright" />);
  const copyrightElement = screen.getByText(/Test Copyright/i);
  expect(copyrightElement).toBeInTheDocument();
});
