import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className='Contador'>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Aumentar</button>
      <button onClick={decrement}>Disminuir</button>
      <button onClick={reset}>Reiniciar</button>
      <p>Autor: Nombre del autor</p>
    </div>
  );
}

export default Counter;
