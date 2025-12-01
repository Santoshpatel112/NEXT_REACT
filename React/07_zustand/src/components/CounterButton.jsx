import { useCounterStore } from "../store/counterStore.js";

function CounterButton() {
  const increase = useCounterStore((state) => state.increase);
  const descrease = useCounterStore((state) => state.descrease);

  return (
    <div>
      <button onClick={descrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default CounterButton;
