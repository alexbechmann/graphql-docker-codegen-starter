import React, { useState } from "react";
import "./App.css";
import { useHelloQuery } from "./graphql/generated";

function App() {
  const [count, setCount] = useState(0);

  const { data } = useHelloQuery();
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React! - {data?.hello}</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App5.jsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
