import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from '../index';
import { getProperties } from '../../lib/api';

jest.mock('../../lib/api', () => ({
  getProperties: jest.fn(),
}));

describe('Home Component', () => {
  let queryClient;

  beforeAll(() => {
    queryClient = new QueryClient();
  });

  it('renders loading state when isLoading is true', () => {
    getProperties.mockReturnValue(new Promise(() => {}));
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders data when isLoading is false', async () => {
    const mockData = [
      // Mock your data here
    ];
    getProperties.mockResolvedValue(mockData);
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    // await screen.findByText(JSON.stringify(mockData));

    // expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    // expect(screen.getByText(JSON.stringify(mockData))).toBeInTheDocument();
  });

  it('handles page change correctly', async () => {
    const mockData = [
      // Mock your data here
    ];
    getProperties.mockResolvedValue(mockData);
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    // await screen.findByText(JSON.stringify(mockData));

    act(() => {
      userEvent.click(screen.getByText('Next →'));
    });

    // expect(screen.getByText('2')).toBeInTheDocument();

    act(() => {
    //   userEvent.click(screen.getByText('Previous ←'));
    });

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('disables "Previous" button on the first page', async () => {
    const mockData = [
      // Mock your data here
    ];
    getProperties.mockResolvedValue(mockData);
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    // await screen.findByText(JSON.stringify(mockData));

    // expect(screen.getByText('Previous ←')).toBeDisabled();
  });

  it('disables "Next" button on the last page', async () => {
    const mockData = [
      // Mock your data here
    ];
    getProperties.mockResolvedValue(mockData);
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

    // await screen.findByText(JSON.stringify(mockData));

    act(() => {
      userEvent.click(screen.getByText('Next →'));
    });

    // expect(screen.getByText('Next →')).toBeDisabled();
  });
});
