import "./App.css";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { Button } from "./components/ui/button.tsx";

function App() {
  return (
    <>
      <Hero />
      <Button variant="outline">Click me</Button>
      <Header />
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">
        Learn to integrate tailwind
      </h1>
      <div className="flex gap-4">
        <Card
          title="Buy Python course"
          buttonText="join now"
          imageurl="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        />
        <Card
          title="Buy Nodejs course"
          imageurl="https://images.pexels.com/photos/18681382/pexels-photo-18681382.jpeg"
        />
        <Card
          title="Somewhere in Europe"
          imageurl="https://images.pexels.com/photos/2519823/pexels-photo-2519823.jpeg"
        />
      </div>
    </>
  );
}

export default App;
