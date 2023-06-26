import { render, screen } from '@testing-library/react';
import BasicLayout from './';

test('renders basic layout with header, footer and children', () => {
  render(
    <BasicLayout headerTitle="Test Title" footerCopyright="Test Copyright">
      <p>Test Children</p>
    </BasicLayout>
  );
  const titleElement = screen.getByText(/Test Title/i);
  const copyrightElement = screen.getByText(/Test Copyright/i);
  const childrenElement = screen.getByText(/Test Children/i);
  expect(titleElement).toBeInTheDocument();
  expect(copyrightElement).toBeInTheDocument();
  expect(childrenElement).toBeInTheDocument();
});
