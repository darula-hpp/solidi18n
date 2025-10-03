import { createSignal } from 'solid-js';

export const App = () => {
  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);

  return (
    <div style={{ 
      display: 'flex', 
      'flex-direction': 'column', 
      'align-items': 'center', 
      gap: '20px',
      padding: '40px',
      'font-family': 'Arial, sans-serif'
    }}>
      <h1>Simple Counter App</h1>
      <div style={{ 
        'font-size': '48px', 
        'font-weight': 'bold',
        color: '#333'
      }}>
        {count()}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button 
          onClick={decrement}
          style={{
            padding: '10px 20px',
            'font-size': '18px',
            'background-color': '#ff6b6b',
            color: 'white',
            border: 'none',
            'border-radius': '5px',
            cursor: 'pointer'
          }}
        >
          -
        </button>
        <button 
          onClick={increment}
          style={{
            padding: '10px 20px',
            'font-size': '18px',
            'background-color': '#4ecdc4',
            color: 'white',
            border: 'none',
            'border-radius': '5px',
            cursor: 'pointer'
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
