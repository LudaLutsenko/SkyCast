import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="Weather">
      <div className="container">
        <Weather/>
        <footer>
          <p>
            <a hreff="https://github.com/LudaLutsenko/react-demo"> GitHub repository</a> {""}
            <br/>
            Coding by Luda Lutsenko😋
          </p>
        </footer>
    </div>
    </div>
  );
}

export default App;
