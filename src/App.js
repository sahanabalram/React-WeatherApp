import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const apiKey = "adbf7a5641d4e0a71b928d138a4b6bed";

class App extends Component {
  getWeather =  async function(e) {
    e.preventDefault();
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
      {/* A prop called getWeather is used to get all the information from getWeather function Access for getWeather function is now availabe on the Form component as well.*/}
      <Form getWeather={this.getWeather}/>
      <Weather/>
      </div>
    );
  }
}

export default App;
