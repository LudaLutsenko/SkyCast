import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="Weather">
      <h1>Weather Search</h1>
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          <p>
            <a href="https://https://github.com/LudaLutsenko/react-demo">
              Coded
            </a>{" "}
            by Luda Lutsenko
          </p>
        </footer>
      </div>
    </div>
  );
}
