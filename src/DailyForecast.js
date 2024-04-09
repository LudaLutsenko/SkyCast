import React from "react";
import Weathericon from "./Weathericon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }
   console.log(props);
    let apiKey = `ac209dae1f283fb332a5bb7f50b0f468`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="DailyForecast">
        <div className="row">
         <div className="col">
           <div className="forecast-day">Thu</div> 
            <Weathericon code="01d" size={36}/>
           <div className="forecast-temperatures">
            <span className="forecast-temperature-max">19°</span>
            <span className="forecast-temperature-min">10°</span>
            
            </div>
        </div>
    </div>
    </div>
    );
}

/*
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}
*/