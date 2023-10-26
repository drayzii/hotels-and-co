import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  it('should render the Header component with the title "Hotels&Co."', () => {
    render(<Header />);

    expect(screen.getByText('Hotels&Co.')).toBeInTheDocument();
  });

  it('should render a link to the GitHub repository', () => {
    render(<Header />);

    const githubLink = screen.getByRole('link', { name: /Go to repo/ });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('target', '_blank');
  });
});
