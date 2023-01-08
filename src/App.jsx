import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Location from "./assets/components/Location";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Location />
    </div>
  );
}

export default App;
