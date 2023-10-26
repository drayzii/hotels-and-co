import React from 'react';
import { render, screen } from '@testing-library/react';
import MyApp from '../_app';

jest.mock('react-query', () => jest.requireActual('../../__mocks__/react-query'));

describe('MyApp', () => {
  it('should render the header and the page component', () => {
    const Component = () => <div data-testid="page-component">Page Content</div>;
    const pageProps = {};

    render(
      <MyApp Component={Component} pageProps={pageProps} />
    );

    const headerTextElement = screen.getByText('Hotels&Co.');
    expect(headerTextElement).toBeInTheDocument();
    
    expect(screen.getByTestId('page-component')).toBeInTheDocument();
  });
});
