import { render, screen } from '@testing-library/react';
import IdvLayout from './';

test('renders full screen layout with children', () => {
  render(
    <IdvLayout>
      <p>Test Children</p>
    </IdvLayout>
  );
  const childrenElement = screen.getByText(/Test Children/i);
  expect(childrenElement).toBeInTheDocument();
});
