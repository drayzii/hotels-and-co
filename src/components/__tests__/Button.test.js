import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  it('should render the Button component with provided text', () => {
    const buttonText = 'Click me';

    render(<Button>{buttonText}</Button>);

    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('should execute the onClick function when clicked', () => {
    const buttonText = 'Click me';
    const onClickMock = jest.fn();

    render(<Button onClick={onClickMock}>{buttonText}</Button>);

    const button = screen.getByText(buttonText);
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should apply the provided className to the button', () => {
    const buttonText = 'Click me';
    const customClassName = 'custom-button';

    render(<Button className={customClassName}>{buttonText}</Button>);

    const button = screen.getByText(buttonText);
    expect(button).toHaveClass(customClassName);
  });
});
