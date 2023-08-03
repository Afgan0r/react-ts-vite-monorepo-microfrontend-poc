declare module 'remoteApp/Button' {
  import { FC } from 'react';

  const Button: FC<{ onClick: () => void }>;

  export default Button;
}
