import React, {Component} from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const apiKey = "adbf7a5641d4e0a71b928d138a4b6bed";

class App extends Component {
  constructor(props) {
    super(props);
    // defining the initial state
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }
  getWeather = async(e) => {
    // signifies single page application
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // variable that makes the call to the open weather map website for San Diego
    // and United states
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&unites=metric`);
    // convert the data that is received from the apicall to a json object
    const data = await apiCall.json();
    if (city && country) {
      console.log(data);
      // update the value of temperature once the button(Get Weather) is clicked.
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
      });
    }

  }
  render() {
    return (
      <div>
        <Titles/> {/* A prop called getWeather is used to get all the information from getWeather function Access for getWeather function is now availabe on the Form component as well.*/}
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}/>
      </div>
    );
  }
}

export default App;
