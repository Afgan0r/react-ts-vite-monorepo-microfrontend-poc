type PropsType = {
  onClick: () => void;
};

const Button = ({ onClick }: PropsType) => (
  <button onClick={onClick} style={{ color: 'red' }}>А я кнопка из другого приложения! Нажми на меня!</button>
);

export default Button;
