import React from 'react';
import { render, screen } from '@testing-library/react';
import Place from '../Place';

describe('Place component', () => {
  const placeData = {
    id: 1,
    location: 'Test Location',
    price: 100,
    host: 'Test Host',
    rating: 4.2,
    image: '/images/test-image.png',
    propertyName: 'Test Property',
  };

  it('should render the Place component with provided data', () => {
    render(<Place place={placeData} />);

    expect(screen.getByText('Test Location')).toBeInTheDocument();
    expect(screen.getByText('Hosted by Test Host')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('/ night')).toBeInTheDocument();
    expect(screen.getByText(`${(Number(4.2)/2.1).toFixed(2)}`)).toBeInTheDocument();
  });

  it('should render the link with the correct URL', () => {
    render(<Place place={placeData} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/properties/1');
    expect(link).toHaveTextContent('Test Location');
  });

  it('should render the image with the correct alt text', () => {
    render(<Place place={placeData} />);
    
    const image = screen.getByAltText('Test Property');
    expect(image).toHaveAttribute('src', expect.stringMatching(/^\/_next\/image\?url=/));
  });
});
