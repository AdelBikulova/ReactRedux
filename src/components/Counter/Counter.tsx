import { useState } from 'react';
import Button from "components/Button/Button";
import { ButtonControl, CounterResult, CounterWrapper } from "./styles";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const onMinus = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlus = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  const onMultiply = (): void => {
    setCount((prevValue) => prevValue * 2);
  };

  const onDivide = (): void => {
    setCount((prevValue) => Math.round((prevValue / 2) * 100) / 100);
  };

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinus} name="-" />
      </ButtonControl>
      <CounterResult>{count}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlus} name="+" />
      </ButtonControl>
      <ButtonControl>
        <Button onButtonClick={onMultiply} name="*2" />
      </ButtonControl>
      <ButtonControl>
        <Button onButtonClick={onDivide} name="/2" />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;