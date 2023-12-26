import React from "react";
import video from './video.mp4';
import "./video.css";
const ReactVideoPlayer = () => {
  return (
  <div className="main"> 
    <video src={video} autoPlay loop muted/>
    </div>
  )
};

export default ReactVideoPlayer;
