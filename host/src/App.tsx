import { useState } from 'react';
import Button from 'remoteApp/Button';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Я из основного приложения! Текущая цифра: {count}</div>
      <Button onClick={() => setCount(count + 1)} />
    </>
  );
};

export default App;
