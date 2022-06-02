import React from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C.`);
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=798023fb3d35165272c1fae40ceef0ea&units=metric`;
    axios.get(url).then(handleResponse);

    return (
<InfinitySpin color="white" />
    )
}