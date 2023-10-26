import React from 'react';
import { render, screen } from '@testing-library/react';
import Reserve from '../Reserve';

describe('Reserve component', () => {
  it('should render the Reserve component with provided data', () => {
    const price = 999;
    const rating = 4.5;
    const reviewsCount = 100;

    render(<Reserve price={price} rating={rating} reviewsCount={reviewsCount} />);

    expect(screen.getByText('$999')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('100 reviews')).toBeInTheDocument();
    
    const reserveButton = screen.getByRole('button', { name: 'Reserve' });
    expect(reserveButton).toHaveClass('text-white bg-pink hover:bg-pink-sec');
  });
});
