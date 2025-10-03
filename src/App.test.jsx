import { render, fireEvent } from '@solidjs/testing-library';

import { App } from './App.jsx';
import { describe, expect, test } from 'vitest';

describe('<App />', () => {
  test('it will render the counter app with title and buttons', () => {
    const { getByText } = render(() => <App />);
    expect(getByText('Simple Counter App')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
  });

  test('it will display initial count of 0', () => {
    const { getByText } = render(() => <App />);
    expect(getByText('0')).toBeInTheDocument();
  });

  test('it will increment the counter when + button is clicked', () => {
    const { getByText } = render(() => <App />);
    const incrementButton = getByText('+');
    const countDisplay = getByText('0');
    
    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('1');
    
    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('2');
  });

  test('it will decrement the counter when - button is clicked', () => {
    const { getByText } = render(() => <App />);
    const decrementButton = getByText('-');
    const countDisplay = getByText('0');
    
    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent('-1');
    
    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent('-2');
  });

  test('it will handle multiple increment and decrement operations', () => {
    const { getByText } = render(() => <App />);
    const incrementButton = getByText('+');
    const decrementButton = getByText('-');
    const countDisplay = getByText('0');
    
    // Increment twice
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('2');
    
    // Decrement once
    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent('1');
    
    // Decrement twice more
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent('-1');
  });
});
