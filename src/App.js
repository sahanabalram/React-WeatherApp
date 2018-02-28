import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const apiKey = "adbf7a5641d4e0a71b928d138a4b6bed";

class App extends Component {
  getWeather =  async function() {
    // variable that makes the call to the open weather map website for San Diego and United states
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=San Diego,unitedstates&appid=${apiKey}&unites=metric`);
    // convert the data that is received from the apicall to a json object
    const data = await apiCall.json();
    console.log(data);
  }
  render() {
    return(
      <div>
      <Titles/>
      <Form/>
      <Weather/>
      </div>
    );
  }
}

export default App;
