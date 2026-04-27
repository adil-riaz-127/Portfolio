import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/adil sanaullah/i);
  expect(headingElement).toBeInTheDocument();
});
