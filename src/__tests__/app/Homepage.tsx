import {render, screen} from '@testing-library/react';
import HomePage from '../../app/page'

it('should render home page', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/SkyConnect Explorer/i);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByText(/Buscar/i)).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
})