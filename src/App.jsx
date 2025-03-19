import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Welcome to Amplify!</h1>
        <p>Click the button to increase the count:</p>
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </header>
    </div>
  );
}

export default App;

