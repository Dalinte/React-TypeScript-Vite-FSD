import { CounterButton } from '@features/increase-counter';
import { Title } from '@entities/title';

export const MainPage = () => {
  return (
    <>
      <Title />
      <div className="card">
        <CounterButton />
      </div>
    </>
  );
};
