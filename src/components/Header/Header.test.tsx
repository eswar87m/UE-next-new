import { render, screen } from '@testing-library/react';
import Header from './';

test('renders header with title', () => {
  render(<Header title="Test Title" />);
  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});
