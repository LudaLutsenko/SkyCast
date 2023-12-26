import React from "react";
import "./App.css";
import Weather from "./Weather";
import ReactVideoPlayer from "./ReactVideoPlayer";
export default function App() {
  return (
    <div className="Weather">
      <h1>Weather Search</h1>
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <ReactVideoPlayer />
        <footer>
          <p>
             Coded by Luda Lutsenko
           <a href="https://github.com/LudaLutsenko/react-demo">GitHub</a> <br />
             
            <a href="https://www.pexels.com/video/digital-illustration-of-a-galaxy-4182910">Video by Oleg Gamulinskii</a>
            
          </p>
        </footer>
      </div>
    </div>
  );
}


/*
Video by Oleg Gamulinskii: https://www.pexels.com/video/digital-illustration-of-a-galaxy-4182910*/
