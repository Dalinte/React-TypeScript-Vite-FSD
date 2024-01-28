import { useCounter } from '../model';

export const CounterButton = () => {
  const { count, setCount } = useCounter();

  return <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>;
};
