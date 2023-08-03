import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Button onClick={() => console.log('test')} />
  </React.StrictMode>,
);
