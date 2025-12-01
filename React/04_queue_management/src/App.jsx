import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
    console.log(queue);
  };
  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer,
      ),
    );
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}
