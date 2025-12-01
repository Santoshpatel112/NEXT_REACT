import { useCounterStore } from "../store/counterStore.js";

function CounterValue() {
  const count = useCounterStore((state) => state.count);

  return <h2>Count: {count}</h2>;
}

export default CounterValue;
